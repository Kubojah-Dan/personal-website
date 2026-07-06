// ═══════════════════════════════════════════════════════════════
// Portfolio Content Data — Kuboja Daniel M.
// ═══════════════════════════════════════════════════════════════

export const PERSONAL = {
  name: 'Kuboja Daniel M.',
  firstName: 'Daniel',
  title: 'AI/ML Engineer & Full-Stack Developer',
  tagline: 'Engineering Intelligence. Building the Future.',
  subheadline:
    "Hi, I'm Kuboja Daniel M. I blend Machine Learning with Full-Stack Development to create intelligent, scalable, and socially impactful systems.",
  mission:
    'Democratizing Technology for Social Impact — using AI to solve real-world problems in rural education, accessibility, and predictive analytics.',
  phone: '+91 8452932842',
  email: 'kubojadaniel.m2024aiml@sece.ac.in',
  location: 'Coimbatore, Tamil Nadu, India',
  photo: '/assets/profile.jpeg',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kuboja-mabuba-9202b82b6',
    github: 'https://github.com/Kubojah-Dan',
    leetcode: 'https://leetcode.com/u/Kuboja_Daniel014/',
  },
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
};

export const STATS = [
  { value: 2500, suffix: '+', label: 'Problems Solved' },
  { value: 8.1, suffix: '', label: 'CGPA', decimals: 1 },
  { value: 5, suffix: '+', label: 'Projects Shipped' },
];

export const EDUCATION = [
  {
    period: '2024 – 2028',
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.E. Computer Science & Engineering (AIML)',
    detail: 'CGPA: 8.1',
    current: true,
  },
  {
    period: 'High School',
    institution: 'Karura SDA High School',
    degree: 'Secondary Education',
    detail: 'Foundational years in academics & curiosity',
    current: false,
  },
  {
    period: 'Primary',
    institution: 'Joyland International School',
    degree: 'Primary Education',
    detail: 'Where the journey began',
    current: false,
  },
];

export const NARRATIVE = {
  paragraphs: [
    `I don't just write code — I architect solutions that think. My journey began not in a lecture hall, but in the competitive arenas of algorithmic problem-solving. Over 2,500 challenges later, across LeetCode, CodeChef, and Skill Rack, I've built the kind of deep logical foundation that transforms raw data into intelligent systems.`,
    `What drives me isn't the technology itself — it's what it can do for people who've never had access to it. Growing up across different educational environments, I saw firsthand how the right tools could unlock potential. That's why I build AI systems for rural education, create platforms that work offline for students without reliable internet, and develop tools that detect harmful content before it reaches vulnerable users.`,
    `Today, I sit at the intersection of Machine Learning and Full-Stack Development — a rare combination that lets me not only train the models, but also build the complete applications that deliver their intelligence to real users. From personalized meal planning with AI chatbots to stock market predictors that convert probabilities into actionable signals, every project I build carries the same DNA: make complex technology accessible, scalable, and socially meaningful.`,
  ],
  competitiveProgramming: `With over 2,500 algorithmic challenges solved globally — spanning dynamic programming, graph theory, number theory, and advanced data structures — I've cultivated a thinking discipline that translates directly into how I design AI architectures. Every model I build, every system I architect, carries the rigor and optimization mindset of competitive programming.`,
};

