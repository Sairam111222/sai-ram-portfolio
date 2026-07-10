export const profile = {
  name: "Chundru Sai Ram Krishna",
  shortName: "Sai Ram Krishna",
  role: "AI & Full Stack Developer",
  tagline:
    "Aspiring AI & Software Developer building scalable products across web, mobile, and machine learning.",
  location: "India",
  email: "chundruram41@gmail.com",
  phone: "+91 7842732355",
  github: "https://github.com/Sairam111222",
  linkedin: "https://www.linkedin.com/in/sai-ram-krishna-ch-a212b6326",
  resume: "/Sai_Ram_Krishna_Resume.pdf",
  status: "Open to Software Engineering, AI, Full Stack & Mobile internships",
  education: {
    school: "Dr. M.G.R. Educational and Research Institute",
    degree: "B.Tech — CSE (Data Science & AI)",
    cgpa: "8.3",
    graduation: "Expected 2027",
  },
};

export const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "Mobile Developer",
  "ML Enthusiast",
];

export const journey = [
  {
    year: "2023",
    title: "Intermediate — Sri Chaitanya College",
    description: "Completed intermediate with 86%, building strong foundations in math & science.",
  },
  {
    year: "2023",
    title: "Started B.Tech in CSE (Data Science & AI)",
    description: "Joined Dr. M.G.R. Educational and Research Institute. CGPA 8.3.",
  },
  {
    year: "2025",
    title: "Web Development Intern — Elevate Lab",
    description: "Shipped responsive web apps and elevated UI/UX quality.",
  },
  {
    year: "2025",
    title: "SIH Finalist",
    description: "Finalist at Smart India Hackathon 2025.",
  },
  {
    year: "2026",
    title: "Mobile Developer Intern — AllCloud Enterprise Solutions",
    description: "Built cross-platform React Native apps with REST APIs and Git collaboration.",
  },
  {
    year: "2027",
    title: "Graduation & Full-Time Role",
    description: "Graduating and ready to join an ambitious engineering team.",
  },
];

export const skillGroups = [
  { title: "Languages", icon: "Code2", items: ["Python", "Java", "JavaScript"] },
  { title: "Frontend", icon: "LayoutDashboard", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Mobile", icon: "Smartphone", items: ["React Native", "React Hooks", "REST APIs"] },
  { title: "AI / ML", icon: "Brain", items: ["Machine Learning", "Predictive Analytics", "Data Analytics"] },
  { title: "Backend & DB", icon: "Database", items: ["REST APIs", "MySQL", "IBM Cognos"] },
  { title: "Cloud", icon: "Cloud", items: ["AWS (Basics)", "Azure"] },
  { title: "Tools", icon: "Wrench", items: ["VS Code", "Cursor", "Claude", "Git", "GitHub", "IntelliJ IDEA"] },
  { title: "Core CS", icon: "Cpu", items: ["DSA", "OOP", "Problem Solving"] },
];

export const experience = [
  {
    role: "Mobile Developer Intern",
    company: "AllCloud Enterprise Solutions",
    location: "Hyderabad",
    period: "Mar 2026 – Apr 2026",
    bullets: [
      "Built cross-platform React Native apps with reusable components and React Hooks.",
      "Integrated REST APIs, navigation flows, and debugging pipelines.",
      "Collaborated via Git across a distributed engineering team.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Elevate Lab",
    location: "Remote",
    period: "Sep 2025 – Nov 2025",
    bullets: [
      "Developed responsive web applications with clean, maintainable React code.",
      "Improved UI/UX polish and interaction design across features.",
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    ml?: string;
    dashboard?: string;
    optimization?: string;
    forecasting?: string;
  };
};

export const projects: Project[] = [
  {
    title: "AI-Driven Logistics Automation Platform",
    tagline:
      "End-to-end logistics platform with ML forecasting, route optimization, and real-time dashboards.",
    tech: ["Python", "Machine Learning", "React", "REST APIs", "MySQL", "Predictive Analytics"],
    github: "https://github.com/Sairam111222",
    featured: true,
    caseStudy: {
      problem:
        "Logistics teams juggle fragmented data across shipments, routes, and demand — resulting in delayed deliveries, empty backhauls, and reactive planning.",
      solution:
        "A unified platform that ingests shipment and demand data, applies ML forecasting, optimizes routing, and surfaces insights in a real-time operator dashboard.",
      architecture:
        "React front-end talks to a REST API layer that orchestrates ML services (forecasting + route optimization) and a MySQL data store. Batch jobs refresh models nightly; live events stream into the dashboard.",
      features: [
        "Real-time shipment tracking dashboard",
        "ML-based demand forecasting",
        "Route optimization engine",
        "Anomaly detection on delivery SLAs",
        "Role-based access for ops & managers",
        "Exportable KPI reports",
      ],
      ml: "Trained regression + time-series models on historical shipment data to forecast weekly demand per lane.",
      dashboard: "React dashboard with KPI tiles, live charts, and drill-down views per region and lane.",
      optimization: "Heuristic route optimizer minimizes distance and empty miles across daily dispatch plans.",
      forecasting: "7-day and 30-day forecasts feed capacity planning and dynamic pricing decisions.",
    },
  },
  {
    title: "Expense Tracker",
    tagline: "Real-time mobile expense tracker with categorized insights.",
    tech: ["React Native", "React Hooks", "REST APIs"],
    github: "https://github.com/Sairam111222",
  },
  {
    title: "Bank Management System",
    tagline: "Java backend with MySQL for accounts, transactions, and reporting.",
    tech: ["Java", "MySQL", "OOP"],
    github: "https://github.com/Sairam111222",
  },
  {
    title: "AI Disease Risk Predictor",
    tagline: "Machine learning model that predicts disease risk from patient inputs.",
    tech: ["Python", "Machine Learning", "Predictive Analytics"],
    github: "https://github.com/Sairam111222",
  },
];

export const certifications = [
  { title: "Oracle Generative AI", issuer: "Oracle University", year: "2025" },
  { title: "Smart India Hackathon — Finalist", issuer: "SIH", year: "2025" },
  { title: "IBM Python & Java", issuer: "IBM", year: "2023" },
  { title: "TCS iON Career Edge — Young Professional", issuer: "TCS iON", year: "2025" },
  { title: "Mobile Developer Intern", issuer: "AllCloud Enterprise Solutions", year: "2026" },
  { title: "Web Development Intern", issuer: "Elevate Lab", year: "2025" },
];

export const stats = [
  { label: "Projects", value: 4, suffix: "+" },
  { label: "Internships", value: 2 },
  { label: "Certifications", value: 6 },
  { label: "CGPA", value: 8.3, decimals: 1 },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
