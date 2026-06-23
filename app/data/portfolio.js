import {
  Mail,
  Terminal,
  Layout,
  Database,

} from "lucide-react";
import { GitHubSVG, LinkedInSVG } from "../components/ui/Icons";

export const developerInfo = {
  name: "Vivek Kushwaha",
  role: "Full Stack Developer",
  tagline: "Building responsive full-stack web applications using React, Next.js, Node.js, and MongoDB.",
  socials: [
    { name: "GitHub", url: "https://github.com/vivekkushwaha14", icon: GitHubSVG },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vivek-kushwaha-4a8b22231", icon: LinkedInSVG },
    { name: "Email", url: "mailto:vivekkushwaha8654v@gmail.com", icon: Mail },
  ],
  resumeUrl: "/myresume.pdf",
};

export const aboutInfo = {
  bio: [
    "I am a self-taught Full Stack Developer with a deep passion for web development.",
    "I have experience building full-stack applications and a strong interest in learning and implementing modern technologies.",
    "My journey in tech is driven by curiosity and a commitment to creating efficient, scalable, and user-friendly solutions."
  ],
  stats: [
    { label: "Projects ", value: "2+" },
    { label: "Technologies ", value: "10+" },
    { label: "Years Experience", value: "2+" },
  ]
};

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript",  "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "GitHub", "Linux", "VS Code", "Postman"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A modern expense tracking application built using React Native and Expo for managing daily expenses and income.",
    features: ["Add expenses", "Categorize transactions", "Expense summary", "Responsive mobile UI"],
    tech: ["React Native", "Expo"],
    getApk: "https://expo.dev/accounts/vivek_14/projects/expense-tracker/builds/eee6b934-152f-4e78-a93a-7e733cf55d2f",
    githubUrl: "https://github.com/vivekkushwaha14/Expense-Tracker",
    image: "/expense-tracker/dashboard.png",
    images: [
      "/expense-tracker/dashboard.png",
      "/expense-tracker/spendings.png",
      "/expense-tracker/add-expense.png",
      "/expense-tracker/edit.png",
      "/expense-tracker/signup.png"
    ],
    isApp: true
  },
  {
    id: 2,
    title: "iNotebook",
    description: "A full-stack note-taking application with authentication and CRUD functionality.",
    features: ["User authentication", "Create notes", "Update notes", "Delete notes", "Secure backend"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://inotebook-frontend-sable.vercel.app",
    githubUrl: "https://github.com/vivekkushwaha14/iNoteBook",
    image: "/inotebook/home.png",
    images: [
      "/inotebook/home.png",
      "/inotebook/notes.png",
      "/inotebook/edit.png",
      "/inotebook/abbout.png"
    ]
  }
];

export const timeline = [
  {
    year: "2024",
    title: "Started My Web Development Journey",
    description:
      "Began learning web development fundamentals, including HTML, CSS, and JavaScript, and built my first websites."
  },
  {
    year: "2025",
    title: "Completed Full Stack Web Development Training",
    description:
      "Successfully completed a comprehensive web development course and gained hands-on experience with React.js, Node.js, Express.js, and MongoDB."
  },
  {
    year: "2025",
    title: "Built Real-World Clone Projects",
    description:
      "Developed clone applications inspired by platforms such as Spotify and Twitter to strengthen my understanding of modern UI design, authentication, and application architecture."
  },
  {
    year: "2025",
    title: "Started Building React Applications",
    description:
      "Created multiple React-based projects and gained practical experience with component architecture, state management, and responsive user interfaces."
  },
  {
    year: "2026",
    title: "Developed Expense Tracker Mobile App",
    description:
      "Built a cross-platform expense tracking application using React Native and Expo, featuring expense management, categorization, and intuitive user experience."
  },
  {
    year: "2026",
    title: "Built iNotebook MERN Application",
    description:
      "Developed a full-stack note-taking application with secure authentication and complete CRUD functionality using the MERN stack."
  },
  {
    year: "2026",
    title: "Learning Next.js & Advanced Backend Development",
    description:
      "Currently expanding my expertise in Next.js App Router, backend architecture, API design, authentication, and production-ready full-stack applications."
  }
];



export const certificates = [
  {
    title: "Sigma Web Development Course",
    issuer: "CodeWithHarry",
    date: "2025",
    image: "/assets/sigma-cert.png" 
  }
];
