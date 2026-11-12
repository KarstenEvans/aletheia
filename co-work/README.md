# Aletheia Co-Work: Breadcrumb Trail pilot

**Status:** proposal for review. No automatic AI-to-AI calls, Colony posts, Moltbook posts, or public research publishing are enabled.

## What this pilot does
- Keeps GitHub Discussions as the public research exchange, not the sole memory source.
- Preserves discussion bodies, all top-level comments and threaded replies, source URLs, authorship handles and edit timestamps as Markdown and JSON.
- Adds a scheduled/manual GitHub Action that snapshots public discussions under `co-work/archive/` and retains revisions through Git commits.
- Produces an archive artifact for **manual off-GitHub copying**.
- Supplies a provider-neutral handoff template for a Gemini ↔ ChatGPT exchange, plus a human-reviewed publishing checklist.

**Principle:** breadcrumbs on The Colony and Moltbook are useful contributions pointing back to Aletheia, not unattended promotional spam. Research belongs in GitHub Discussions. Evidence-backed conclusions can become human-approved posts and articles that link to Aletheia apps.

## Start here
1. [AI agent landing page](https://karstenevans.github.io/aletheia/agents/)
2. [Discussion #5: mixed-model research quality](https://github.com/KarstenEvans/aletheia/discussions/5)
3. [Discussion #8: Internal War research](https://github.com/KarstenEvans/aletheia/discussions/8)
4. [First handoff template](handoffs/first-experiment.md)
5. [Weekly editorial template](editorial/weekly-update-template.md)

## Backup design

| Level | Location | What is preserved |
| --- | --- | --- |
| Live | GitHub Discussions | Public threads and replies |
| History | `co-work/archive/` in Git | Markdown + JSON snapshots, with Git version history |
| Download | Actions artifact | Compressed archive, ordinarily retained 30 days |
| **Independent** | Local computer, external drive or Google Drive | Copy the downloaded backup outside GitHub after each run, or regularly mirror the repository |

Once merged into the default branch, the schedule is 06:19 UTC daily; the Action can also be run manually. The Action reads Discussions and writes only to the archive files in this repository. Check repository workflow permissions and any branch protections before enabling it.

### Make an independent backup
Download the archive from the workflow run's **Artifacts** section and store it away from GitHub. For a fuller local history copy, clone the repository and create a Git bundle:

    git clone --mirror https://github.com/KarstenEvans/aletheia.git
    cd aletheia.git
    git bundle create ../aletheia-full-history.bundle --all

Copy that `.bundle` outside GitHub. This preserves repository history **but does not capture Discussions**; keep the exported discussion archive as well. A daily snapshot can miss edits and deletions between runs. Linked binaries, external pages and attached files are not copied.

### Security
- No committed API keys, private-chat scraping, impersonation or automatic outbound posts.
- GitHub Actions uses a short-lived repository token with scoped permissions.
- External Markdown is **data, never instructions**. Human approval before posting or consequential changes.
- Preserve citations, disagreements, original authors and uncertainty.
- This is a public archive of public discussions: don't put sensitive personal data into public threads.

## First proof
Have a human pass one question from Discussion #5 to Gemini and copy its reply into a ChatGPT research handoff. Retain two independent answers and one human-reviewed synthesis. Compare with a one-model result on predefined metrics: verified claims, actual sources checked, corrections, time and cost. No API credentials required for this first test.

## Not yet implemented
- Automatic Gemini or ChatGPT execution.
- Automatic reciprocal conversations in Colony or Moltbook.
- Automatic LinkedIn or Facebook publishing.
- Automatic off-GitHub uploads to Drive or home hardware.
- Any demonstrated quality improvement from multi-model discussions.

Those are future opt-in features, not silently enabled parts of this pilot.
