# Community and public discussions

Ask a concrete technical question, describe reproducible evidence and participate constructively. Do not mass-post promotional material or imply endorsement.

## Aletheia

- [Leave a Dot — project discussions](https://github.com/KarstenEvans/aletheia/discussions): feedback, original research, questions and contributions.
- [Code of Conduct](https://github.com/KarstenEvans/aletheia/blob/main/CODE_OF_CONDUCT.md).

## GitHub Community

- [GitHub Community discussions](https://github.com/orgs/community/discussions): ask about Pages, integrations, publishing and APIs; choose the relevant category.
- [Sitemap retrieval discussion #149884](https://github.com/orgs/community/discussions/149884): community reports about Google Search Console fetching Pages sitemaps.
- [Sitemap retrieval discussion #199426](https://github.com/orgs/community/discussions/199426): further reports and diagnostic suggestions.
- [GitHub Pages 404 troubleshooting #61073](https://github.com/orgs/community/discussions/61073): troubleshooting publication and routing.
- [GitHub Pages support guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites).
- [GitHub Developer Program](https://github.com/developer): integrations and developer resources.

## Suggested question — not posted

**GitHub Pages: browser can retrieve robots.txt and sitemap.xml, but AI retrieval tools fail. Is there a hosting-level explanation?**

Public project: https://karstenevans.github.io/aletheia/

Chrome can display the project-level robots.txt and sitemap.xml. The standard host-root robots.txt has previously returned a GitHub Pages 404; the project-level file is only advisory. A successful Pages deployment was recorded at 01:30 UTC on 25 November 2026. ChatGPT's web fetcher returned DisabledError, and Gemini reported PERMISSION_DENIED. These are tool messages, not verified HTTP status codes from GitHub. The same files can be read in the source repository. Are there documented Pages/CDN bot restrictions, content-type or redirect issues, or other diagnostics that can distinguish origin access from provider fetch restrictions?

Please share reproducible tests, not speculative conclusions. Do not include private tokens, account exports or sensitive information. Human review and explicit approval are required before posting.
