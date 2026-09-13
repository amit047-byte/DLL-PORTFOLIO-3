# Amitabha Ghosh - Developer Portfolio

Modern, minimalist, and responsive developer portfolio website for **Amitabha Ghosh**, B.Tech Computer Science & Engineering student. Ready for zero-config deployment to **Vercel** and **GitHub Pages**.

---

## 🌟 Highlights
- **Framework-Independent & Fast**: Pure modern semantic HTML5, CSS3, and vanilla JS. Instant load times, zero build overhead.
- **CSE-Themed Aesthetic**: Subtle digital dot-matrix background with mouse-reactive illuminated hover spotlight and ambient translucent orbs.
- **Theme Switcher**: Fluid toggle between Dark Mode and Light Mode with `localStorage` persistence.
- **Verified Credentials**: Official downloadable PDF resume, JECRC University education profile, and GitHub/LinkedIn integrations.

---

## 🚀 How to Deploy on Vercel

### Method 1: Deploy via GitHub (Recommended - Automatic Continuous Deployment)
1. Initialize git and push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio ready for Vercel"
   git branch -M main
   git remote add origin https://github.com/amit047-byte/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Select your **`portfolio`** repository.
5. Leave all build settings as default (Framework Preset: **Other**, Root Directory: **./**).
6. Click **"Deploy"**! Your portfolio will be live in under 15 seconds with a custom `*.vercel.app` URL and free SSL!

---

### Method 2: Deploy directly with Vercel CLI
If you have Node/npm on your computer:
```bash
# Log in and deploy directly from your project directory
npx vercel
```
Follow the interactive terminal prompts:
- *Set up and deploy?* -> **Y**
- *Which scope?* -> select your account
- *Link to existing project?* -> **N**
- *What's your project's name?* -> **amitabha-portfolio**
- *In which directory is your code located?* -> **./**

To deploy directly to production:
```bash
npx vercel --prod
```

---

## 💻 Local Testing on macOS

Open directly in your default browser:
```bash
open index.html
```
Or run a lightweight Python HTTP server:
```bash
python3 -m http.server 3000
```
Then open `http://localhost:3000`.

---

## 📁 Project Structure
```
amitabha-portfolio/
├── index.html                   # Core single-page website
├── styles.css                   # Responsive layout, grid, glassmorphism & themes
├── script.js                    # Theme toggle, cursor hover tracking & interactions
├── vercel.json                  # Vercel deployment routing & caching configuration
├── package.json                 # Project descriptor & scripts
├── .gitignore                   # Ignore OS files & .vercel directory
└── assets/
    ├── images/
    │   └── amitabha.png         # Profile photo
    ├── Amitabha_Ghosh_Resume.pdf# Downloadable resume
    └── resume.html              # Printable web resume
```

© 2026 Amitabha Ghosh. All rights reserved.
