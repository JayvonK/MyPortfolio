'use client'
import React from "react";
import { use, useState } from "react";
import LandingPageComponent from "@/components/LandingPageComponent";
import ProjectsPageComponent from "@/components/ProjectsPageComponent";
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

      <div className="min-h-screen relative z-40 2xl:w-[1300px] xl:w-[1150px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[345px] flex flex-col justify-center">

        {!main && <button className="text-black sm:text-2xl text-lg font-semibold rounded-lg bg-white p-2 shadow-lg border hover:shadow-blue-500 mt-8 sm:w-36 w-28" onClick={close}>Go Back</button>}

        <div className="pt-8">
          {
            main && <LandingPageComponent openProjects={openProjects} openLang={openLang} />
          }

          {
            projects && <ProjectsPageComponent />
          }

          {
            lang && <LangPageComponent />
          }
        </div>

      </div>


    </div >

  );
}
