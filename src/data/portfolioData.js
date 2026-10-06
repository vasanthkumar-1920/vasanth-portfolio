export const personalInfo = {
  name: "Vasanth Kumar V",
  role: "MERN Stack & AI Developer",
  status: "Open to MERN and AI roles",
  location: "Hosur, Tamil Nadu, India",
  tagline: "I build full-stack products with AI.",
  bio: "MERN developer based in Hosur, Tamil Nadu. I build high-performance REST APIs, responsive React interfaces, and cloud deployments. Recently shipped an AI-driven support chatbot running on Docker and Azure.",
  email: "vasanthvasa310@gmail.com",
  phone: "+91 88708 83961",
  linkedin: "https://www.linkedin.com/in/vasanthkumar-dev/",
  github: "https://github.com/vasanthkumar-1920",
  resumeUrl: "https://drive.google.com/file/d/1gs9n8mSOFH9tajMNcR6mjj4srPi3Tq7u/view?usp=sharing",
  resumeFileName: "Vasanth_Kumar_V_Resume.pdf"
};

export const stats = [
  {
    value: "1+ yr",
    label: "Professional Experience",
    description: "Full-stack MERN & enterprise backend engineering"
  },
  {
    value: "50+",
    label: "API Endpoints Built",
    description: "Secured with JWT, OTP flows & role-based access"
  },
  {
    value: "~25%",
    label: "Faster DB Queries",
    description: "MongoDB & MySQL schema indexing & pipeline optimization"
  },
  {
    value: "4+",
    label: "Production Deployments",
    description: "Dockerized microservices on Azure VM with NSG rules"
  }
];

export const projects = [
  {
    id: "ai-grocery",
    title: "Online Store: AI Grocery Platform",
    category: "Full-Stack & AI",
    filter: "ai",
    badge: "Office Project · In Progress",
    description: "A comprehensive MERN grocery ecosystem featuring four distinct user roles (Admin, Seller, Buyer, and Delivery Boy), seamless Razorpay checkout, and an intelligent in-app shopping chatbot.",
    highlights: [
      "Built custom conversational assistant with TinyLlama & Phi 3 Mini using live MongoDB catalog as context.",
      "Containerized Ollama inside Docker and deployed on Azure Virtual Machine with NSG security rules and systemd auto-restart.",
      "Engineered complete commerce workflow: JWT authentication, cart, order lifecycle, delivery dispatch, and 50+ REST endpoints.",
      "Integrated Razorpay payment gateway with server-side signature verification and webhook handlers."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Ollama", "TinyLlama", "Phi-3 Mini", "Docker", "Azure VM", "Razorpay"],
    accentColor: "from-indigo-500/20 to-emerald-500/20",
    borderGlow: "hover:border-emerald-500/40",
    previewType: "grocery-demo"
  },
  {
    id: "uttara-developers",
    title: "Uttara Developers",
    category: "Real Estate Backend",
    filter: "backend",
    badge: "Client Project · Live",
    description: "Production backend architecture engineered for a prominent real estate developer to manage listings of premium Villas, Plots, and Apartments with instant lead capture.",
    highlights: [
      "Property CRUD operations with automated multi-resolution Cloudinary image uploads and transformations.",
      "Administrative security featuring cryptographic JWT auth combined with multi-factor OTP verification.",
      "High-throughput APIs for automated newsletter distribution, buyer inquiries, and contact form dispatch.",
      "MongoDB compound indexing ensuring sub-50ms query latency across filtering parameters."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT Auth", "OTP Service"],
    accentColor: "from-blue-500/20 to-indigo-500/20",
    borderGlow: "hover:border-blue-500/40",
    liveUrl: "https://uttaradevelopers.com",
    previewType: "realestate"
  },
  {
    id: "aananth-developers",
    title: "Aananth Developers",
    category: "Real Estate Backend",
    filter: "backend",
    badge: "Client Project · Live",
    description: "A second enterprise real estate client platform built on the same battle-tested API foundation, providing robust inventory management and visitor consultation pipelines.",
    highlights: [
      "Real-time property management engine with secure multi-asset Cloudinary media ingestion.",
      "Role-enforced administrative portal protected by timed JWTs and OTP session verifications.",
      "Automated lead capture endpoints piping buyer inquiries to sales operations with email alerts.",
      "Modular routing architecture allowing rapid feature extensions with zero downtime."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT Auth", "REST APIs"],
    accentColor: "from-violet-500/20 to-purple-500/20",
    borderGlow: "hover:border-violet-500/40",
    liveUrl: "https://aananth-developers.vercel.app/",
    previewType: "realestate"
  },
  {
    id: "capemerino",
    title: "Capemerino E-Commerce",
    category: "WordPress & CMS",
    filter: "cms",
    badge: "WordPress · WooCommerce",
    description: "Specialized modest fashion e-commerce storefront delivering custom theme design, dynamic inventory tracking, and frictionless checkout.",
    highlights: [
      "Custom WooCommerce theme development optimized for mobile shoppers with under 1.5s load times.",
      "Real-time stock level synchronization and automated order status notifications.",
      "Integrated secure payment gateways with multi-currency support and SSL security."
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Custom CSS3", "Payment Gateway"],
    accentColor: "from-amber-500/20 to-rose-500/20",
    borderGlow: "hover:border-amber-500/40",
    previewType: "simple"
  },
  {
    id: "themindstream",
    title: "TheMindStream Learning Portal",
    category: "WordPress & CMS",
    filter: "cms",
    badge: "WordPress · Education",
    description: "Responsive corporate training and edtech portal showcasing instructor profiles, curriculum modules, and lead-generation enrollment funnels.",
    highlights: [
      "Structured course catalog with interactive filtering by technical domain and mentor.",
      "Lead generation system with custom forms feeding directly into CRM workflows.",
      "High-scoring SEO performance, semantic headings, and accessibility compliance."
    ],
    tech: ["WordPress", "PHP", "Responsive Design", "Plugin Architecture", "SEO Optimization"],
    accentColor: "from-cyan-500/20 to-teal-500/20",
    borderGlow: "hover:border-cyan-500/40",
    previewType: "simple"
  }
];

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, modern, and accessible client interfaces",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI", "Component Architecture", "State Management"]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Engineering scalable, high-throughput microservices and REST endpoints",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "OTP Flows", "Role-Based Access (RBAC)", "ES Modules", "API Security"]
  },
  {
    category: "AI & LLM Integration",
    icon: "Bot",
    description: "Integrating intelligent local & cloud models into production workflows",
    skills: ["TinyLlama", "Phi 3 Mini", "Gemini API", "Ollama", "Prompt Engineering", "Context Injection / RAG", "Dockerized LLMs", "Streaming Responses"]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Deploying secure, containerized applications on cloud infrastructure",
    skills: ["Azure VM & NSG", "Docker Containers", "Linux CLI / Bash", "Cloudinary Media CDN", "Process Management", "Systemd Services"]
  },
  {
    category: "Databases & Optimization",
    icon: "Database",
    description: "Designing efficient schemas and optimizing query performance",
    skills: ["MongoDB", "Mongoose ORM", "MySQL", "Query Optimization", "Indexing Strategies", "Aggregation Pipelines", "Data Sanitization"]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Modern development workflows and collaboration tooling",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vite", "npm", "REST Client", "Markdown"]
  }
];

