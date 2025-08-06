import { CiGlobe } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { IoMdColorPalette } from "react-icons/io";
import { FaGithub , FaLinkedin , FaInstagram , FaTwitter, FaFacebook } from 'react-icons/fa';

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
    name: "Web Development",
    description:
      "Building dynamic, responsive, and scalable websites using the latest web technologies to ensure seamless user experiences across all devices.",
  },
  {
    icon: <CiImageOn />,
    name: "UI / UX Design",
    description:
      "Crafting intuitive user interfaces and engaging user experiences through thoughtful design systems, wireframes, and interactive prototypes.",
  },
  {
    icon: <CiServer />,
    name: "Back End Development",
    description:
      "Developing secure, efficient, and scalable server-side logic, RESTful APIs, and database architectures to power web and mobile applications.",
  },
  {
    icon: <IoMdColorPalette />,
    name: "Front End Development",
    description:
      "Translating designs into pixel-perfect interfaces using modern frameworks, animations, and performance optimization techniques.",
  },
];



export const reviews = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const links = [
    { id: 1, title: "Home", url: "#Home" },
    { id: 2, title: "About", url: "#About" },
    { id: 3, title: "Projects", url: "#Projects" },
    { id: 4, title: "Reviews", url: "#Reviews" },
];
export const projects = [
  {
    img: "/Projects/Proj1.png",
    name: "PlayTactic",
    description: "A football-themed quiz game based on challenges, targeting football fans, with a point system and ranking.",
    tools: ["javascript", "nextjs", "tailwind"],
    finishedAt: "May 2024",
    github: "https://github.com/your-username/playtactic",
    preview: "https://playtactic.vercel.app",
    details: "Includes authentication using JWT and MongoDB, with an interactive user interface built using Tailwind CSS.",
    duration: "3 weeks",
    features: [
      "User authentication with JWT",
      "Points and ranking system",
      "Admin panel for questions",
      "Responsive and animated UI",
      "MongoDB-based data structure"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/Proj2.png",
    name: "My Portfolio",
    description: "My personal website to showcase projects and skills, with a modern and fully dark theme.",
    tools: ["nextjs", "tailwind"],
    finishedAt: "August 2025",
    github: "https://github.com/your-username/portfolio",
    preview: "https://ahmed-portfolio.vercel.app",
    details: "Fully responsive, includes animated texts and images, and a project slider. Built with Next.js and Tailwind.",
    duration: "1 week",
    features: [
      "Modern dark theme",
      "Animated text and project slider",
      "Fully responsive",
      "Smooth section navigation",
      "Project filtering"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/Proj3.png",
    name: "Taskify",
    description: "A personal task management app with a dashboard and drag-and-drop functionality.",
    tools: ["javascript", "nextjs", "tailwind" , "figma"],
    finishedAt: "March 2025",
    github: "https://github.com/your-username/taskify",
    preview: "https://taskify-app.vercel.app",
    details: "UI design inspired by Figma, supports adding, editing, and deleting tasks using localStorage.",
    duration: "5 days",
    features: [
      "Drag and drop tasks",
      "Add/edit/delete functionality",
      "Persistent via localStorage",
      "Figma-inspired UI",
      "Single user setup"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/Proj4.png",
    name: "Zocial",
    description: "A social media app similar to Twitter, allowing account creation, posting, and following users.",
    tools: ["javascript", "nextjs", "tailwind" , "nodejs", "mongodb"],
    finishedAt: "July 2025",
    github: "https://github.com/your-username/zocial",
    preview: "https://zocial.vercel.app",
    details: "Includes user relationships (follow/unfollow), auth system, and image storage via Cloudinary.",
    duration: "4 weeks",
    features: [
      "User authentication",
      "Follow/unfollow system",
      "Post creation and feed",
      "Profile editing",
      "Cloudinary image upload"
    ],
    status: "In Progress"
  },
  {
    img: "/Projects/Proj5.png",
    name: "Cryptova",
    description: "A crypto information app displaying real-time prices and market analysis with charts.",
    tools: ["javascript", "nextjs", "tailwind"],
    finishedAt: "February 2025",
    github: "https://github.com/your-username/cryptova",
    preview: "https://cryptova.vercel.app",
    details: "Uses real-time API from CoinGecko to display data. Includes search and categorization features.",
    duration: "1.5 weeks",
    features: [
      "Live data from CoinGecko API",
      "Interactive charts",
      "Search and category filter",
      "Dark theme",
      "Responsive design"
    ],
    status: "Completed"
  },
  {
    img: "/Projects/Proj6.png",
    name: "Fashonista",
    description: "An e-commerce store for women's clothing, featuring product filters and a shopping cart.",
    tools: ["javascript", "nextjs", "tailwind" , "figma" , "mongodb"  ],
    finishedAt: "June 2025",
    github: "https://github.com/your-username/fashonista",
    preview: "https://fashonista.vercel.app",
    details: "Attractive and responsive UI, mock payment support, and smart product recommendations.",
    duration: "2.5 weeks",
    features: [
      "Product filtering",
      "Shopping cart",
      "Product detail page",
      "Fake payment support",
      "Suggested products"
    ],
    status: "Completed"
  }
];



export const tools = [
{ name: "React", icon : <FaReact /> },
{ name: "Next.js", icon : <RiNextjsFill /> },
{ name: "Tailwind", icon : <RiTailwindCssFill /> },
{ name: "CSS",  icon : <IoLogoCss3 /> },
{ name: "Figma",  icon : <SiFigma /> },
{ name: "Javascript", icon : <FaJsSquare /> },
{ name: "Node.js",  icon : <FaNodeJs /> },
{ name: "MongoDB",  icon : <DiMongodb /> }
]

export const stats = [
{ num: 12, text: "Years of Experience" },
{ num: 25, text: "Projects Completed" },
{ num: 10, text: "Technologies Mastered" },
{ num: 200, text: "Code Commits" },
]

export const icons = [
    {
      link : "https://github.com/SluchCr7",
      Icon : FaGithub
    },
    {
      link : "https://www.linkedin.com/in/sluch07",
      Icon : FaLinkedin
    },
    {
      link : "",
      Icon : FaInstagram
    },
    {
      link : "https://www.facebook.com/ahmed.abobakr.821836/",
      Icon : FaFacebook
    }
]


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/assets/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
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