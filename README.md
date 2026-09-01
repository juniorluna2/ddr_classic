# Dirty Downriver Classic v2

A responsive React/Vite tournament site designed for free GitHub Pages hosting.

## Update the tournament each year

Most annual content is in `src/data/tournament.js`: year, status, schedule, courses, games, players, tee times, winners, and registration. Edit that file and push to `main`; GitHub Pages rebuilds automatically.

## Run locally

```bash
npm install
npm run dev
```

## Publish free with GitHub Pages

1. Create a new GitHub repository (recommended name: `ddr_classic_v2`) and push this folder to its `main` branch.
2. Open **Settings → Pages** in the repository.
3. Set **Source** to **GitHub Actions**.
4. The included workflow builds and publishes the site after every push.

## Optional live scoring with Google Sheets

1. Create a sheet with these first-row headings: `name,handicap,round1,round2,thru,topar`.
2. In Google Sheets, use **File → Share → Publish to web**, select the scoring tab and CSV format, then publish.
3. Paste the published CSV URL into `liveScoringUrl` in `src/data/tournament.js`.
4. Set `liveRefreshSeconds` to the desired refresh interval (30 seconds is a sensible default).

The public site only reads the published score sheet. Scorekeepers update the private Google Sheet, so no passwords or write credentials are exposed in the website.

## Images

Images are stored in `public/assets`. Replace an image while keeping its filename, or update the corresponding path in `src/data/tournament.js`.
