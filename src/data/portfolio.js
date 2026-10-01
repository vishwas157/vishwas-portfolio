
export const portfolioData = {
  personal: {
    name: "Vishwas Suthar",
    brandName: "VISHWAS",
    role: "IT Student • Developer",
    location: "Ahmedabad, India",
    email: "sutharvishwas265@gmail.com",
    phone: "+91 6353510791",
    whatsappPhone: "916353510791",
    github: "https://github.com/vishwas157",
  },

  hero: {
    greeting: "Hi, I'm Vishwas.",
    subtitle: "IT Student • Developer",
    intro: "I make things for the web.",
    primaryCta: { text: "MY WORK", href: "#projects" },
    secondaryCta: { text: "CONTACT", href: "#contact" },
  },

  about: {
    sectionLabel: "ABOUT ME",
    title: "Building Digital Experiences Through Code & Creativity.",
    subtitle: "I'm Vishwas Suthar — Developer & Creative Technologist.",
    paragraphs: [
      "I build modern web applications and interactive digital experiences with a focus on clean interfaces, thoughtful functionality, and engaging user interactions.",
      "My work spans frontend development, full-stack applications, and immersive 3D web experiences. I enjoy transforming complex ideas into intuitive products, combining technical problem-solving with a strong eye for design.",
      "From developing workflow-driven applications to creating interactive 3D experiences with React and Three.js, I focus on building solutions that are functional, responsive, and visually distinctive."
    ],
    closingStatement: "My approach: Write purposeful code. Design with intention. Build experiences that make an impact."
  },

  skills: {
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Three.js" },
      { name: "Blender" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" }
    ]
  },

  projects: [
    {
      id: "frauddms",
      title: "FraudDMS",
      description:
        "A document management and fraud-related case workflow project focused on evidence handling and role-based access.",
      tags: ["React", "Node.js", "MongoDB", "JavaScript"],
      github: "",
      demo: ""
    },

    {
      id: "3d-portfolio",
      title: "3D Portfolio",
      description:
        "My interactive personal portfolio featuring my custom 3D character and real-time WebGL interactions.",
      tags: ["React", "Three.js", "Tailwind CSS"],
      github: "https://github.com/vishwas157",
      demo: "https://github.com/vishwas157"
    },

    {
      id: "gujju-snacks",
      title: "Gujju Snacks",
      description:
        "A Gujarati snacks website with a dedicated interface for exploring snacks and food-related content.",
      tags: ["React", "JavaScript", "CSS", "Web Design"],
      github: "",
      demo: "https://gujju-snacks03.netlify.app/"
    },

    {
      id: "academy-of-excellence",
      title: "Academy of Excellence",
      description:
        "An educational website presenting academic information and learning-related content through a structured interface.",
      tags: ["React", "JavaScript", "Frontend"],
      github: "",
      demo: "https://academy-of-excellence1.netlify.app/"
    },

    {
      id: "learnai",
      title: "LearnAI",
      description:
        "An AI learning platform with a web-based interface for accessing AI-related learning content and resources.",
      tags: ["React", "AI", "JavaScript", "Frontend"],
      github: "",
      demo: "https://learnai-frontend-139j.onrender.com"
    },

    {
      id: "lifelink",
      title: "LifeLink",
      description:
        "A web application designed around connecting users with relevant services and information through a user-friendly interface.",
      tags: ["React", "JavaScript", "Web App"],
      github: "",
      demo: "https://lifelink-qatc.onrender.com"
    },

    {
      id: "thatway",
      title: "ThatWay",
      description:
        "A web application featuring a modern frontend and an interactive user experience.",
      tags: ["React", "JavaScript", "Frontend"],
      github: "",
      demo: "https://thatway-frontend-1wu08zw7c-sutharvishwas265-3660s-projects.vercel.app/"
    }
  ],

  education: {
    degree: "B.Tech in Information Technology",
    institution: "Silver Oak University",
    location: "Ahmedabad, India"
  },

  contact: {
    title: "Say hello",
    email: "sutharvishwas265@gmail.com",
    phone: "+91 6353510791",
    whatsappPhone: "916353510791",
    github: "https://github.com/vishwas157"
  },

  character3d: {
    modelPath: "/models/character.glb",
    fallbackImage: "/models/character-fallback.png",
    position: [0.05, -0.90, 0],
    mobilePosition: [0, -0.85, 0],
    scale: 1.32,
    mobileScale: 1.18,
    rotation: [0, -0.2, 0],
    maxTurnAngle: 0.8,
    lerpSpeed: 0.1
  }
};