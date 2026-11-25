// ============================================================
//  EDIT THIS FILE to update your portfolio. No other file needs changes.
//  To add a new project: copy one block inside PROJECTS, paste it, edit it.
//  Put new screenshots in the /images folder.
// ============================================================

const PROFILE = {
  name: "Pradeep Singh",
  headline: "Computer Science graduate focused on data engineering and analytics.",
  roles: ["Data Engineering", "Python & SQL Pipelines", "Power BI Dashboards", "Data Analytics"],   // typing animation in the hero
  about: "I build data pipelines and dashboards. During my internship at Jindal Steel & Power Ltd., I independently built a real-time pipeline that turns email alerts into structured SQL data and Power BI dashboards. I work with Python, SQL and Power BI, and I like taking a problem from raw data to a decision-ready report.",
  aboutMe: {
    photo: "images/pradeep.jpg",
    intro: "I'm Pradeep Singh, a Computer Science graduate from India. I work with Python, SQL and Power BI, building data pipelines and dashboards. I also work on automation, including automating trading strategies with Python and APIs.",
    strengths: "Always positive thinking towards my work, discipline and quick learner.",
    weakness: "I tend to get deeply immersed in my work, to the point where I lose track of time and meals."
  },
  email: "pradeepsingh0369@gmail.com",
  location: "Raigarh, Chhattisgarh, India",
  // Leave a link empty ("") to hide it. Add yours when ready.
  github: "https://github.com/Pradeepsingh10",
  linkedin: "https://www.linkedin.com/in/pradeep-singh-bb02733b5/",
  x: "https://x.com/_pradeep109",
  resume: ""            // e.g. "Pradeep_Singh_Resume_DE.pdf" (put the PDF next to index.html)
};

const SKILLS = [
  { group: "Languages", items: ["Python", "SQL", "JavaScript", "HTML", "CSS"] },
  { group: "Data Engineering", items: ["ETL / Data Pipelines", "Data Ingestion (IMAP)", "Regex Parsing", "SQL Storage", "Workflow Automation"] },
  { group: "Reporting & BI", items: ["Power BI", "Data Visualization", "MS Office"] }
  // Add new groups later, e.g. { group: "Data Science", items: ["Pandas", "Scikit-learn"] }
];

const PROJECTS = [
  {
    title: "Real-Time Gmail Monitoring & Device Downtime Dashboard",
    category: "Data Engineering",
    context: "Internship project · Jindal Steel & Power Ltd. · Jun – Sep 2025",
    summary: "End-to-end pipeline that ingests alert emails in real time, extracts fields with regex, stores structured records in SQL and visualizes device and IP downtime in Power BI.",
    points: [
      "Python IMAP client reads incoming emails and parses device, IP and up/down timestamps.",
      "Structured records are loaded into SQL tables for analysis.",
      "Power BI dashboards show up/down devices, downtime history and location filters.",
      "Helped management identify underperforming vendors and support cost-saving decisions."
    ],
    tools: ["Python", "IMAP", "Regex", "SQL", "Power BI"],
    images: ["images/device-status-home.jpg", "images/device-status-summary.jpg"],
    note: "Screenshots use sample data.",
    github: "", demo: ""
  },
  {
    title: "Forex Trade Journal Analysis",
    category: "Analytics",
    context: "Personal project",
    summary: "Power BI dashboard that analyses a trading journal: trade count, profit and loss, win/loss split and which entry reasons drive results.",
    points: [
      "KPI cards for number of trades, total profit, total loss, winning and losing trades.",
      "Profit and loss trend over time and a breakdown by reason for entry.",
      "Slicers for date, currency pair, trade basis and rules followed."
    ],
    tools: ["Power BI"],
    images: ["images/trading-journal.jpg"],
    note: "",
    github: "", demo: ""
  },
  {
    title: "Sales Analysis Dashboard",
    category: "Analytics",
    context: "Practice project · 5-page report",
    summary: "Multi-page Power BI report covering sales overview, regional performance, product and category, customer segments and shipping trends.",
    points: [
      "Headline KPIs: total sales, total orders and total products.",
      "Sales over time and by category, with region and state map views.",
      "Navigation buttons and slicers for date, country, state and category."
    ],
    tools: ["Power BI"],
    images: ["images/sales-overview.jpg", "images/sales-regional.jpg"],
    note: "",
    github: "", demo: ""
  }
];

const EXPERIENCE = [
  { role: "Co-Founder", org: "LimeLabs", period: "July 2026 – October 2026",
    points: ["Co-founded a software company with friends, building and delivering custom software for small shops and small businesses.",
             "Closed in October 2026 as client demand declined and the market shifted toward AI-driven solutions."] },
  { role: "Data Engineering Intern", org: "Jindal Steel & Power Ltd.", period: "June 2025 – September 2025",
    points: ["Designed and built an end-to-end Python data pipeline: IMAP ingestion, regex parsing and SQL storage.",
             "Built Power BI dashboards on top of the SQL data to visualize device and IP downtime.",
             "Delivered the project independently, from requirements to delivery."] },
  { role: "Founder", org: "QR Menu Startup", period: "February 2025 – June 2025",
    points: ["Launched a QR-based digital menu service for hotels and restaurants using dynamic QR codes.",
             "Managed client onboarding, customization and technical support."] },
  { role: "Shopify E-commerce Startup", org: "", period: "September 2024 – January 2025",
    points: ["Set up and managed an e-commerce website; used analytics and SEO to improve visibility and conversions."] }
];

const EDUCATION = [
  { title: "Bachelor of Engineering, Computer Science", org: "OP Jindal University, Raigarh, Chhattisgarh", period: "2022 – 2026", extra: "CGPA: 7.54" },
  { title: "Higher Secondary (12th), PCM", org: "Jindal Aadarsh Gramya Bharti School, Raigarh", period: "2022", extra: "63%" },
  { title: "Secondary (10th)", org: "Jindal Aadarsh Gramya Bharti School, Raigarh", period: "2020", extra: "77%" }
];

const CERTIFICATIONS = [
  "Data Visualization with Python, Duke University",
  "Data Analysis with Power BI, Jindal Steel",
  "SEBI Investor Certification, SEBI"
];
