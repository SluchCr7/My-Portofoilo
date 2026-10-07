import { CiGlobe } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { IoMdColorPalette } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

// techIcons.tsx
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiFigma } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

export const techIcons = {
  javascript: <FaJsSquare />,
  nextjs: <RiNextjsFill />,
  tailwind: <RiTailwindCssFill />,
  css: <IoLogoCss3 />,
  figma: <SiFigma />,
  mongodb: <DiMongodb />,
  nodejs: <FaNodeJs />,
  react: <FaReact />,
};


export const services = [
  {
    icon: <CiGlobe />,
    name: "Full Stack Web Development",
    description:
      "Delivering end-to-end web solutions using the MERN stack. I build robust, scalable, and high-performance applications tailored to meet your business objectives, ensuring seamless functionality from database to user interface.",
  },
  {
    icon: <CiServer />,
    name: "Backend Architecture",
    description:
      "Architecting secure and efficient server-side systems. I specialize in RESTful API development, database optimization (MongoDB), and server management to support complex application workflows.",
  },
  {
    icon: <IoMdColorPalette />,
    name: "Frontend Engineering",
    description:
      "Transforming creative designs into responsive, pixel-perfect web experiences. Utilizing modern frameworks like Next.js and React, I ensure your application looks exceptional and performs flawlessly across all devices.",
  },
];



export const reviews = [
  {
    quote:
      "Sluch delivered a solution that completely transformed our workflow. The attention to detail in the backend logic and the intuitive frontend design made adoption effortless for our team.",
    name: "Ethan Wright",
    title: "Operations Director at TechFlow",
  },
  {
    quote:
      "An exceptional developer who understands both the code and the business goals. The e-commerce platform built for us is fast, secure, and has significantly boosted our sales.",
    name: "Sophia Carter",
    title: "Founder of LuxeAura",
  },
  {
    quote:
      "Professional, punctual, and incredibly skilled. The MERN stack expertise brought our complex project to life, handling data with ease while maintaining a smooth user experience.",
    name: "Daniel Kim",
    title: "Lead Engineer at DataSphere",
  },
  {
    quote:
      "The comprehensive update to our legacy system was handled with great care. The transition was smooth, and the new features have added immense value to our service offering.",
    name: "Olivia Bennett",
    title: "Product Manager at InnovateX",
  },
  {
    quote:
      "A true partner in development working with Sluch. The ability to translate our conceptual ideas into a fully functional, high-performance web application was impressive. Highly recommended.",
    name: "Michael Ross",
    title: "CEO of StartUp Inc.",
  },
];

