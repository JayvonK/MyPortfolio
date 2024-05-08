'use client'
import BlobComponent from "@/components/BlobComponent";
import React from "react";
import { use, useState } from "react";
import LandingPageComponent from "@/components/LandingPageComponent";
import ProjectsPageComponent from "@/components/ProjectsPageComponent";
import StarsComponent from "@/components/StarsComponent";

export default function Home() {
  const [blobTop, setBlobTop] = useState<number>(0);
  const [blobLeft, setBlobLeft] = useState<number>(0);
  const [blobPosition, setBlobPosition] = useState<string>('top: 0px; left: 0px');
  const cursorMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setTimeout(() => {
      setBlobTop(y);
      setBlobLeft(x);
    }, 250)
  }

  const [projects, setProjects] = useState<boolean>(false);

  const openProjects = () => {
    setProjects(true);
  }

  const closeProjects = () => {
    setProjects(false);
  }

  return (
    <div className="flex justify-center relative overflow-hidden">
      <div className="stars absolute flex min-w-full h-[120%] z-30">
        <StarsComponent />
      </div>
      <img src="/images/stars.jpg" className="absolute w-screen h-full z-10 object-cover top-0" />
      <div className="absolute w-screen h-full z-20 bg-black opacity-60"></div>
      <div className="min-h-screen relative z-40 2xl:w-[1300px] xl:w-[1150px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[345px]" onPointerMove={(e) => cursorMove(e)}>

        <p className="text-white font-bold text-2xl pt-8 hover:cursor-pointer hover:text-blue-500 inline-block" onClick={closeProjects}>{projects ? "Go Back" : ""}</p>

        <div className="flex justify-center pt-8">
          {
            projects ? (<ProjectsPageComponent />) : (<LandingPageComponent openProjects={openProjects}/>)
          }
        </div>

      </div>
    </div >

  );
}
