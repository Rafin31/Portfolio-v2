// Extended project content — displayed on individual project pages
// Sourced images are from Unsplash (free licence, attributed below each)

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface ProjectDetail {
  slug: string
  coverImage: string
  imageAlt: string
  imageCredit: string
  overview: string
  features: Feature[]
  challenge: string
  outcome: string
}

export const projectDetails: Record<string, ProjectDetail> = {
  "medical-supplier-management-system": {
    slug: "medical-supplier-management-system",
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Medical management system dashboard on a computer screen",
    imageCredit: "Photo by CDC on Unsplash",
    overview:
      "Mendoza Brothers Holdings needed to replace a patchwork of spreadsheets and email chains with a centralised, secure web platform for managing their medical supply chain. The system needed to support multiple user roles, handle bulk product data efficiently, and give management real-time visibility over orders and staff activity. I designed and built the entire platform from scratch — database schema, REST API, React UI, and deployment infrastructure.",
    features: [
      {
        icon: "🔐",
        title: "JWT + Role-Based Access",
        description:
          "Multi-tier authentication with granular permissions. Admins, managers, and staff each see a different interface with appropriately restricted data access.",
      },
      {
        icon: "📊",
        title: "Bulk Excel Import",
        description:
          "Drag-and-drop spreadsheet uploads processed asynchronously in chunks. Row-level validation catches errors before they reach the database, with a real-time progress bar.",
      },
      {
        icon: "💬",
        title: "Real-Time Chat",
        description:
          "Socket.io powered messaging tied directly to orders and supplier threads. Reduced issue resolution time by 35% by replacing disconnected email chains.",
      },
      {
        icon: "📦",
        title: "Order Lifecycle Tracking",
        description:
          "End-to-end order management with status transitions, audit logs, and automated notifications at each stage of the supply chain.",
      },
      {
        icon: "📈",
        title: "Admin Reporting Dashboard",
        description:
          "Comprehensive analytics panel giving management a live view of stock levels, order volumes, staff activity, and supplier performance.",
      },
      {
        icon: "⚡",
        title: "Async Processing",
        description:
          "Heavy operations like bulk imports and report generation run asynchronously, keeping the UI responsive and avoiding server timeouts.",
      },
    ],
    challenge:
      "The hardest part was designing a RBAC system flexible enough to accommodate evolving business rules without requiring code changes. I built a centralised permission config object — a single source of truth — so access rules could be adjusted by editing one file rather than hunting across dozens of route handlers.",
    outcome:
      "60% reduction in admin workload through bulk automation. 35% faster issue resolution via real-time chat. Zero security incidents across the full deployment period. CEO review: 5 stars.",
  },

  "assert-blockchain-prediction-platform": {
    slug: "assert-blockchain-prediction-platform",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Blockchain and cryptocurrency technology concept",
    imageCredit: "Photo by Alexandre Debiève on Unsplash",
    overview:
      "ASSERT is a decentralised sports prediction platform powered by Ethereum smart contracts. Users earn daily reward tokens for engagement, place predictions on live sports events, and receive trustless payouts via on-chain logic. The project combined Solidity smart contract development with a React frontend and a Node.js backend for off-chain data feeds.",
    features: [
      {
        icon: "⛓️",
        title: "Solidity Smart Contracts",
        description:
          "All prediction logic, token issuance, and payout distribution lives on-chain. Contracts were audited for reentrancy and overflow vulnerabilities before deployment.",
      },
      {
        icon: "🪙",
        title: "Daily Reward Token System",
        description:
          "Users earn platform tokens for daily logins and predictions, creating a retention loop. Token balances are stored on-chain with a React UI showing live balances.",
      },
      {
        icon: "🌐",
        title: "Web3.js Integration",
        description:
          "Seamless MetaMask wallet connection, transaction signing, and contract interaction via Web3.js. Users never leave the app to manage their wallet.",
      },
      {
        icon: "📡",
        title: "Real-Time Sports Feeds",
        description:
          "Live sports event data powers the prediction engine. Results are fed on-chain to trigger automated settlement of open predictions.",
      },
      {
        icon: "🔒",
        title: "Trustless Payouts",
        description:
          "Winnings are distributed automatically by contract logic — no manual processing, no possibility of manipulation.",
      },
      {
        icon: "📱",
        title: "React Dashboard",
        description:
          "Clean, responsive prediction UI with real-time balance updates, prediction history, and live event listings.",
      },
    ],
    challenge:
      "Coordinating off-chain sports data with on-chain contract state introduced eventual consistency challenges. I implemented a Node.js oracle service that validates results from multiple data sources before submitting on-chain, reducing the risk of incorrect settlement.",
    outcome:
      "40% increase in user engagement through the daily reward token system. Fully trustless prediction settlement with no disputes. Smart contract state persists independently of the frontend.",
  },

  "auto-parts-ecommerce-platform": {
    slug: "auto-parts-ecommerce-platform",
    coverImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Automotive and car parts ecommerce",
    imageCredit: "Photo by Florian Olivo on Unsplash",
    overview:
      "A full-featured e-commerce platform for an auto parts retailer, built with Next.js for fast server-side rendering and strong SEO performance. The platform includes a searchable product catalogue, cart management, Stripe-powered checkout, order tracking, and a full admin dashboard for inventory and order management.",
    features: [
      {
        icon: "🛒",
        title: "Product Catalogue",
        description:
          "Searchable, filterable parts database with compatibility filters, product images, and detailed specifications. Optimised for SEO with SSR product pages.",
      },
      {
        icon: "💳",
        title: "Stripe Payments",
        description:
          "Secure card checkout with Stripe Elements. Supports saved cards, real-time validation, and webhook-based order confirmation.",
      },
      {
        icon: "📦",
        title: "Order Tracking",
        description:
          "Customers receive email updates at each order stage and can view live status from their account dashboard.",
      },
      {
        icon: "⚙️",
        title: "Admin Dashboard",
        description:
          "Full inventory management, order processing, and customer management panel. Admins can update stock, mark orders as shipped, and export reports.",
      },
      {
        icon: "🚀",
        title: "Next.js SSR",
        description:
          "Product and category pages are server-rendered for fast initial load and excellent Google indexing — critical for parts discovery via search.",
      },
      {
        icon: "🛍️",
        title: "Cart Management",
        description:
          "Persistent cart with quantity controls, price calculations, and stock validation. Cart state is preserved across sessions.",
      },
    ],
    challenge:
      "Managing inventory consistency between the catalogue and cart during high-traffic periods required careful database transaction design. I implemented optimistic locking on stock reservation to prevent overselling without degrading checkout performance.",
    outcome:
      "Fast, SEO-friendly product pages driving organic discovery. Stripe integration handling live payments with webhook-confirmed fulfilment. Clean admin workflow reducing order processing time significantly.",
  },

  "game-coach-platform": {
    slug: "game-coach-platform",
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Gaming setup with RGB lighting",
    imageCredit: "Photo by Florian Olivo on Unsplash",
    overview:
      "A coaching marketplace connecting gamers with professional coaches offering training sessions across popular esports titles. Users can browse services, purchase coaching sessions, and track their remaining credits. Admins manage the service catalogue and monitor purchase activity in real time.",
    features: [
      {
        icon: "🔑",
        title: "Firebase Authentication",
        description:
          "Email and password login plus Google OAuth. Protected routes redirect unauthenticated users back to the login screen.",
      },
      {
        icon: "🎮",
        title: "Service Marketplace",
        description:
          "Browse coaching sessions by game title, duration, and coach rating. Service cards show availability and pricing with instant purchase.",
      },
      {
        icon: "📉",
        title: "Live Quantity Tracking",
        description:
          "Session slots decrement in real time when purchased. Users can see remaining availability without refreshing the page.",
      },
      {
        icon: "🛠️",
        title: "Admin Panel",
        description:
          "Admins can add new coaching services, update pricing, adjust slot quantities, and view purchase history.",
      },
      {
        icon: "📋",
        title: "User Dashboard",
        description:
          "Personalised dashboard showing purchased services, remaining session counts, and booking history.",
      },
      {
        icon: "📱",
        title: "Responsive Design",
        description:
          "Mobile-first layout optimised for browsing and purchasing on any device — important for a gaming audience that skews mobile.",
      },
    ],
    challenge:
      "Preventing race conditions when multiple users purchase the last available slot simultaneously required atomic Firestore transactions. I wrapped decrement operations in transactions to ensure consistent slot counts under concurrent load.",
    outcome:
      "40% increase in online orders after launch. Reliable real-time inventory with no overselling incidents. Clean separation of user and admin interfaces.",
  },

  "figma-to-react-conversion": {
    slug: "figma-to-react-conversion",
    coverImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "UI design on screen, web interface mockup",
    imageCredit: "Photo by Hal Gatewood on Unsplash",
    overview:
      "A client approached me with a polished Figma design and needed it built pixel-perfectly in React with full functionality including authentication and file uploads. The project involved translating every design token, spacing value, and interaction state from Figma into a production-ready React and Tailwind application, integrated with Firebase for auth and AWS S3 for asset storage.",
    features: [
      {
        icon: "🎨",
        title: "Pixel-Perfect Conversion",
        description:
          "Every spacing value, typography scale, colour token, and component variant faithfully reproduced from the Figma design file.",
      },
      {
        icon: "🔐",
        title: "Firebase Authentication",
        description:
          "Secure user sessions with email/password and social login options. Auth state persists across page reloads.",
      },
      {
        icon: "☁️",
        title: "AWS S3 File Storage",
        description:
          "User-uploaded assets stored in S3 with pre-signed URLs for secure, direct browser-to-bucket uploads without exposing credentials.",
      },
      {
        icon: "📐",
        title: "Component Architecture",
        description:
          "Reusable React components mapped directly to Figma component variants. Props match the design system's states (default, hover, disabled, error).",
      },
      {
        icon: "📱",
        title: "Fully Responsive",
        description:
          "Adaptive layout across mobile, tablet, and desktop breakpoints, following the responsive specs from the original Figma file.",
      },
      {
        icon: "⚡",
        title: "Performance Optimised",
        description:
          "Code splitting, lazy-loaded routes, and optimised asset delivery ensure fast initial render and low Lighthouse scores.",
      },
    ],
    challenge:
      "The Figma design used custom font stacks and non-standard spacing values that didn't map cleanly to Tailwind defaults. I extended the Tailwind config with a custom design token layer that mirrored the Figma variables exactly, making future design updates straightforward to apply.",
    outcome:
      "Pixel-perfect implementation signed off by the client with no revision requests on the visual layer. Auth and file upload features working as specified. Delivered ahead of the agreed deadline.",
  },

  "pocket-class-platform": {
    slug: "pocket-class-platform",
    coverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Instructor coaching a student in a sports session",
    imageCredit: "Photo by Meghan Holmes on Unsplash",
    overview:
      "PocketClass is a Canadian marketplace platform connecting students with freelance instructors across sports, music, and the arts. I contributed to the backend and real-time features, building the Socket.io chat layer, booking system, and Stripe payment integration. The platform streamlines everything from instructor discovery to secure payment and session scheduling into one seamless experience.",
    features: [
      {
        icon: "🔍",
        title: "Instructor Discovery",
        description:
          "Searchable directory of verified instructors filterable by discipline, location, price, and availability. Profile pages with ratings and session history.",
      },
      {
        icon: "💬",
        title: "Real-Time Messaging",
        description:
          "Socket.io chat between students and instructors for pre-booking questions and session coordination. Message history persisted in MongoDB.",
      },
      {
        icon: "📅",
        title: "Calendar Booking",
        description:
          "Availability-aware scheduling with conflict detection. Students see only open slots and receive instant confirmation on booking.",
      },
      {
        icon: "💳",
        title: "Stripe Payments",
        description:
          "Secure session payments with automatic instructor payouts via Stripe Connect. Refund handling built in for cancellations.",
      },
      {
        icon: "⭐",
        title: "Review System",
        description:
          "Post-session star ratings and written testimonials build instructor reputation and help students make informed booking decisions.",
      },
      {
        icon: "🔔",
        title: "Push Notifications",
        description:
          "Firebase Cloud Messaging delivers booking confirmations, new message alerts, and session reminders to both students and instructors.",
      },
    ],
    challenge:
      "Synchronising calendar availability in real time across concurrent sessions was complex — two students could attempt to book the same slot simultaneously. I implemented a reservation lock pattern using MongoDB transactions to hold a slot for 5 minutes during checkout, releasing it automatically if payment didn't complete.",
    outcome:
      "100% client satisfaction rating. Platform actively serving students and instructors across Canada. Real-time chat and booking features running with no reported downtime post-launch.",
  },

  "inventory-management-system": {
    slug: "inventory-management-system",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "Business analytics and inventory data on a laptop",
    imageCredit: "Photo by Carlos Muza on Unsplash",
    overview:
      "A web-based inventory management system for small to medium businesses, built with Next.js, PHP, and SQL. Users can manage products, track sales, and monitor profitability in real time. The system automatically calculates total value from price and quantity, tracks how many units have been sold, and shows live profit or loss per product and across the full catalogue.",
    features: [
      {
        icon: "📦",
        title: "Product Management",
        description:
          "Add products with name, price, quantity, and seller details. Edit and delete operations with confirmation prompts to prevent accidental data loss.",
      },
      {
        icon: "🧮",
        title: "Auto Price Calculation",
        description:
          "Total product value is calculated automatically from unit price and quantity on every update. No manual arithmetic required.",
      },
      {
        icon: "📉",
        title: "Sales Tracking",
        description:
          "Record sold units and the system instantly updates available stock, logs the transaction, and recalculates running totals.",
      },
      {
        icon: "💰",
        title: "Profit and Loss Analysis",
        description:
          "Real-time profitability per product and across the entire catalogue. Separate views for individual seller performance.",
      },
      {
        icon: "👥",
        title: "Multi-Seller Support",
        description:
          "Products can be assigned to specific sellers. Each seller has their own performance view showing their listings and revenue.",
      },
      {
        icon: "📊",
        title: "Summary Dashboard",
        description:
          "A top-level view showing total stock value, sales to date, and overall profit or loss — updated in real time as transactions are recorded.",
      },
    ],
    challenge:
      "Ensuring data consistency when multiple users recorded sales simultaneously required careful transaction management in SQL. I used explicit locking on stock rows during sale operations to prevent negative inventory counts.",
    outcome:
      "Fully functional inventory system replacing manual spreadsheet workflows. Accurate real-time profit tracking with no data inconsistencies reported after deployment.",
  },

  "claude-stats": {
    slug: "claude-stats",
    coverImage: "/claude-states/claude-states.png",
    imageAlt: "Claude Stats dashboard showing token usage, costs and session history",
    imageCredit: "Screenshot by Asif Hossain",
    overview:
      "Claude Stats is a self-hosted developer tool I built to solve a personal pain point: having no visibility into how many tokens I was burning through Claude Code sessions or how much it was costing me. The dashboard auto-detects your local Claude data directory, watches it for changes in real time, and visualises token usage, session history, costs, and productivity patterns — all without any configuration or external API calls.",
    features: [
      {
        icon: "📊",
        title: "270-Degree Usage Gauge",
        description:
          "Live arc gauge showing your current 5-hour rolling window consumption vs your plan limit. Colour shifts from green to red as you approach the cap.",
      },
      {
        icon: "📅",
        title: "Usage Calendar",
        description:
          "GitHub-style 52-week heatmap showing daily token consumption. Instantly reveals your busiest coding periods and usage trends over time.",
      },
      {
        icon: "🔥",
        title: "Productivity Heatmap",
        description:
          "7x24 grid mapping which hours and days you use Claude most. Helps you understand your peak productivity windows at a glance.",
      },
      {
        icon: "🧩",
        title: "Model Breakdown",
        description:
          "Pie chart breaking down token usage and estimated cost by model (Sonnet, Haiku, Opus) across all your sessions.",
      },
      {
        icon: "💰",
        title: "Subscription Value Card",
        description:
          "Compares what your usage would cost at pay-per-token API pricing vs your flat Pro subscription — shows exactly how much value you're getting.",
      },
      {
        icon: "📋",
        title: "Session History Table",
        description:
          "Full searchable log of every Claude Code session with timestamps, project, branch, token counts, and estimated cost per session.",
      },
    ],
    challenge:
      "The main challenge was building a reliable real-time file watcher that could parse Claude's JSONL session files incrementally without re-reading the entire history on every change. I used chokidar for efficient file watching and implemented a streaming parser that only processes new lines appended to each session file, keeping memory usage flat regardless of session history size.",
    outcome:
      "A working developer tool actively used for tracking Claude Code usage. Zero configuration needed — clone, install, and run. Published on GitHub as an open-source project for the broader Claude Code community.",
  },
}

export function getProjectDetail(slug: string): ProjectDetail | null {
  return projectDetails[slug] ?? null
}