export const PROJECTS = [
  {
    id: 'educentro',
    title: 'EduCentro',
    subtitle: 'Internship Project',
    description:
      'An AI-based personalized meal planning web application built during my internship, featuring an integrated chatbot that understands dietary preferences and health goals. Developed with the MERN stack for a seamless, responsive experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI/ML', 'Chatbot'],
    metrics: ['Full MERN Stack', 'AI-Powered Chatbot', 'Personalized Plans'],
    image: '/assets/project2.png',
    featured: true,
  },
  {
    id: 'gamified-ai',
    title: 'Gamified AI Learning Platform',
    subtitle: 'Social Impact Project',
    description:
      'An offline-capable learning platform designed for Indian rural students, covering Grade 1 through 12. Features AI-generated quizzes, adaptive difficulty, and gamified progress tracking — all working without internet connectivity using PouchDB and service workers.',
    tech: ['React', 'PouchDB', 'Dexie', 'AI/ML', 'Service Workers', 'PWA'],
    metrics: ['Offline-First', 'Grades 1-12', 'AI Quizzes'],
    image: '/assets/project5.png',
    featured: true,
  },
  {
    id: 'coinvista',
    title: 'CoinVista',
    subtitle: 'AI-Powered Cryptocurrency Intelligence & Safe Trading Platform',
    description:
      'CoinVista is a full-stack SaaS platform that leverages AI, blockchain, and real-time market intelligence to empower cryptocurrency traders. It features AI-driven market insights, advanced technical analysis, Web3 authentication, visual strategy building, social copy trading, whale alerts, gamified learning, and secure subscription management in a unified ecosystem.',
    tech: ['React', 'Spring Boot', 'FastAPI', 'MongoDB', 'LangGraph', 'Groq', 'Stripe', 'Wagmi', 'RainbowKit'],
    metrics: ['AI-Powered', 'Real-Time Analytics', 'Web3 Integration'],
    image: '/assets/project6.png',
    featured: true,
  },
  {
    id: 'scam-detection',
    title: 'Scam Detection Application',
    subtitle: 'ML & NLP Project',
    description:
      'A real-time platform leveraging Machine Learning and Natural Language Processing to identify harmful content across communication channels. Uses ensemble models and NLP pipelines for high-accuracy scam classification.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'NLP', 'Flask', 'React'],
    metrics: ['Real-Time Detection', 'NLP Pipeline', 'ML Ensemble'],
    image: '/assets/project1.png',
    featured: true,
  },
  {
    id: 'stock-predictor',
    title: 'Stock Market Price Predictor',
    subtitle: 'Data Science Project',
    description:
      'An ML model predicting 1-day, 10-day, and 30-day stock price movements. Converts probability outputs into actionable trading signals with confidence intervals, using LSTM networks and technical indicator features.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'LSTM', 'Matplotlib'],
    metrics: ['Multi-Horizon', 'LSTM Networks', 'Trading Signals'],
    image: '/assets/project7.png',
    featured: true,
  },
  {
    id: 'scam-detection',
    title: 'Scam Detection Application',
    subtitle: 'ML & NLP Project',
    description:
      'A real-time platform leveraging Machine Learning and Natural Language Processing to identify harmful content across communication channels. Uses ensemble models and NLP pipelines for high-accuracy scam classification.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'NLP', 'Flask', 'React'],
    metrics: ['Real-Time Detection', 'NLP Pipeline', 'ML Ensemble'],
    image: '/assets/project6.png',
    featured: true,
  },
];

export const FUTURE_PROJECTS = [
  {
    title: 'Venue Intelligence & 3D Digital Twins',
    description:
      'Building intelligent spatial models that create real-time 3D digital twins of physical venues — combining computer vision, IoT sensor data, and predictive analytics for smart space management.',
    icon: 'building',
  },
  {
    title: 'Advanced Portfolio Tracking',
    description:
      'An AI-powered investment portfolio tracker with real-time risk assessment, automated rebalancing suggestions, and predictive market sentiment analysis across multiple asset classes.',
    icon: 'trending-up',
  },
];

export const HACKATHONS = [
  {
    title: 'Selfiehack',
    achievement: 'Finalist',
    description: 'Advanced to the finals with an innovative AI-powered solution.',
    image: '/assets/selfiehack.jpg',
  },
  {
    title: 'Freshathon',
    achievement: '3rd Place',
    description: 'Secured 3rd place among hundreds of competing teams.',
    image: '/assets/freshathon.jpg',
  },
  {
    title: 'Hack-O-Hartz',
    achievement: 'Top 10',
    description:
      'Reached Top 10 in this highly competitive 36-hour hackathon, building under extreme time pressure.',
    image: '/assets/hackohartz.png',
  },
];

export const CODING_PROFILES = [
  {
    platform: 'LeetCode',
    problems: 500,
    suffix: '+',
    globalRank: '115,124',
    badge: '/assets/badge-leetcode.png',
    url: 'https://leetcode.com/u/Kuboja_Daniel014/',
  },
  {
    platform: 'CodeChef',
    problems: 1000,
    suffix: '+',
    globalRank: '186,793',
    badge: '/assets/badge-codechef.png',
    url: 'https://www.codechef.com/users/kuboja_014',
  },
  {
    platform: 'Skill Rack',
    problems: 1000,
    suffix: '+',
    globalRank: '12 Certificates',
    badge: '/assets/badge-skillrack.png',
    url: 'http://www.skillrack.com/profile/514648/29f2d0ee11e9002b6716a2f52304d1ea3b5099fa',
  },
];

