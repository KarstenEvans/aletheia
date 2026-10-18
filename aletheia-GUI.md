# Aletheia GUI and Naming Contract

**Project:** Aletheia, the Worldwide AI site  
**Repository:** [KarstenEvans/aletheia](https://github.com/KarstenEvans/aletheia)  
**Public address:** https://karstenevans.github.io/aletheia/  
**Scope:** Main Aletheia hub, its homepage, README, navigation, public copy, metadata and future pages.  
**Status:** Active project-specific GUI guidance, 2026-10-18.

## 1. Official terminology (required)

The main hub is called **Aletheia, the Worldwide AI site**.

- Always use **"Worldwide AI site"** (one word, **Worldwide**) when naming or describing the main Aletheia public destination. Prefer **"Aletheia, the Worldwide AI site"** on first mention.
- **Do not** call the Aletheia hub *"World Wide Web"*, *"World Wide AI site"* (three words), or generically *"the website"* in public-facing editorial copy.
- This is **project branding**, not a claim that Aletheia is the entire internet or a global AI authority.
- **"The World Tree of Knowledge"** remains the homepage's visual subtitle and creative identity; it is **not** a replacement for **"Worldwide AI site"**.
- Preserve the agreed motto exactly:
  > One tree to link them all.  
  > Many minds to question them.  
  > And truth to illuminate them.
- Preserve the line **"Rooted in knowledge. Branching into possibilities."**
- Keep the existing green **two-tree** SVG as the emblem: `assets/world-tree.svg`. Do not replace it with an unrelated single-tree illustration.
- Canonical spelling in titles, repository names and URLs is **Aletheia**. Respect the names of the existing child projects, including Aletheia Apps and Aletheia Knowledge.

### Suggested public labels

| Location | Label |
| --- | --- |
| First reference / introductory copy | **Aletheia, the Worldwide AI site** |
| On-page hero title | **ALETHEIA** |
| On-page visual subtitle | **The World Tree of Knowledge** |
| Small identity label | **Worldwide AI site** |
| Link to home | **Visit Aletheia, the Worldwide AI site** |
| Short navigation link | **Aletheia** or **Home** |
| Other project links | Use their actual names, e.g. **Aletheia Apps**, **Aletheia Knowledge** |

### Technical exception

Use technically correct terms such as `GitHub Pages`, HTML, public URL, repository, `index.html` and the Open Graph value `og:type="website"` where needed for browsers, accessibility or developer instructions. The branding rule must not cause broken metadata or incorrect technical documentation. Generic "website" can still describe unrelated external sites and hosting technology; just do not use it as the public name for the main Aletheia hub.

## 2. What Aletheia does

Aletheia is a free, human-centred, AI-provider-independent gateway connecting knowledge, research, learning, apps, articles and open protocols. It is **an index to independent projects**, not one monolithic app or a proprietary AI service.

The World's Tree of Knowledge motif is inspired by Norse Yggdrasil, linked worlds, roots and branches. The tree **connects; it does not control**. Use humour and folklore in the presentation, but do not confuse fiction, hypotheses and verified evidence.

**Knowledge belongs to the project, not the assistant.** Respect project sources, open provenance and uncertainty. Do not represent indexing or search-engine visibility as proof of trustworthiness.

## 3. Homepage UI

- Show the existing **two-tree icon**, **ALETHEIA** title, **The World Tree of Knowledge** subtitle, and exact three-line motto prominently at the top.
- Make **Worldwide AI site** immediately visible as the site's identity, without replacing the title or motto.
- Below the hero, make the project branches obvious, mobile-friendly and genuinely clickable when live.
- Keep **Aletheia Apps**, **Aletheia Knowledge**, **Aletheia Protocol** and **Thalia Protocol** linked to their existing destinations.
- **Aletheia Learn** links to the existing named `aletheia-learn.htm` app; **Aletheia Go** and **Articles** now have committed folder `index.html` landing pages. Never invent working links or call a page live without actually checking deployment.
- Avoid heavy frameworks, mandatory accounts, mandatory AI subscriptions, intrusive banners or giant animations hiding useful links.
- Readable without JavaScript; accessible labels, keyboard focus, responsive layout and reduced-motion support.

## 4. Storyworld and article standards

- Our approved creative style is **original Norse/Elvish woodland fantasy with a touch of humour**, *not* an imitation of any one fiction franchise.
- Refer to [WORLD-TREE-STORYWORLD.md](WORLD-TREE-STORYWORLD.md) before introducing or changing recurring characters, mythology or art direction. Build characters **gradually** and separate historical lore from invented stories.
- Keep the logo, subtitle and three-line motto unchanged. The fantasy theme must never obscure useful links.
- Use [ARTICLE-FOOTER.md](ARTICLE-FOOTER.md) when preparing new article PDFs: Aletheia Protocol, Thalia Protocol, Aletheia Go, the Worldwide AI site and **https://swindon.org.uk/** as clickable links.
- Scandinavian **lørdag/laurdag** comes from Old Norse **laugardagr** (“bath/washing day”), while English **Saturday** retains Saturn. **Dag means day, not dog**.

## 5. Content and publishing rules

- The hub stays small: `index.html` is the human-facing entry point; `README.md` is the source-readable entry point.
- Update the matching `README.md`, `index.html` and this GUI guidance when public identity wording changes.
- Use an actual canonical GitHub Pages URL; publishing is controlled by repository **Settings → Pages**.
- Link to authoritative sources when making factual claims. Keep factual documentation separate from editorial satire.
- Before modifying, read the latest target files and use their current blob SHAs; reconcile concurrent edits rather than overwriting them.
- The Aletheia Protocol and Thalia Protocol are independently maintained, with their own repository governance and licences; link to them instead of silently changing them.
- Use a static, progressively enhanced experience. The public page should stay usable if optional visual or AI features fail.

## 6. Maintenance acceptance checks

1. Main hub described consistently as **Aletheia, the Worldwide AI site**.
2. Green **two-tree** logo, World Tree subtitle, motto and tagline preserved.
3. No public-facing generic rebranding to **"website"** or **"World Wide Web"**.
4. README and homepage terms agree.
5. Live branches have correct destinations; planned branches cannot masquerade as live.
6. HTML remains accessible and source navigation works.
