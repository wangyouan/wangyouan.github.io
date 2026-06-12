# wangyouan.github.io

Personal academic homepage of **You'an Wang (王佑安)**, Assistant Professor of Finance at the Wang Yanan Institute for Studies in Economics (WISE), Xiamen University.

## Design

Swiss Modernism style, built as a custom Jekyll theme. Features:

- **Bilingual** — full Chinese/English toggle with `data-lang` attributes and localStorage persistence
- **Responsive** — desktop 1440px, tablet 768px, mobile 375px breakpoints
- **Data-driven** — all content in `_data/` YAML files (publications, presentations, teaching, service, grants, news, employment, education)
- **Coauthor linking** — automatic name-to-URL matching via `_includes/coauthors-link.html`
- **News with status tags** — upcoming events tagged `(Planned)` inline

### Sections

| Page | Content |
|------|---------|
| Home (`/`) | Hero, News, Employment, Research, Teaching, Education |
| Research (`/research/`) | Published papers + working papers with expandable detail panels |
| Teaching (`/teaching/`) | Full course list with descriptions |
| CV (`/cv/`) | Employment, Education, Research, Presentations, Service, Teaching |
| Join Us (`/students/`) | Prospective students, RA recruitment, recommendation letter policy |

## Tech Stack

- [Jekyll](https://jekyllrb.com/) static site generator
- SCSS (custom Swiss Modernism design system in `_sass/`)
- Google Fonts: Crimson Pro (headings) + Atkinson Hyperlegible (body)
- Vanilla JavaScript (language toggle, mobile menu, detail panels)

## Run Locally

```bash
bundle exec jekyll serve
open http://localhost:4000
```

## Project Structure

```
├── _data/              # YAML content files
│   ├── publications.yml
│   ├── working_papers.yml
│   ├── presentations.yml
│   ├── teaching.yml
│   ├── grants.yml
│   ├── employment.yml
│   ├── education.yml
│   ├── service.yml
│   ├── peer_review.yml
│   └── news.yml
├── _includes/          # Liquid partials
│   ├── coauthors-link.html
│   └── layout/
├── _layouts/           # Page layouts
│   ├── swiss-home.html
│   └── swiss-page.html
├── _sass/              # Swiss Modernism design system
│   ├── _swiss-tokens.scss
│   ├── _swiss-base.scss
│   ├── _swiss-layout.scss
│   ├── _swiss-components.scss
│   └── _swiss-responsive.scss
├── assets/
│   ├── js/main.js
│   └── style.scss
├── images/
│   └── profile.jpg
└── _config.yml
```
