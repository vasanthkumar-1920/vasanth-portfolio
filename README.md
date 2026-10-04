# Vasanth Kumar V - Modern React & AI Engineer Portfolio ⚡

A high-converting, ultra-modern portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically to showcase full-stack MERN engineering, REST API performance metrics, cloud microservices on Azure, and live Dockerized LLM (TinyLlama & Phi 3 Mini) capabilities.

---

## 🚀 Key Highlights & Redesign Features

1. **High-Impact Hero & Value Proposition**:
   - Punchy headline with modern gradient typography.
   - Live availability badge: `● Open to MERN and AI roles`.
   - Real metrics showcased upfront: **1+ yr Experience**, **50+ API Endpoints**, and **~25% Faster DB Query Latency**.
   - Dual action CTAs: `View my work`, `Contact me`, and `Download resume`.

2. **Interactive Live AI Store Assistant Simulator**:
   - Emulates the TinyLlama & Phi 3 Mini agent deployed on Docker + Azure VM.
   - Interactive prompt chips (`Is fresh milk available?`, `Recipe for tomatoes & paneer`, `Azure deployment architecture`).
   - Prompt & RAG context inspector showing live MongoDB inventory injection.

3. **Curated Work & Architecture Explorer**:
   - Filter tabs: `All Projects`, `Full-Stack & AI`, `Backend & APIs`, `WordPress & CMS`.
   - Visual mockups for each project (Online Grocery store catalog, real estate property cards).
   - Interactive **System Architecture Modal** detailing JWT + OTP flows, Cloudinary pipelines, and Azure NSG isolation.

4. **Skills Matrix ("From Database to Browser to Cloud")**:
   - Grouped into Frontend, Backend, AI & LLM, Cloud & DevOps, Databases, and Tools.
   - Color-coded badges with hover micro-interactions.

5. **Career Journey & Bento-Grid Background**:
   - Work history at **RDEG Software Services** (MERN Developer) and **HTS** (Backend Developer).
   - Academic credentials (B.Sc. Computer Science from M.G.R College), certifications (Simplilearn, CUMI Internship), and language proficiencies (Tamil, English, Telugu).

6. **Lead Capture & Frictionless Contact**:
   - One-click copy email & phone buttons with visual confirmation toasts.
   - Interactive contact message form with simulated instant feedback.
   - Direct links to LinkedIn, GitHub, and Resume.

---

## 🛠️ Project Structure

```text
vasanth-portfolio/
├── index.html                  # HTML entry point with Plus Jakarta Sans & JetBrains Mono
├── package.json                # Project dependencies and Vite build scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Extended Tailwind design tokens & dark mode
├── postcss.config.js           # PostCSS configuration
├── src/
│   ├── main.jsx                # React DOM mount point
│   ├── App.jsx                 # Master page layout
│   ├── index.css               # Global Tailwind directives & glassmorphism classes
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content & projects
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic header with navigation & status pill
│       ├── Hero.jsx            # Hero section with dual-column metrics & chat demo
│       ├── Projects.jsx        # Project showcases with filter tabs
│       ├── ArchitectureModal.jsx# Interactive system architecture diagram modal
│       ├── AiChatbotDemo.jsx   # Dedicated full-width interactive AI terminal
│       ├── Skills.jsx          # Technical capabilities grid
│       ├── Experience.jsx      # Work timeline with accomplishments & stacks
│       ├── Education.jsx       # Bento-grid credentials (Degree, Certs, Languages)
│       ├── Contact.jsx         # Direct contact buttons & message form
│       └── Footer.jsx          # Clean copyright and back-to-top button
└── README.md                   # Complete documentation
```

---

## ⚡ How to Run Locally

### 1. Prerequisites
Ensure you have [Node.js (v18+)](https://nodejs.org/) installed.

### 2. Install Dependencies
Open your terminal in this directory (`vasanth-portfolio`) and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live hot-reloading app!

### 4. Build for Production
To generate the optimized production build:
```bash
npm run build
```
The output will be in the `dist/` directory ready for deployment.

---

## 🌐 2-Minute Deployment Options

### Option A: Deploy to Vercel (Recommended)
1. Push this folder to your GitHub repository (`github.com/vasanthkumar-1920/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your repository and click **Deploy**. Vercel will automatically detect Vite and configure the build command.

### Option B: Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` folder into Netlify Drop ([app.netlify.com/drop](https://app.netlify.com/drop)).

---

## ✏️ How to Customize Your Content
All content is centralized inside `src/data/portfolioData.js`. You can simply edit:
- `personalInfo`: Update your phone, email, LinkedIn, GitHub, or resume file/link (`resumeUrl`).
- `Resume File`: Drop your actual resume PDF into `public/Vasanth_Kumar_V_Resume.pdf`, or point `resumeUrl` in `portfolioData.js` to a Google Drive link.
- `projects`: Add new projects, update live links, or add screenshots.
- `skillsData`: Add new tools or frameworks.
- `mockAiChatKnowledge`: Add new conversational questions to the AI assistant.
