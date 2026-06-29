# Project Guide for WorkBuddy

## 1. Project identity

- **Project name:** wangyouan.github.io — You'an Wang (王佑安) Academic Homepage
- **Owner:** You'an Wang, Associate Professor of Finance, WISE & SOE, Xiamen University
- **Type:** Jekyll static website, deployed to GitHub Pages
- **Repo:** `https://github.com/wangyouan/wangyouan.github.io`
- **Live URL:** `https://wangyouan.github.io`
- **Design system:** Custom "Swiss Modernism" theme — built as Jekyll source, not an external gem theme

## 2. Project objective and scope

### Core objective
Maintain a bilingual (EN/ZH) academic homepage displaying research, CV, teaching, service, and news.

### In scope
- Updating YAML data files for publications, presentations, service, news, grants, teaching, employment
- Editing page content (`cv.md`, `students.md`, `teaching.md`, `research.md`, `contact.md`)
- Modifying layouts (`_layouts/swiss-*.html`) and SCSS (`_sass/_swiss-*.scss`)
- Committing and pushing to trigger GitHub Pages redeploy
- Maintaining `events.md` as a comprehensive chronological activity log (not shown on homepage)
- Using the bundled `website-maintenance` skill for routine updates

### Out of scope
- Major refactors of the design system without explicit user approval
- Adding new pages without direction
- Writing new research content or papers
- Managing data on external servers (WRDS, CSMAR — these are separate projects)

### Immutable constraints
- **News section**: always exactly 3 items on homepage; when adding a 4th, delete the oldest
- **Peer review**: plain inline list (semicolons), no bullet points; labeled "Ad Hoc Referee"
- **Service**: Discussant, Session Chair, and Committee roles all merged under one "Service" heading in CV
- **Bilingual**: every user-visible string needs both `en` and `zh` versions via `data-lang-en` / `data-lang-zh` attributes
- **No fabricated data**: never invent journal names, meeting names, paper titles, or roles
- **Design**: Swiss Modernism — Crimson Pro headings, Atkinson Hyperlegible body, no external CSS frameworks

## 3. Current status

### Completed
- [x] Swiss Modernism redesign applied to all pages
- [x] 4 publications in `_data/publications.yml` (JCF 2022, MS 2023, RF 2024, JFQA 2026)
- [x] 1 working paper in `_data/working_papers.yml`
- [x] 30 presentations (2018–2026) in `_data/presentations.yml`
- [x] 7 peer review journals in `_data/peer_review.yml`
- [x] Service entries: 5 total (2 Discussant + 3 Session Chair/Committee roles)
- [x] 3 News items on homepage (limit enforced)
- [x] `events.md` comprehensive activity log created
- [x] Students/Join Us standalone page (`students.md`)
- [x] README rewritten
- [x] `website-maintenance` skill created in `.workbuddy/skills/`
- [x] GitHub Actions CI/CD auto-deploys on push to master

### In progress / waiting
- [ ] ISAFE 2026 role in `events.md` only says "Presenter" — should also include "Discussant" (per user's earlier statement: commented on Qingjie Du's paper)
- [ ] CEA 2026 role in `events.md` says only "Attendee" — should also include "Session Chair, Institutions and Green Innovation" and "Presenter" (per user: reported paper on 跨境融资开放)
- [ ] AMES 2026 (July, Vietnam) — still tagged "Planned" in news, not yet attended

### Not yet started
- [ ] No known pending major design changes

## 4. Key decisions and constraints

1. **3-item news cap** — hard rule, enforced by `limit:3` in swiss-home.html loop. When adding news, always trim to exactly 3.
2. **Planned/计划中 tag** — upcoming events get `tag_en: "Planned"` / `tag_zh: "计划中"` rendered as italic parenthetical `(Planned)` inline after text.
3. **Peer review format** — plain comma-separated journal names under "Ad Hoc Referee", no bullet points, no notes.
4. **Service consolidation** — all discussant, session chair, and committee roles in a single `_data/service.yml` file, rendered under one "Service" section on CV.
5. **GCFC 2026** — specifically a "Program Committee" role with Keynote Chair (Shiyang Huang) + Session Chair responsibilities.
6. **Bilingual coverage** — all data fields should have `_zh` variants. The JavaScript language toggle reads `data-lang-en`/`data-lang-zh` attributes.
7. **Commit flow** — always commit + push after changes. Push triggers GitHub Actions deploy. If push fails (auth), notify user to push manually.

