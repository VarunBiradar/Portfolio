# 🚀 Varun Biradar — Portfolio Website

A personal portfolio website built with **Vite + Vanilla JS + CSS**.

---

## ▶️ How to Start the Website

Open a terminal inside the `portfolio` folder and run:

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

> If port 5173 is busy, Vite will automatically use 5174, 5175, etc.

---

## ⏹️ How to Stop the Website

In the terminal where it's running, press:

```
Ctrl + C
```

When asked `Terminate batch job? (Y/N)` → type **Y** and press **Enter**.

---

## 📦 Install Dependencies (first time only)

If you're setting up for the first time or on a new machine:

```bash
npm install
```

Then start with `npm run dev`.

---

## 🌐 Deploy to Vercel (Free Hosting)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/VarunBiradar/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
3. Click **"Add New Project"** → Select your `portfolio` repo
4. Click **"Deploy"** ✅

Your live URL will be something like:
```
https://portfolio-varunbiradar.vercel.app
```

---

## 🛠️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — Build tool
- 🟨 Vanilla JavaScript
- 🎨 Vanilla CSS (custom dark theme)
- 🌐 Google Fonts (Inter + Space Grotesk)

---

## 📁 Project Structure

```
portfolio/
├── index.html        # Main HTML file
├── src/
│   ├── main.js       # All content & logic (edit here!)
│   └── style.css     # All styles
├── package.json
└── README.md         # This file
```

---

## ✏️ How to Edit Content

All your personal info, projects, and skills are in the **`data` object** at the top of `src/main.js`.

Just update the values and save — the browser will auto-refresh!

---

*Built with ❤️ by Varun Biradar*
