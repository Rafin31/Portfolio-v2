# Asif Hossain — Portfolio v2

> Personal portfolio website built with Next.js 14, TailwindCSS, and Framer Motion.

---

## 🚀 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS |
| Animations | Framer Motion |
| Language | TypeScript |
| Email | Nodemailer (Gmail SMTP) |
| Icons | React Icons |
| Deployment | Vercel / any Node host |

---

## ✨ Features

- **Hero** — Typewriter animation, floating particles, profile photo, stats
- **About** — Bio, education, achievements, floating skill icons
- **Skills** — Tabbed by category (Frontend, Backend, Database, DevOps, Tools)
- **Experience** — Animated vertical timeline
- **Projects** — Filterable grid with browser-window card design
- **Testimonials** — Infinite auto-scrolling marquee (two rows, opposite directions)
- **Contact** — Form that sends real emails to inbox via Nodemailer
- **Responsive** — Fully mobile-friendly

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Rafin31/chat-with-Asif-Hossain-.git
cd chat-with-Asif-Hossain-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and fill in your Gmail credentials:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_TO=your-gmail@gmail.com
```

> Get a Gmail App Password at: **Google Account → Security → 2-Step Verification → App Passwords**

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deploy

```bash
# Build and start production server
npm run build:start

# Or separately
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts   # Email API endpoint
│   ├── globals.css            # Global styles + animations
│   └── layout.tsx / page.tsx
├── components/                # All section components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts           # ← Edit all content here
└── public/
    └── profile.jpg            # Profile photo
    └── Asif_Hossain_Resume.pdf
```

> **To update content** — edit `data/portfolio.ts`. Everything on the site pulls from this single file.

---

## 📬 Contact

**Asif Hossain**
- Email: [asifhossain976@gmail.com](mailto:asifhossain976@gmail.com)
- LinkedIn: [linkedin.com/in/asif-hossain-6982b81ba](https://www.linkedin.com/in/asif-hossain-6982b81ba/)
- GitHub: [github.com/Rafin31](https://github.com/Rafin31)
- Fiverr: [fiverr.com/rafin_31](https://www.fiverr.com/rafin_31)