## 5. Directory map

```
├── _config.yml              # Jekyll config (title, plugins, excludes)
├── Gemfile                  # Ruby dependencies (jekyll, sass-embedded, kramdown-parser-gfm)
├── Gemfile.lock             # Locked gem versions (in .gitignore)
├── index.html               # Entry point → layout: swiss-home
├── cv.md                    # CV page
├── research.md              # Research/Publications page
├── teaching.md              # Teaching page
├── students.md              # Join Us / Students page
├── contact.md               # Contact page
├── events.md                # Chronological activity log (not on homepage)
├── 404.md                   # Custom 404 page
├── blog.html                # Legacy blog page
├── style.scss               # SCSS entry point (imports _sass/ partials)
├── assets/
│   ├── css/site.css         # Compiled CSS output (generated by Jekyll)
│   └── js/main.js           # Language toggle + mobile nav + detail panels
├── _data/                   # ⭐ All content lives here (YAML)
│   ├── publications.yml     # Published papers (4 entries)
│   ├── working_papers.yml   # Working papers (1 entry)
│   ├── presentations.yml    # Conference presentations (30 entries, 2018-2026)
│   ├── news.yml             # Homepage news (exactly 3 items)
│   ├── service.yml          # Discussant/Session Chair/Committee roles (5 entries)
│   ├── peer_review.yml      # Ad Hoc Referee journals (7 journals, inline)
│   ├── teaching.yml         # Course list
│   ├── grants.yml           # Research grants
│   ├── employment.yml       # Employment history
│   ├── education.yml        # Education
│   ├── sections.yml         # CV section definitions (legacy resume layout)
│   ├── skills.yml           # Programming/language skills (legacy)
│   ├── honors.yml           # Awards (legacy)
│   ├── papers.yml           # Publications + working papers (LEGACY — superseded)
│   ├── academia_services.yml# Discussant/Session Chair history (LEGACY)
│   ├── professional.yml     # Pre-academic work history (legacy)
│   └── research_interests.yml # Bio paragraph (legacy)
├── _layouts/
│   ├── swiss-home.html      # ⭐ Homepage layout (Hero, News, Employment, Research, Teaching, Education)
│   ├── swiss-page.html      # ⭐ Generic page layout with nav
│   ├── default.html         # Legacy Jekyll Now layout
│   ├── page.html            # Legacy page layout
│   ├── post.html            # Legacy blog post layout
│   └── resume.html          # Legacy CV/resume layout
├── _includes/
│   ├── coauthors-link.html  # Name→URL matching for coauthor links
│   ├── layout/head.html     # HTML head (meta, CSS, favicon)
│   ├── layout/footer.html   # Footer
│   ├── meta.html            # Additional meta tags
│   ├── svg-icons.html       # SVG icon set
│   ├── analytics.html       # Google Analytics (currently empty)
│   ├── disqus.html          # Disqus comments (currently empty)
│   └── resume/              # Legacy resume partials
├── _sass/                   # ⭐ Swiss Modernism design system
│   ├── _swiss-tokens.scss   # CSS custom properties (colors, spacing, typography)
│   ├── _swiss-base.scss     # Reset + base typography
│   ├── _swiss-layout.scss   # Grid, header, footer, navigation
│   ├── _swiss-components.scss # Hero, cards, items, news, detail panels
│   └── _swiss-responsive.scss # Breakpoints (desktop 1440, tablet 768, mobile 375)
├── images/                  # Profile photos, paper slides, research figures
│   ├── profile.jpg          # Profile photo
│   ├── xmu.png              # XMU logo (favicon)
│   └── research/paper1-5/   # Research paper slides (~100 images)
├── data/useful_data/        # Legacy sample data (compustat_sample.csv/.pkl, sample_data.zip)
├── notebooks/               # Legacy Jupyter notebooks (2018)
├── .github/workflows/
│   └── jekyll.yml           # GitHub Actions CI/CD → deploys to Pages on push
├── .workbuddy/
│   ├── skills/website-maintenance/SKILL.md  # Website maintenance workflow skill
│   └── memory/              # Session memory logs
└── _site/                   # Built site output (gitignored, generated by Jekyll/CI)
```