export const TECH_STACK = {
  core: [
    { name: 'C', icon: 'code' },
    { name: 'C++', icon: 'code' },
    { name: 'Python', icon: 'code' },
    { name: 'Java', icon: 'coffee' },
    { name: 'OOPs', icon: 'layers' },
    { name: 'ML', icon: 'brain' },
    { name: 'Deep Learning', icon: 'cpu' },
    { name: 'Generative AI', icon: 'sparkles' },
  ],
  web: [
    { name: 'HTML', icon: 'file-code' },
    { name: 'CSS', icon: 'palette' },
    { name: 'JavaScript', icon: 'terminal' },
    { name: 'React', icon: 'atom' },
    { name: 'Express', icon: 'server' },
    { name: 'Node.js', icon: 'hexagon' },
    { name: 'MySQL', icon: 'database' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'PouchDB', icon: 'database' },
    { name: 'Dexie', icon: 'database' },
  ],
  dataScience: [
    { name: 'Pandas', icon: 'table' },
    { name: 'NumPy', icon: 'calculator' },
    { name: 'Scikit-learn', icon: 'settings' },
    { name: 'TensorFlow', icon: 'brain' },
    { name: 'Matplotlib', icon: 'bar-chart-2' },
    { name: 'Seaborn', icon: 'line-chart' },
  ],
};

export const CERTIFICATIONS = [
  { name: 'Python Programming', issuer: 'LinkedIn', date: '2024', link: 'https://lh3.googleusercontent.com/d/1F9KS4mRvrJw7kg59V5RNmJj-0IaZxZd1' },
  { name: 'Data Visualization in PowerBI', issuer: 'LinkedIn', date: '2024', link: 'https://lh3.googleusercontent.com/d/1GOX1kw3pYNti2pRSM-TBdnod9KLXW0tX' },
  { name: 'Google Analytics - Badge', issuer: 'GOOGLE', date: '2026', link: 'https://lh3.googleusercontent.com/d/12zrvZVyGw4GQZaAO7iVk1y1adYN-yOj7' },
  { name: 'Data Structures & Algorithms', issuer: 'Udemy', date: '2025', link: 'https://lh3.googleusercontent.com/d/1nVHShldUuOQaB4bKqBgrehHwgQ4Qb6l2' },
  { name: 'Python Libraries for Data Science', issuer: 'SimpliLearn', date: '2025', link: 'https://lh3.googleusercontent.com/d/1A1rjvGSd_LKP5YUOvsDvQrX9pxz0rTpe' },
  { name: 'Design Thinking - A Primer', issuer: 'NPTEL', date: '2026', link: 'https://lh3.googleusercontent.com/d/1ymN_YGpwMCPbG9_VKja9HgtE_zFv4Rov' },
  { name: 'ICT Fundamentals', issuer: 'Unique Academy', date: '2024', link: 'https://lh3.googleusercontent.com/d/1GIbf5C0IOtw3YKi5ufPkuXOjxsis-DUy' },
  { name: 'AI Tools Workshop', issuer: 'Be10x', date: '2025', link: 'https://lh3.googleusercontent.com/d/1BkmOTlrx33t56ol4h3T8ywC7UjKAyw92' },
  { name: 'Machine Learning with Python', issuer: 'freeCodeCamp', date: '2025', link: 'https://lh3.googleusercontent.com/d/1bEblOx_m_X1GM0MJ2RYfDF85hG74ixLU' },
  { name: 'Programming with Java', issuer: 'NPTEL', date: '2025', link: 'https://lh3.googleusercontent.com/d/1ot8WsXdOd9DnzdwvGiNfFO5jK91KQQHg' },
  { name: 'IEEE Webnar', issuer: 'IEEE', date: '2025', link: 'https://lh3.googleusercontent.com/d/1YUN4XeolJWi6LaGOu_qXKIPvAOdaSOPu' },
];

export const GALLERY = [
  { src: '/assets/hackathon.jpeg', caption: 'BootCamp', category: 'hackathons' },
  { src: '/assets/internship.jpg', caption: 'Internship', category: 'competitions' },
  { src: '/assets/thiran.jpeg', caption: 'College Event', category: 'college' },
  { src: '/assets/workshop.jpeg', caption: 'Workshop', category: 'events' },
  { src: '/assets/contest.jpg', caption: 'Team Celebration', category: 'hackathons' },
  { src: '/assets/conference.jpg', caption: 'Tech Conference', category: 'conferences' },
];