export const links = [
  { id: 1, title: "Home", url: "#home" },
  { id: 2, title: "About", url: "#About" },
  { id: 3, title: "Services", url: "#Services" },
  { id: 4, title: "Experience", url: "#Experience" },
  { id: 5, title: "Projects", url: "#Projects" },
  { id: 6, title: "Reviews", url: "#Reviews" },
];
export const projects = [
  {
    img: "/Projects/Playtactic.png",
    name: "PlayTactic",
    description: "An engaging football-themed quiz platform designed to challenge fans with tiered difficulty levels, complete with a competitive ranking system.",
    tools: ["javascript", "nextjs", "tailwind"],
    finishedAt: "May 2024",
    github: "https://github.com/SluchCr7/Challenge",
    preview: "https://playtactic.vercel.app",
    details: "Features secure JWT authentication, real-time scoring updates, and a MongoDB backend for robust data management.",
    duration: "3 weeks",
    features: [
      "Secure JWT Authentication",
      "Dynamic Leaderboard System",
      "Admin Dashboard for Content",
      "Interactive Animations",
      "Scalable MongoDB Architecture"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/Sluch.png",
    name: "My Portfolio",
    description: "A professional showcase of my development career, featuring a modern, dark-themed aesthetic and interactive elements to highlight my skills and projects.",
    tools: ["nextjs", "tailwind"],
    finishedAt: "August 2025",
    github: "https://github.com/SluchCr7/My-Portofoilo",
    preview: "https://sluch.vercel.app",
    details: "Built with Next.js for SEO optimization, featuring smooth transitions and a fully responsive layout using Tailwind CSS.",
    duration: "1 week",
    features: [
      "Sleek Dark Mode Design",
      "Interactive Project Carousel",
      "Fully Responsive Layout",
      "Optimized Performance",
      "Advanced Filtering System"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/Zocial.png",
    name: "Zocial",
    description: "A comprehensive social media platform enabling users to connect, share updates, and manage their digital presence with features similar to major networks.",
    tools: ["javascript", "nextjs", "tailwind", "nodejs", "mongodb"],
    finishedAt: "July 2025",
    github: "https://github.com/SluchCr7/Social-Media",
    preview: "https://zocial-zeta.vercel.app",
    details: "Incorporates a full follow/unfollow system, real-time feed updates, and optimized image handling via Cloudinary.",
    duration: "10 weeks",
    features: [
      "User Authentication & Security",
      "Follow/Unfollow Logic",
      "Dynamic Activity Feed",
      "Profile Customization",
      "Cloud Media Integration"
    ],
    status: "In Progress"
  },
  {
    img: "/Projects/Fashionista.png",
    name: "Fashionista",
    description: "A chic e-commerce platform for women's fashion, offering a seamless shopping experience with intuitive navigation and product discovery tools.",
    tools: ["javascript", "nextjs", "tailwind", "figma", "mongodb"],
    finishedAt: "June 2025",
    github: "https://github.com/SluchCr7/fashionista",
    preview: "https://fashionista-two.vercel.app",
    details: "Features a responsive design, mock payment gateway integration, and an intelligent product recommendation engine.",
    duration: "4 weeks",
    features: [
      "Smart Product Filtering",
      "Dynamic Shopping Cart",
      "Detailed Product Pages",
      "Mock Payment Processing",
      "Recommendation Engine"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/zamalek.png",
    name: "Zamalek SC Hub",
    description: "The official-style digital home for Zamalek Sporting Club, celebrating its history and achievements with a modern, immersive web experience.",
    tools: ["javascript", "nextjs", "tailwind", "figma", "mongodb", "nodejs", "expressjs"],
    finishedAt: "August 2025",
    github: "https://github.com/SluchCr7/zamalek-Offecial-Website",
    preview: "https://zamalek-tau.vercel.app",
    details: "Includes a comprehensive history section, player profiles, and a secure authentication system for fan engagement.",
    duration: "6 weeks",
    features: [
      "Immersive History Timeline",
      "Responsive Fan Interface",
      "Secure Admin Control Panel",
      "Player Statistics",
      "Authentication System"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/quran.png",
    name: "Quran & Prayer",
    description: "A spiritual companion app providing accurate prayer times and the Holy Quran, designed to facilitate daily worship with ease and accessibility.",
    tools: ["javascript", "nextjs", "tailwind", "figma", "mongodb", "nodejs", "expressjs"],
    finishedAt: "August 2024",
    github: "https://github.com/SluchCr7/Islam-Quran",
    preview: "https://islam-mu.vercel.app",
    details: "Focuses on a clean, distraction-free interface, offering reliable data and a responsive design for on-the-go access.",
    duration: "3 weeks",
    features: [
      "Accurate Prayer Times",
      "Digital Holy Quran",
      "Clean Reading Interface",
      "Location-Based Calculations",
      "Mobile-First Design"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/mens.png",
    name: "Sheikh Al-Minshawi Tribute",
    description: "A dedicated platform honoring Sheikh Muhammad Siddiq Al-Minshawi, presenting his Quranic recitations in a high-quality audio interface.",
    tools: ["javascript", "nextjs", "tailwind", "Framer motion"],
    finishedAt: "November 2025",
    github: "https://github.com/SluchCr7/El-Menshawy",
    preview: "https://el-menshawy.vercel.app/",
    details: "Features a serene, respectful design with seamless audio streaming and an accessible library of recitations.",
    duration: "1 week",
    features: [
      "High-Quality Audio Streaming",
      "Serene & Respectful UI",
      "Comprehensive Recitation Library",
      "Responsive Audio Player",
      "Fast Content Delivery"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/ecommerce.png",
    name: "E-Commerce Platform",
    description: "A modern e-commerce solution with a focus on user experience and seamless transactions.",
    tools: ["javascript", "nextjs", "tailwind", "Framer motion" , "mongodb", "nodejs", "expressjs"],
    finishedAt: "July 2026",
    github: "https://github.com/SluchCr7/Primuim",
    preview: "https://premium-hazel-nine.vercel.app",
    details: "A full-featured online store with product listings, shopping cart functionality, and secure checkout processes.",
    duration: "6 weeks",
    features: [
      "High-Quality Audio Streaming",
      "Serene & Respectful UI",
      "Comprehensive Recitation Library",
      "Responsive Audio Player",
      "Fast Content Delivery"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/chat.png",
    name: "Chat Application",
    description: "A real-time chat application enabling seamless communication between users with a focus on speed and reliability.",
    tools: ["javascript", "nextjs", "tailwind", "Framer motion" , "mongodb", "nodejs", "expressjs"],
    finishedAt: "Feb 2026",
    github: "https://github.com/SluchCr7/Chat-App",
    preview: "https://chat-blue-one.vercel.app/",
    details: "A full-featured online store with product listings, shopping cart functionality, and secure checkout processes.",
    duration: "4 weeks",
    features: [
      "High-Quality Audio Streaming",
      "Serene & Respectful UI",
      "Comprehensive Recitation Library",
      "Responsive Audio Player",
      "Fast Content Delivery"
    ],
    status: "Completed"
  },
  {
  img: "/Projects/vibeShorts.png",
  name: "VibeShorts",
  description:
    "A modern short-form video platform built to deliver an engaging and seamless content-sharing experience, allowing users to discover, upload, and interact with short videos.",

  tools: [
    "typescript",
    "react",
    "tailwind",
    "redux",
    "nodejs",
    "expressjs",
    "mongodb"
  ],

  finishedAt: "August 2026",

  github: "https://github.com/SluchCr7/shorts-App",
  preview: "https://vibeshorts-blond.vercel.app/",

  details:
    "A full-stack short video platform built with the MERN stack, featuring secure authentication, video uploading and management, interactive user engagement, and a responsive interface optimized for a smooth content discovery experience.",

  duration: "4 weeks",

  features: [
    "Secure User Authentication",
    "Short Video Upload & Management",
    "Personalized Video Feed",
    "Like & Comment System",
    "User Profiles",
    "Follow / Unfollow System",
    "Responsive Mobile-First Interface",
    "Global State Management with Redux"
  ],

  status: "Completed"
},
  {
  "img": "https://images.unsplash.com/photo-1563986768609-322da13575f3?",
  "name": "Digital Banking Platform",
  "description":
    "A secure and comprehensive digital banking web application featuring dedicated user portals and robust administrative control panels built with modern web technologies.",

  "tools": [
    "nextjs",
    "react",
    "typescript",
    "tailwind",
    "nodejs",
    "expressjs",
    "mongodb"
  ],

  "finishedAt": "Sep 2026",

  "github": "https://github.com/SluchCr7/Bank-System",
  "preview": "https://pfp-self-six.vercel.app/",

  "details":
    "A full-stack digital banking platform utilizing Next.js Route Groups to segregate client-facing banking operations from administrative management layouts, ensuring secure transactions, account management, and real-time financial tracking.",

  "duration": "4 weeks",

  "features": [
    "Secure Authentication & Authorization",
    "Separate User & Admin Layouts via Next.js Route Groups",
    "Account Balance & Transaction Tracking",
    "Fund Transfers & Payment History",
    "Admin Dashboard for User & Account Management",
    "Responsive Mobile-First Interface",
    "Optimized Performance & Secure Backend APIs"
  ],

  "status": "Completed"
}
  
];



export const tools = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "CSS", icon: <IoLogoCss3 /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Javascript", icon: <FaJsSquare /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <DiMongodb /> }
]

export const stats = [
  { num: 4, text: "Years of Experience" },
  { num: 12, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 200, text: "Code Commits" },
]

export const icons = [
  {
    link: "https://github.com/SluchCr7",
    Icon: FaGithub
  },
  {
    link: "https://www.linkedin.com/in/sluch07",
    Icon: FaLinkedin
  },
  {
    link: "https://www.facebook.com/ahmed.abobakr.821836/",
    Icon: FaFacebook
  },
  {
    link : "https://x.com/slucher004",
    Icon : FaXTwitter
  }
]


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, ensuring transparency and alignment ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/assets/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones ensuring smooth communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Constantly evolving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/assets/grid.svg",
    spareImg: "/assets/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/assets/b5.svg",
    spareImg: "/assets/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