## 6. Key files and entry points

| Priority | File | Purpose |
|----------|------|---------|
| ⭐⭐⭐ | `_data/news.yml` | Homepage news (3 items, ordered newest first) |
| ⭐⭐⭐ | `_data/service.yml` | Academic service roles |
| ⭐⭐⭐ | `_data/presentations.yml` | Conference presentations (30 entries) |
| ⭐⭐⭐ | `_data/publications.yml` | Published papers |
| ⭐⭐⭐ | `_layouts/swiss-home.html` | Homepage template |
| ⭐⭐⭐ | `_layouts/swiss-page.html` | Page template + navigation |
| ⭐⭐ | `events.md` | Full activity log (not on homepage) |
| ⭐⭐ | `cv.md` | CV page content |
| ⭐⭐ | `_sass/_swiss-components.scss` | All component styles |
| ⭐⭐ | `_sass/_swiss-tokens.scss` | Design tokens |
| ⭐ | `_data/peer_review.yml` | Ad Hoc Referee list |
| ⭐ | `_data/teaching.yml` | Course list |
| ⭐ | `_data/grants.yml` | Research grants |
| ⭐ | `_includes/coauthors-link.html` | Coauthor URL matching logic |
| ⭐ | `.workbuddy/skills/website-maintenance/SKILL.md` | Maintenance workflow reference |

## 7. Standard workflow

### Adding a new event/news
1. Edit `_data/news.yml` — insert new entry at top with `date`, `date_display_en`, `date_display_zh`, `text_en`, `text_zh`
2. If future event → add `tag_en: "Planned"`, `tag_zh: "计划中"`
3. If past event → no tag
4. **Delete the 4th entry** (oldest) to maintain exactly 3 items
5. Edit `events.md` — add corresponding entry in chronological order
6. Commit with meaningful message, push to `master`

### Updating service records
1. Edit `_data/service.yml` — add new entry with `role`, `role_zh`, `date`, `venue`, `venue_zh`
2. Edit `events.md` if applicable
3. Commit + push

### Marking a planned event as completed
1. Edit `_data/news.yml` — remove `tag_en` and `tag_zh` lines from the entry
2. Update `text_en`/`text_zh` from future tense to past tense
3. Commit + push

### Local development
```bash
# From within the project directory:
bundle exec jekyll serve
# Opens at http://localhost:4000
```

The site is auto-deployed on push to master via GitHub Actions. No manual build step needed.

## 8. Data and external resources

### Data sources
- **All content** is hand-authored YAML in `_data/`. No database, no API calls, no dynamic data at runtime.
- **Research paper PDFs** are linked via external URLs (SSRN, journal websites) — not stored in this repo.
- **Conference materials** (PDFs, docx) are stored on OneDrive at `D:/OneDrive/Conference/` — this is the **old computer path**, not part of this repo.
- **Sample data** in `data/useful_data/` is legacy and not used by the current website.

### Auth requirements
- **GitHub push**: Requires git credential (HTTPS with personal access token or SSH key)
- No other authentication needed at runtime

### Data not in repo
- Conference program PDFs → stored on OneDrive, need to be re-accessible on new computer
- Full-resolution profile photo source → check if `images/profile.jpg` is the only version

### Privacy / restrictions
- Public academic homepage — no sensitive data in the repo
- `_config.yml` email is public (wangyouan@xmu.edu.cn)

## 9. Software and dependency environment

### Current computer (audit date: 2026-06-29)
| Software | Version | Path |
|----------|---------|------|
| Windows | Windows 11 (x64) | — |
| Ruby | 4.0.2 | `d:/Ruby40-x64/bin/ruby.exe` |
| Bundler | 4.0.10 | `d:/Ruby40-x64/bin/bundle.bat` |
| Jekyll | 4.4.1 | Installed via bundler |
| Git | 2.54.0 | System PATH |
| Node.js | 22.22.2 | `d:/Program Files/nodejs/node.exe` |

