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
    icon: <CiImageOn />,
    name: "UI / UX Design",
    description:
      "Designing user-centric interfaces that are visually stunning and highly intuitive. I focus on creating seamless user journeys, wireframes, and prototypes that enhance engagement and satisfaction.",
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
    img: "/Projects/Taskify.png",
    name: "Taskify",
    description: "A streamlined task management application offering a drag-and-drop interface for organizing personal and professional workflows efficiently.",
    tools: ["javascript", "nextjs", "tailwind", "figma"],
    finishedAt: "March 2025",
    github: "https://github.com/SluchCr7/Todo-List-MERN-Stack-",
    preview: "https://taskify-khaki-nu.vercel.app",
    details: "Implements local storage for data persistence, with a clean UI inspired by modern design principles.",
    duration: "5 days",
    features: [
      "Intuitive Drag & Drop",
      "CRUD Operations",
      "Local Storage Persistence",
      "Modern Minimalist UI",
      "Workflow Organization"
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
    preview: "https://zocial-eight.vercel.app",
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
    img: "/Projects/Cryptova.png",
    name: "Cryptova",
    description: "A real-time cryptocurrency tracker providing live market data, detailed analysis, and interactive charting for informed investment decisions.",
    tools: ["javascript", "nextjs", "tailwind"],
    finishedAt: "November 2024",
    github: "https://github.com/SluchCr7/Password-Generator-Cryptova-",
    preview: "https://cryptova-ruby.vercel.app",
    details: "Integrates the CoinGecko API for live updates, featuring advanced search capabilities and category filtering.",
    duration: "1.5 weeks",
    features: [
      "Live CoinGecko API Integration",
      "Interactive Market Charts",
      "Advanced Search & Filters",
      "Responsive Dark Theme",
      "Real-time Data Visualization"
    ],
    status: "Completed"
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
    preview: "https://islam-roan.vercel.app",
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
    img: "/Projects/Landing.png",
    name: "Devion Landing Page",
    description: "A high-conversion landing page for software solutions, showcasing services and pricing with a sleek, professional layout.",
    tools: ["javascript", "nextjs", "tailwind", "Framer motion"],
    finishedAt: "November 2025",
    github: "https://github.com/SluchCr7/Deveion",
    preview: "https://deveion.vercel.app",
    details: "Utilizes Framer Motion for engaging animations and Next.js for superior load times and SEO performance.",
    duration: "2 Days",
    features: [
      "High-Performance Rendering",
      "Engaging Motion Effects",
      "Pricing Strategy Display",
      "Optimized Call-to-Actions",
      "Responsive Layout"
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
    img: "/Projects/JobsFinder.png",
    name: "JobFinder Pro",
    description: "A robust career platform connecting job seekers with top employers, featuring advanced search filters and profile management tools.",
    tools: ["javascript", "nextjs", "tailwind", "Framer motion"],
    finishedAt: "December 2025",
    github: "https://github.com/SluchCr7/Jobs-Website",
    preview: "https://jopfinder.vercel.app/",
    details: "Supports detailed user profiles, resume uploads, and an employer dashboard for managing job postings and applications.",
    duration: "2 weeks",
    features: [
      "Advanced Job Search",
      "Candidate Profile Management",
      "Employer Dashboard",
      "Application Tracking",
      "Real-time Alerts"
    ],
    status: "In Progress"
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