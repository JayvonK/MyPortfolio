'use client'
import BlobComponent from "@/components/BlobComponent";
import React from "react";
import { use, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const [blobTop, setBlobTop] = useState<number>(0);
  const [blobLeft, setBlobLeft] = useState<number>(0);
  const [blobPosition, setBlobPosition] = useState<string>('top: 0px; left: 0px');

  const iconArr = [['/images/javascript.svg', '/images/typescript.svg', '/images/csharp.svg'], ['/images/mysql.svg', '/images/html5.svg', '/images/css3.svg']]
  const frameworkArr = [['/images/react.svg', '/images/react-native-1.svg', '/images/bootstrap.svg', '/images/tailwindcss.svg'], ['/images/unity.svg', '/images/dotnet.svg', '/images/nextdotjs.svg', '']]

  const cursorMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setTimeout(() => {
      setBlobTop(y);
      setBlobLeft(x);
    }, 250)
  }

  return (
    <div className="min-h-screen relative pt-24 py-10 bg-black" onPointerMove={(e) => cursorMove(e)}>
      <div className="flex justify-center">
        <div className="grid grid-cols-[75%_25%] w-[1500px]">
          <div className="grid grid-rows-2 mr-4">
            <div className="min-h-56 rounded-lg p-8 border-[0.8px] border-zinc-600 hover:border-blue-500">
              <div className="flex justify-between w-full">
                <div className="max-w-[60%]">
                  <p className="mb-1 text-gray-600">Hello World!</p>
                  <p className="text-2xl text-white">Hi, I am <span className="font-bold">Jayvon Khuth</span>, a web developer who loves enhancing their skills in software development, and hopes to one day make a huge & long lasting impact</p>
                </div>
                <div className="w-96">
                  <img className="aspect-square w-96 object-cover" src="/images/Jayvon1.png" alt="" />
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>


          <div className="text-white">
            <div className="rounded-lg h-[50%] border-[0.8px] border-zinc-600 hover:border-blue-500 p-8 mb-4">
              <h3 className="font-bold mb-1 text-2xl">About Me</h3>
              <ul>
                <li className="mb-2">I'm a 19 year old web developer from Stockton, CA</li>
                <li className="mb-2">I strive to become a full stack developer, however with my current skills I am more confident with front end development.</li>
                <li className="mb-2">My tools of choice are:</li>
                <ul className="list-inside list-disc text-xl font-bold">
                  <li>JavaScript</li>
                  <li>C#</li>
                  <li>React</li>
                  <li>Next.JS</li>
                  <li>Tailwind CSS</li>
                  <li>VS Code</li>
                </ul>
              </ul>
            </div>

            <div className="rounded-lg border-[0.8px] border-zinc-600 hover:border-blue-500 p-8 mb-4">
              <h3 className="text-xl font-bold mb-2">Languages:</h3>

              <div>
                <Carousel plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}>
                  <CarouselContent>
                    {Array.from({ length: 2 }).map((_, index) => (
                      <CarouselItem key={index} className="flex justify-between">
                        <img className="w-10 aspect-square object-cover" src={iconArr[index][0]} alt="" />
                        <img className="w-10 aspect-square object-cover" src={iconArr[index][1]} alt="" />
                        <img className="w-10 aspect-square object-cover" src={iconArr[index][2]} alt="" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

            </div>

            <div className="rounded-lg border-[0.8px] border-zinc-600 hover:border-blue-500 p-8">
              <h3 className="text-xl font-bold mb-2">Frameworks:</h3>

              <div>
                <Carousel plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}>
                  <CarouselContent>
                    {Array.from({ length: 2 }).map((_, index) => (
                      <CarouselItem key={index} className="flex justify-between">
                        <img className="w-10 aspect-square object-cover" src={frameworkArr[index][0]} alt="" />
                        <img className="w-10 aspect-square object-cover" src={frameworkArr[index][1]} alt="" />
                        <img className="w-10 aspect-square object-cover" src={frameworkArr[index][2]} alt="" />
                        {frameworkArr[index][3] !== "" ? (<img className="w-10 aspect-square object-cover" src={frameworkArr[index][3]} alt="" />) : (<></>)}
                        
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