### Ruby gems (from Gemfile.lock)
Key gems: jekyll 4.4.1, sass-embedded, kramdown-parser-gfm, jekyll-sitemap, jekyll-feed, jekyll-seo-tag

### CI/CD
- GitHub Actions: `ruby/setup-ruby@v4` with Ruby 3.1, `actions/configure-pages@v5`, `actions/deploy-pages@v4`
- Build command: `bundle exec jekyll build --baseurl ...`
- Environment: `JEKYLL_ENV=production`

### No dependencies on
- Python, R, Stata (not needed to build the site)
- CUDA / GPU
- Docker
- Database servers
- VPN

## 10. Machine-specific paths and settings

### Hardcoded paths — NONE found in project files
The project uses only relative paths. All `site.baseurl`, `relative_url` filters are Jekyll-standard and portable.

### Old computer paths (NOT in project files, but relevant context)
| Old Path | New Computer Action |
|----------|---------------------|
| `D:/Users/Dell/WebStormProjects/website/` | Clone repo to any directory |
| `d:/Ruby40-x64/` | Install Ruby (3.1+ recommended) at system default location |
| `D:/OneDrive/Conference/` | Re-establish OneDrive sync for conference materials |
| `D:/Users/Dell/Documents/Database/CSMAR/` | Separate CSMAR project — not needed for this website |

### Environment variables
- None required for building or running this website

### Fonts
- **Google Fonts**: Crimson Pro (headings), Atkinson Hyperlegible (body) — loaded via CDN, no local font files needed. However, the current swiss theme does NOT include Google Fonts CDN link in `head.html` — fonts are specified only in CSS `font-family` fallback stacks. If the design relies on these fonts displaying, verify they are available or add a CDN link on new computer.

## 11. Git and version-control status

- **Current branch:** `master`
- **Remote:** `origin → https://github.com/wangyouan/wangyouan.github.io.git`
- **Status:** Clean — no uncommitted changes, no untracked files, no unpushed commits
- **HEAD:** `1a10aef` — "Update service: GCFC Keynote Chair, add 货币研讨会 committee role"
- **Last push:** All committed changes are pushed
- **.gitignore coverage:** Covers `_site/`, `.sass-cache/`, `.jekyll-cache/`, `.bundle/`, `vendor/`, `.idea/`, `Gemfile.lock`, `.workbuddy/`
- **Migration recommendation:** `git clone` is preferred over copying directory — the repo is clean and portable

### Pre-migration check
- No stashed changes
- No uncommitted work
- Git LFS: NOT used

## 12. Outputs and validation standards

### What constitutes "correct" output
- `jekyll build` (or `jekyll serve`) completes without errors
- All pages render at `http://localhost:4000`
- Language toggle switches EN↔ZH on all content
- Mobile responsive at 375px, 768px, 1440px breakpoints
- News shows exactly 3 items, newest first
- CV page shows all sections: Employment, Education, Research, Presentations, Service, Teaching

### Build output
- `_site/` directory (gitignored) — auto-deployed to GitHub Pages by CI
- CSS compiled to `assets/css/site.css`

### Validation commands
```bash
bundle exec jekyll build --verbose   # Check for build errors
bundle exec jekyll serve             # Full local preview
```

### Known build caveats
- Some legacy layouts (`_layouts/resume.html`, `_layouts/default.html`) reference deprecated data files — they won't render correctly but don't affect the active Swiss pages
- The `_data/papers.yml` and `_data/academia_services.yml` files are superseded by `publications.yml` + `working_papers.yml` and `service.yml` respectively — kept for legacy compatibility

## 13. Known issues and unresolved questions