export const experience = [
  {
    period: "Sep 2025 – Present",
    role: "MERN Stack Developer",
    company: "RDEG Software Services",
    location: "Hosur, Tamil Nadu",
    current: true,
    description: "Lead MERN application engineering, AI model orchestration, and backend architecture.",
    achievements: [
      "Architected and deployed full-stack MERN features for client and in-house e-commerce products.",
      "Integrated lightweight AI LLMs (TinyLlama & Phi 3 Mini) via Ollama in Docker onto an Azure VM, providing live context-aware chat assistance.",
      "Configured Azure Network Security Groups (NSG), port restrictions, and auto-healing services for high availability.",
      "Designed and documented 10+ mission-critical REST APIs supporting cart, checkout, role-based workflows, and analytics.",
      "Achieved ~25% reduction in API response times through schema normalization and MongoDB aggregation indexing."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Docker", "Azure VM", "Ollama", "Razorpay"]
  },
  {
    period: "Jan 2025 – Sep 2025",
    role: "Backend Developer",
    company: "HTS",
    location: "Hosur, Tamil Nadu",
    current: false,
    description: "Designed core relational backend APIs and database schemas for enterprise operations.",
    achievements: [
      "Developed high-reliability REST APIs with Node.js and MySQL covering 5+ employee and customer operations modules.",
      "Optimized complex SQL join queries, reducing average query execution times by 20%.",
      "Standardized error handling, input validation, and secure session management across endpoints."
    ],
    technologies: ["Node.js", "MySQL", "Express.js", "REST APIs", "Postman"]
  }
];

export const education = {
  degree: "Bachelor of Computer Science (B.Sc)",
  institution: "M.G.R College",
  location: "Hosur, Tamil Nadu",
  period: "2021 – 2024",
  keyTopics: ["Data Structures & Algorithms", "Database Management Systems (DBMS)", "Web Technologies", "Computer Networks", "Operating Systems"]
};

export const certifications = [
  {
    title: "Frontend Development",
    issuer: "Simplilearn",
    description: "Comprehensive mastery in modern web architecture, JavaScript ES6+, responsive styling, and React component workflows."
  },
  {
    title: "Industrial Internship",
    issuer: "Carborundum Universal Limited (CUMI)",
    description: "Hands-on experience in corporate software processes, enterprise data flow, and industrial IT infrastructure."
  }
];

export const languages = [
  { name: "Tamil", level: "Native / Mother Tongue", proficiency: 100 },
  { name: "English", level: "Professional Working Proficiency", proficiency: 90 },
  { name: "Telugu", level: "Proficient", proficiency: 80 }
];

export const mockAiChatKnowledge = [
  {
    prompt: "Is fresh milk available today?",
    response: "Yes! Fresh farm milk (Aavin & Organic Dairy 500ml / 1L) is currently in stock. Would you like me to add 1 unit to your cart?"
  },
  {
    prompt: "What can I cook with tomatoes and paneer?",
    response: "You can whip up a delicious Paneer Butter Masala or Quick Tomato Paneer Bhurji! We have fresh cottage paneer (200g) and organic ripe tomatoes ready for 30-minute delivery. Shall I bundle them into your basket?"
  },
  {
    prompt: "How does Vasanth deploy Ollama on Azure?",
    response: "Vasanth packaged Ollama with TinyLlama and Phi 3 Mini inside Docker on an Ubuntu Azure Virtual Machine. He configured custom Azure Network Security Group (NSG) inbound rules, isolated ports, and a systemd auto-restart daemon with an Express API proxy."
  },
  {
    prompt: "Show me dairy products",
    response: "Here are top dairy picks in stock: Farm Fresh Milk, Salted Amul Butter (100g), Fresh Paneer (200g), and Set Curd (400g). All ready for same-day dispatch!"
  }
];
