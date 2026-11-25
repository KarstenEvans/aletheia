# Retrieval and crawler diagnostics

## What is known

- The project is publicly published at https://karstenevans.github.io/aletheia/; source repository is public.
- The owner successfully opened the project-level robots.txt in Chrome on 25 November 2026. The file uses an empty Disallow rule, which does not block crawling.
- Standard robots.txt discovery uses the hostname root: https://karstenevans.github.io/robots.txt. A previous owner browser test returned 404. A missing robots.txt is not a blanket crawl denial.
- The project-local file https://karstenevans.github.io/aletheia/robots.txt is advisory and does not govern the hostname.
- ChatGPT and Gemini have reported fetch failures while the owner browser succeeded. The provider messages do not establish an HTTP 403 from GitHub.
- No Googlebot or AI bot origin logs have been obtained. Google Search Console ownership, live URL inspection and sitemap ingestion must be checked separately.

## Test and record

1. Open the exact public URLs in a signed-out browser and compare with repository raw source.
2. Run on Windows PowerShell (where permitted) using `curl.exe -L -D - -o NUL "https://karstenevans.github.io/aletheia/robots.txt"` and repeat for sitemap.xml, llms.txt, llms-full.txt and docs/. Record the final status, content type and redirects. Use GET rather than relying solely on HEAD.
3. Check both the hostname-root and project-local robots.txt. In Search Console inspect live URLs, sitemap processing, Crawl Stats and robots.txt report.
4. Test ChatGPT, Gemini and a second independent provider with the same exact URLs. Separate indexed search results from live retrieval, and do not confuse provider refusal with a server response.
5. Compare GitHub Pages and GitBook or another independent host with the same public test text, if that host is authorised. Compare HTML, TXT, Markdown, XML and JSON and any available logs. No invented metrics.
6. Record date, environment, exact URL, result and source revision; retest after any build change. Stop after one bounded pass.

## Official guidance

- [Google robots.txt rules](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt).
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).
- [Site Audit workflow](https://karstenevans.github.io/aletheia/discovery/site-audit-prompt.txt).

Do not infer a global block or guarantee search rankings from these tests.