### Known issues
1. **events.md role discrepancies** — ISAFE 2026 lists only "Presenter" but user mentioned also being Discussant for Qingjie Du's paper. CEA 2026 lists only "Attendee" but user mentioned also being Session Chair + Presenter. These need verification before being fixed.
2. **Legacy data duplication** — `_data/papers.yml` and `_data/academia_services.yml` contain old-format data that overlaps with `publications.yml`/`service.yml`. The Swiss theme only reads the new files, so this is cosmetic — the old files are effectively dead code.
3. **Gemfile.lock in .gitignore** — CI builds fresh on each deploy, but local `bundle install` results may differ slightly from CI. The `.ruby-version` file is also missing.
4. **Google Fonts not linked** — `_includes/layout/head.html` does not include Google Fonts CDN links. Crimson Pro and Atkinson Hyperlegible are specified only in CSS `font-family` stacks, so they may fall back to system fonts on machines without these fonts installed.
5. **_site directory has stale artifacts** — old Jekyll Now blog posts (`blog/`, `first-post/`, `mac_install_postgresql/`, etc.) exist in `_site/` from previous builds. This is cosmetic since `_site/` is gitignored and regenerated on each build.

### Unresolved questions
- Should the legacy data files (`papers.yml`, `academia_services.yml`, `sections.yml`, `skills.yml`, `honors.yml`, `professional.yml`, `research_interests.yml`) be deleted or kept as archives?
- Should Google Fonts CDN links be added to `head.html` to ensure consistent typography?
- Should a `.ruby-version` file be created to pin Ruby version for CI and local consistency?

## 14. Priority next steps

1. **Verify ISAFE 2026 and CEA 2026 roles** in `events.md` — confirm with user whether Discussant/Session Chair details are correct before updating
2. **AMES 2026** — after July attendance, mark as completed (remove Planned tag), update text to past tense
3. **Consider adding `.ruby-version`** file to pin Ruby 3.1+ for CI consistency
4. **Consider adding Google Fonts CDN** to head.html for consistent typography
5. **Decide on legacy files** — keep or remove `_data/papers.yml`, `_data/academia_services.yml`, etc.

## 15. New-computer setup checklist

1. **Clone repository:**
   ```bash
   git clone https://github.com/wangyouan/wangyouan.github.io.git
   cd wangyouan.github.io
   ```

2. **Install Ruby** (3.1+ recommended, 4.x works):
   - Windows: RubyInstaller from https://rubyinstaller.org/
   - macOS: `brew install ruby@3`
   - Linux: `sudo apt install ruby-full`
   - Verify: `ruby --version`

3. **Install bundler and dependencies:**
   ```bash
   gem install bundler
   bundle install
   ```

4. **Configure Git:**
   ```bash
   git config user.name "WYA"
   git config user.email "wangyouan0629@hotmail.com"
   # Set up GitHub authentication (HTTPS token or SSH key)
   ```

5. **No data paths to configure** — project uses only relative paths.

6. **No environment variables needed.**

7. **Build and verify:**
   ```bash
   bundle exec jekyll serve
   # Open http://localhost:4000
   ```

8. **Push test (optional):**
   ```bash
   git push origin master  # Verify auth works
   ```

9. **Restore OneDrive sync** for conference materials (not required for website, but needed for maintaining `_data/` content).

## 16. Minimum viable test

Run these commands on the new computer to verify everything works:

```powershell
# 1. Ruby available?
ruby --version

# 2. Bundler available?
gem install bundler
bundle --version

# 3. Dependencies install cleanly?
cd <project-root>
bundle install

# 4. Jekyll builds without errors?
bundle exec jekyll build

# 5. Start local server and check homepage
bundle exec jekyll serve
# Visit http://localhost:4000 in browser
# Verify: hero section, 3 news items, language toggle works
```

Expected result: site builds and serves locally without errors. All pages render with Swiss Modernism styling.

## 17. Full reproducibility test

After completing the setup checklist:

1. `bundle exec jekyll build` — zero errors
2. `bundle exec jekyll serve` — site accessible at localhost:4000
3. Browse all pages: `/`, `/cv/`, `/research/`, `/teaching/`, `/students/`, `/contact/`
4. Toggle language EN↔ZH on each page — all `data-lang` elements switch
5. Check responsive layout at 375px, 768px, 1440px widths
6. Verify News shows exactly 3 items
7. Verify CV shows all sections (Employment, Education, Research, Presentations, Service, Teaching)
8. Push a trivial change (add a comment) → verify GitHub Actions deploys successfully → check live site

