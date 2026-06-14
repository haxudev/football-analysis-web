# football-analysis-web

Public GitHub Pages frontend for **AI 球赛观察** — a static site that displays
qualitative football match analyses.

## How it works

This repository hosts **only the frontend** (`index.html`, `report.html`,
`styles.css`, `app.js`). The analysis data lives under [`data/`](./data) and is
**delivered automatically** by a private analysis harness
(`haxudev/football-qualitative-analysis-harness`) every 12 hours:

```
data/
├── reports.json                       ← card + version index
└── reports/<matchId>/
    ├── current.md                     ← latest full report
    └── history/<timestamp>.md          ← archived prior versions
```

The page fetches `data/reports.json`, groups matches by kickoff date in
Asia/Shanghai time, sorts each group by kickoff time, and renders report
Markdown client-side (via the `marked` CDN). `.nojekyll` is present so the raw
`.md` payload is served as-is.

## Local preview

```bash
npx serve .      # then open http://localhost:3000
```

(With an empty `data/` the list will simply be empty until the harness delivers
a payload.)

## Checks

```bash
node --check app.js
node --test tests/app-behavior.test.mjs
```

## Deployment

GitHub Pages serves this repository from the `main` branch root. Any push to
`main` (including the scheduled data delivery) redeploys the site.
