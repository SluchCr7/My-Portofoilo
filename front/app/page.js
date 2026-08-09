import dynamic from 'next/dynamic'
import Hero from "./Components/Hero";
import ScrollProgress from "./Components/ScrollProgress"; // مكون منفصل للأنيميشن والـ scroll

// استيراد المكونات البعيدة عن الشاشة الأولى بـ Dynamic import لتسريع التحميل
const About = dynamic(() => import("./Components/About"));
const GridOptions = dynamic(() => import("./Components/GridOptions"));
const Services = dynamic(() => import("./Components/Services"));
const Experience = dynamic(() => import("./Components/Experience"));
const Portfolio = dynamic(() => import("./Components/Portofoilo"));
const Reviews = dynamic(() => import("./Components/Reviews"));
const Footer = dynamic(() => import("./Components/Footer"));
// const Contact = dynamic(() => import("./Components/Contact"));
// const ProjectView = dynamic(() => import("./Components/ProjectView"));

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden w-full bg-[#000319]">
      {/* شريط التقدم */}
      <ScrollProgress />

      {/* Hero (يتحمل فوراً لأنه ظاهر للمستخدم أول ما يفتح الموقع) */}
      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full max-w-7xl"><About /></section>
      <section className="w-full"><GridOptions /></section>
      <section className="w-full max-w-7xl"><Services /></section>
      <section className="w-full max-w-7xl"><Experience /></section>
      <section className="w-full max-w-7xl"><Portfolio /></section>
      <section className="w-full"><Reviews /></section>
      <section className="w-full"><Footer /></section>
    </main>
  );
}