## 18. Sensitive configuration to recreate manually

- **GitHub authentication** — SSH key or HTTPS personal access token for `git push` to `github.com/wangyouan/wangyouan.github.io`
- No other secrets, API keys, or tokens are used by this project

## 19. Instructions for WorkBuddy

### On first entry to this project
1. **Read this file** (`WORKBUDDY.md`) first
2. Load the `website-maintenance` skill from `.workbuddy/skills/website-maintenance/SKILL.md` for detailed data schema reference
3. Read current `_data/news.yml`, `_data/service.yml`, and `_data/presentations.yml` to understand current state

### Before making changes
1. Check Git status — ensure working tree is clean before starting
2. Read the YAML file(s) you plan to modify in full before editing
3. Follow the data schema exactly (dates, field names, bilingual coverage)
4. When in doubt about roles, paper titles, or meeting names → **ask the user**, never guess

### After making changes
1. Verify `jekyll build` succeeds (if Ruby is available)
2. Commit with descriptive multi-line message
3. Push to `origin master`
4. If push fails (auth), tell user to push manually: `git push origin master`
5. **Update `events.md`** if the change involves a new activity
6. Append a brief note to `.workbuddy/memory/YYYY-MM-DD.md`
7. **Update this WORKBUDDY.md** if the change affects project state (Section 3), adds a key decision (Section 4), or changes next steps (Section 14)

### Authority boundaries
- **Do NOT** modify layouts or SCSS without explicit user request
- **Do NOT** delete legacy data files without user confirmation
- **Do NOT** fabricate journal names, meeting names, or paper titles
- **Do NOT** add more than 3 news items
- **Do NOT** change the design system tokens (`_swiss-tokens.scss`)

## 20. Audit record

- **Audit date:** 2026-06-29
- **Computer:** Dell workstation (Windows 11)
- **Project root:** `D:/Users/Dell/WebStormProjects/website/`
- **Auditor:** WorkBuddy (AI assistant)

### Files actually read
`_config.yml`, `Gemfile`, `.gitignore`, `index.html`, `style.scss`, `cv.md`, `research.md`, `teaching.md`, `students.md`, `contact.md`, `events.md`, `README.md`, `404.md`, `blog.html`, `_layouts/swiss-home.html`, `_layouts/swiss-page.html`, `_layouts/default.html`, `_layouts/page.html`, `_layouts/post.html`, `_layouts/resume.html`, `_includes/coauthors-link.html`, `_includes/layout/head.html`, `_includes/layout/footer.html`, `_data/news.yml`, `_data/service.yml`, `_data/peer_review.yml`, `_data/presentations.yml`, `_data/publications.yml`, `_data/working_papers.yml`, `_data/teaching.yml`, `_data/grants.yml`, `_data/employment.yml`, `_data/education.yml`, `_data/sections.yml`, `_data/skills.yml`, `_data/honors.yml`, `_data/papers.yml`, `_data/academia_services.yml`, `_data/professional.yml`, `_data/research_interests.yml`, `_sass/_swiss-tokens.scss`, `_sass/_swiss-base.scss`, `_sass/_swiss-layout.scss`, `_sass/_swiss-components.scss`, `_sass/_swiss-responsive.scss`, `assets/js/main.js`, `.github/workflows/jekyll.yml`, `.workbuddy/skills/website-maintenance/SKILL.md`, `LICENSE`

### Commands executed
`git status`, `git log --oneline -20`, `git remote -v`, `git branch --show-current`, `git stash list`, `find` directory tree, `ruby --version`, `bundle --version`, `jekyll --version`, `git --version`, `node --version`, `git fsck`, `git log --stat -1`, `grep` for hardcoded paths and credentials

### Not verified (needs confirmation)
- ISAFE 2026 Discussant role accuracy in `events.md`
- CEA 2026 Session Chair + Presenter roles in `events.md`
- Whether Google Fonts CDN should be added to head.html
- Whether legacy `_data/` files should be cleaned up
- Whether a `.ruby-version` file should be created