export const CONFERENCES = [
  {
    title: 'AI DevCon & Expo — Second Edition',
    location: 'Bengaluru, India',
    date: '2025',
    description: 'An intensive two-day conference into future AI integrations. Presented my project to Amazon Web Services (AWS) experts, received encouragement and tech validation, and met the CEO of OVHcloud to discuss innovation and entrepreneurship.',
    image: '/assets/conference.jpg'
  },
  {
    title: 'ServiceNow AI Skill Summit 2026',
    location: 'Le Meridien, Coimbatore',
    date: '2026',
    description: 'Explored the ServiceNow ecosystem and the mechanics behind creating AI Agents. Gained key insights into Agent workflows and collaborated with cybersecurity peers to explore bridging domains for robust, AI-powered system defenses.',
    image: '/assets/workshop.jpeg'
  },
  {
    title: 'Google Build with AI Bootcamp',
    location: 'Coimbatore, India',
    date: '2025',
    description: 'Participated in a Google-led hands-on bootcamp exploring Google Antigravity and modern Google AI tools, developer frameworks, and prompt engineering challenges with Hack2skill.',
    image: '/assets/hackathon.jpeg'
  }
];

export const CHATBOT = {
  greeting: `Hi there! I'm Daniel's personal AI assistant. He's a bit busy training models and building full-stack apps right now, but I know everything about him! Would you like to hear about his award-winning hackathon projects or how he builds AI for social impact?`,
  personality:
    'Charming, friendly, deeply engaging, enthusiastic about technology and social impact.',
  responses: {
    education: `Daniel is currently pursuing B.E. in Computer Science & Engineering (AI & ML) at Sri Eshwar College of Engineering, maintaining an impressive 8.1 CGPA! He's in his second year (2024-2028 batch) and already building production-grade AI systems. If you think that's impressive, wait till you hear about his 2,500+ solved coding problems!`,
    projects: `Oh, where do I start! Daniel has built some amazing things:\n\n• **EduCentro** — An AI meal planner with a chatbot, built during his internship using the full MERN stack\n• **Gamified AI Learning** — An offline-first platform for rural Indian students (Grades 1-12!) with AI quizzes\n• **Scam Detection** — Real-time ML + NLP system to catch harmful content\n• **Stock Predictor** — ML model for 1/10/30-day price predictions\n\nWant me to dive deeper into any of these?`,
    hackathons: `Daniel is a hackathon warrior! He reached the Finals at Selfiehack, grabbed 3rd Place at Freshathon, and broke into the Top 10 at Hack-O-Hartz (a grueling 36-hour competition). His competitive spirit shows — with 2,500+ algorithmic problems solved across platforms! Want to check out his coding profiles?`,
    skills: `Daniel's tech stack is seriously impressive:\n\n🔧 **Languages**: C, C++, Python, Java\n🧠 **AI/ML**: Deep Learning, Generative AI, Scikit-learn, TensorFlow\n🌐 **Web**: React, Node.js, Express, MongoDB, MySQL\n📊 **Data**: Pandas, NumPy, Matplotlib, Seaborn\n\nHe's one of those rare developers who can train the model AND build the full app around it!`,
    coding: `Daniel lives and breathes algorithms! Here's his competitive programming scoreboard:\n\n• **LeetCode**: 500+ problems (Global Rank: 115,124)\n• **CodeChef**: 1,000+ problems (Global Rank: 186,793)\n• **Skill Rack**: 1,000+ problems with 12 certificates\n\nThat's over 2,500 problems total! His problem-solving discipline directly fuels how he architects AI systems.`,
    contact: `You can reach Daniel at:\n\n📧 Email: kubojadaniel.m2024aiml@sece.ac.in\n📱 Phone: +91 8452932842\n\nOr check out his social profiles using the links at the bottom of this page. He'd love to connect!`,
    impact: `What makes Daniel special isn't just his technical skills — it's his mission. He's passionate about "Democratizing Technology for Social Impact." His Gamified AI Learning Platform is designed for rural Indian students who may not have internet access. He builds offline-first, inclusive, accessible technology. That's not just coding — that's creating real change.`,
    default: `That's a great question! I'd love to tell you more about Daniel. He's currently studying AI & ML engineering with an 8.1 CGPA, has solved 2,500+ coding problems, and builds AI systems for social impact. What would you like to know more about? His projects, hackathons, skills, or vision for the future?`,
  },
  suggestions: [
    'Tell me about his projects',
    'What are his hackathon achievements?',
    'What tech stack does he use?',
    'How can I contact him?',
    'Tell me about his coding journey',
    'What drives his social impact work?',
  ],
};

export const NAV_SECTIONS = [
  { id: 'hero', num: '00', label: 'Home' },
  { id: 'about', num: '01', label: 'Story' },
  { id: 'projects', num: '02', label: 'Work' },
  { id: 'hackathons', num: '03', label: 'Compete' },
  { id: 'techstack', num: '04', label: 'Stack' },
  { id: 'gallery', num: '05', label: 'Gallery' },
  { id: 'contact', num: '06', label: 'Connect' },
];
