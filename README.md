# Asif Hossain — Full-Stack Developer

**[asifhossain.dev](https://asifhossain.dev)** · Wollongong, NSW, Australia

I'm a Full-Stack Developer with 3+ years of professional experience building scalable web applications. I completed my Master's in Computer Science (Software Engineering) at the University of Wollongong, and I've delivered 50+ projects on Fiverr with 100% client satisfaction.

This is the source code for my personal portfolio, where I showcase my work, write about what I'm building, and make it easy for clients to hire me.

---

## What's inside

The site is more than a basic portfolio. It includes:

- **Project showcase** : 7 real-world projects, each with its own detail page covering the overview, key features, engineering challenges, and outcome
- **Blog** : articles targeting developers and clients searching for fullstack help in Australia
- **Hire Me page** : a services landing page for potential clients
- **Contact form** : sends real emails directly to my inbox via Nodemailer

---

## Built with

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Animations | Framer Motion |
| Blog | MDX + next-mdx-remote |
| Email | Nodemailer (Gmail SMTP) |
| Deployment | Vercel |

---

## Running locally

```bash
git clone https://github.com/Rafin31/chat-with-Asif-Hossain-.git
cd chat-with-Asif-Hossain-
npm install
```

Create a `.env.local` file:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_TO=your-inbox@gmail.com
```

Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project structure

```
app/
  page.tsx                  # Home page (all sections)
  blog/                     # Blog listing + individual posts
  projects/[slug]/          # Individual project detail pages
  hire-me/                  # Services & pricing page
  api/contact/route.ts      # Contact form email handler

components/                 # Hero, About, Skills, Experience,
                            # Projects, Testimonials, Contact, Footer

content/blog/               # MDX blog posts
data/
  portfolio.ts              # Single source of truth for all content
  projectDetails.ts         # Extended project info (features, images)
lib/
  blog.ts                   # MDX + frontmatter utilities
  shimmer.ts                # Blur placeholder for images
```

> All personal content (bio, projects, skills, experience, testimonials) lives in `data/portfolio.ts`.

---

## Reach me

- **Website:** [asifhossain.dev](https://asifhossain.dev)
- **Email:** [asifhossain976@gmail.com](mailto:asifhossain976@gmail.com)
- **LinkedIn:** [linkedin.com/in/asif-hossain-6982b81ba](https://www.linkedin.com/in/asif-hossain-6982b81ba/)
- **GitHub:** [github.com/Rafin31](https://github.com/Rafin31)
- **Fiverr:** [fiverr.com/rafin_31](https://www.fiverr.com/rafin_31)
