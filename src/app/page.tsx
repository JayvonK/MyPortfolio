'use client'
import BlobComponent from "@/components/BlobComponent";
import React from "react";
import { use, useState } from "react";
import LandingPageComponent from "@/components/LandingPageComponent";
import ProjectsPageComponent from "@/components/ProjectsPageComponent";
import StarsComponent from "@/components/StarsComponent";
import ParticlesComponent from "@/components/ParticlesComponent";
import LangPageComponent from "@/components/LangPageComponent";

export default function Home() {

  const [projects, setProjects] = useState<boolean>(false);
  const [main, setMain] = useState<boolean>(true);
  const [lang, setLang] = useState<boolean>(false);

  const openProjects = () => {
    setProjects(true);
    setMain(false);
  }

  const close = () => {
    setProjects(false);
    setLang(false)
    setMain(true);
  }

  const openLang = () => {
    setLang(true);
    setMain(false);
  }

  return (
    <div className="flex justify-center relative overflow-hidden bg-black">

      {/* <img src="" className="absolute w-screen h-full z-10 object-cover top-0" /> */}
      {/* <div className="absolute w-screen h-full z-20 bg-black"></div> */}
      <ParticlesComponent />
      
      <div className="min-h-screen relative z-40 2xl:w-[1300px] xl:w-[1150px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[345px]">

        <p className="text-white font-bold text-2xl pt-8 hover:cursor-pointer hover:text-blue-500 inline-block" onClick={close}>{!main ? "Go Back" : ""}</p>

        <div className="pt-8">
          {
            projects && <ProjectsPageComponent />
          }

          {
            main && <LandingPageComponent openProjects={openProjects} openLang={openLang}/>
          }

          {
            lang && <LangPageComponent />
          }
        </div>

      </div>
      
      
    </div >

  );
}
