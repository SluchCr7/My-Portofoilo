'use client'
import Image from "next/image";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portofoilo from "./Components/Portofoilo";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { useState } from "react";
import Services from "./Components/Services";
import ProjectView from "./Components/ProjectView";
import GridOptions from "./Components/GridOptions";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [project , setProject] = useState({})
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 relative bg-Black-100">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
      <About />
      <GridOptions setIsOpen={setIsOpen}/>
      <Services/>
      <Portofoilo setProject={setProject} project={project} />
      <Reviews />
      <Contact isOpen={isOpen} setIsOpen={setIsOpen} />
      <ProjectView project={project} setProject={setProject}/>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}
