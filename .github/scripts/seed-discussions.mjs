// One-time, idempotent Aletheia GitHub Discussions seeder.
// Uses GitHub Actions' short-lived GITHUB_TOKEN; never hard-code or log credentials.
// A discussion is only considered created after GitHub GraphQL returns a URL.
import {readFileSync} from "node:fs";

const [owner,name] = (process.env.GITHUB_REPOSITORY || "").split("/");
const token = process.env.GITHUB_TOKEN;
if(!owner || !name || !token) throw new Error("Missing GITHUB_REPOSITORY or GITHUB_TOKEN");
if(owner!=="KarstenEvans" || name!=="aletheia") throw new Error("Repository safety check failed");
const seedFile=JSON.parse(readFileSync("agents/discussion-seeds.json","utf8"));
if(seedFile.owner!==`${owner}/${name}` || !Array.isArray(seedFile.discussions))
  throw new Error("Unexpected discussion seed manifest");

async function graphql(query,variables={}){
  const response=await fetch("https://api.github.com/graphql",{
    method:"POST",
    headers:{"Authorization":`Bearer ${token}`,"Accept":"application/vnd.github+json","Content-Type":"application/json","X-GitHub-Api-Version":"2022-11-28"},
    body:JSON.stringify({query,variables})
  });
  const payload=await response.json();
  if(!response.ok || payload.errors?.length)
    throw new Error(`GitHub GraphQL failed (${response.status}): ${JSON.stringify(payload.errors||payload.message)}`);
  return payload.data;
}
const readQuery=`query($owner:String!,$name:String!,$after:String){
 repository(owner:$owner,name:$name){
  id
  discussionCategories(first:25){nodes{id name}}
  discussions(first:100,after:$after){nodes{title body url}pageInfo{hasNextPage endCursor}}
 }
}`;
let after=null,repositoryId=null,categories=[],existing=[];
do{
  const data=(await graphql(readQuery,{owner,name,after})).repository;
  if(!data)throw new Error("Repository not visible in GraphQL");
  repositoryId=data.id;
  categories=data.discussionCategories.nodes;
  existing.push(...data.discussions.nodes);
  after=data.discussions.pageInfo.hasNextPage?data.discussions.pageInfo.endCursor:null;
}while(after);

const categoryFor=(name)=>categories.find(c=>c.name.toLowerCase()===name.toLowerCase());
if(!categoryFor("General"))throw new Error("Expected GitHub Discussions General category is missing");
const createMutation=`mutation($input:CreateDiscussionInput!){
 createDiscussion(input:$input){discussion{id url title}}
}`;
for(const seed of seedFile.discussions){
  if(!seed.id || !seed.title || !seed.body)throw new Error("Invalid seed entry");
  const marker=`<!-- aletheia-seed:${seed.id} -->`;
  if(existing.some(x=>x.title===seed.title || x.body?.includes(marker))){
    console.log(`Already exists: ${seed.title}`);
    continue;
  }
  const chosen=categoryFor(seed.category)||categoryFor("General");
  const input={repositoryId,categoryId:chosen.id,title:seed.title,body:seed.body+"\n\n"+marker};
  let result;
  try{
    result=(await graphql(createMutation,{input})).createDiscussion.discussion;
  }catch(err){
    if(chosen.name==="General")throw err;
    console.warn(`Category ${chosen.name} rejected; retrying General: ${err.message}`);
    input.categoryId=categoryFor("General").id;
    result=(await graphql(createMutation,{input})).createDiscussion.discussion;
  }
  if(!result?.url)throw new Error(`GitHub gave no URL for: ${seed.title}`);
  existing.push({title:seed.title,body:input.body,url:result.url});
  console.log(`Created: ${result.url}`);
}
console.log(`Seed complete: ${seedFile.discussions.length} requested, ${existing.length} now in repository view`);
