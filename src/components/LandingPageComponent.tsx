'use client'
import BlobComponent from "@/components/BlobComponent";
import React, { useEffect } from "react";
import { use, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const LandingPageComponent = (props: { openProjects: () => void, openLang: () => void }) => {
    const iconArr = [['/images/javascript.svg', '/images/typescript.svg', '/images/csharp.svg'], ['/images/mysql.svg', '/images/html5.svg', '/images/css3.svg']]
    const frameworkArr = [['/images/react.svg', '/images/react-native-1.svg', '/images/bootstrap.svg', '/images/tailwindcss.svg'], ['/images/unity.svg', '/images/dotnet.svg', '/images/nextdotjs.svg', '']]
    const [fadeIn, setFadeIn] = useState<string>("opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setFadeIn("opacity-100")
        }, 500)
    }, [])

    return (
        <div className={"grid xl:grid-cols-[75%_25%] mb-4"}>
            <div className="grid grid-flow-row xl:mr-4">

                <div className="rounded-lg bgCard border border-zinc-600  mb-4 sm:hidden flex justify-center ">
                    <img className="w-[80%] h-40 object-cover object-top" src="/images/Jayvon1.png" alt="" />
                </div>

                {/* Row 1 */}
                <div className="min-h-56 rounded-lg bgCard p-6 border border-zinc-600  mb-4 ">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between lg:max-w-[60%] sm:max-w-[55%]">
                            <div>
                                <p className="mb-1 font-bold text-lg text-blue-500">Hello World!</p>
                                <p className="lg:text-2xl text-xl text-gray-300 mb-8">Hi, I am <span className="font-bold text-white">Jayvon Khuth</span>, a web developer who loves enhancing their skills in software development, and hopes to one day make a huge & long lasting impact</p>
                            </div>

                            <div id="button links">
                                <a href="https://www.linkedin.com/in/jayvon-khuth-1363ab2a0/" target="_blank">
                                    <div className="py-3 px-6 border-[0.5px] bg-white  shadow-lg hover:shadow-blue-500 inline-block rounded-lg mr-5">
                                        <img className="w-6 aspect-square object-cover" src="/images/linkedin.svg" alt="" />
                                    </div>
                                </a>

                                <a href="https://github.com/JayvonK" target="_blank">
                                    <div className="py-3 px-6 bg-white border-[0.5px]  shadow-lg hover:shadow-blue-500 inline-block rounded-lg mr-5">
                                        <img className="w-6 aspect-square object-cover" src="/images/github.svg" alt="" />
                                    </div>
                                </a>

                                <a href="https://docs.google.com/document/d/1DrDMeP0BlD9Q6uYFdgPx4-UIAeSm6IovQLcJcCh6nrc/edit?usp=sharing" target="_blank">
                                    <div className="py-3 px-6 border-[0.5px] bg-white  shadow-lg hover:shadow-blue-500 inline-block rounded-lg">
                                        <img className="w-6 aspect-square object-cover" src="/images/googledocs.svg" alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="sm:block hidden">
                            <img className="aspect-square w-96 object-cover" src="/images/Jayvon1.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* About me hidden */}

                <div className="rounded-lg bgCard border border-zinc-600  p-6 mb-4 xl:hidden block">
                    <h3 className="font-bold mb-3 lg:text-2xl text-xl text-white">About Me</h3>
                    <ul className="text-gray-300 lg:text-base text-sm">
                        <li className="mb-3">I&apos;m a 18 year old web developer from Stockton, CA</li>
                        <li className="mb-3">I strive to become a full stack developer, however with my current skills I am more confident with front end development.</li>
                        <li className="mb-3">My tools of choice are:</li>
                        <ul className="list-inside list-disc lg:text-xl text-lg font-bold mb-4 text-white">
                            <li>JavaScript</li>
                            <li>React/Next.JS</li>
                            <li>Tailwind CSS</li>
                            <li>VS Code</li>
                        </ul>
                        <li>Outside of coding, I love having challenging hobbies, for example I&apos;m currently trying to get back into skateboarding</li>
                    </ul>
                </div>

                {/* Row 2 */}
                <div className="w-full md:flex">
                    <div className="md:w-[40%] sm:block hidden rounded-lg bgCard border border-zinc-600  p-6 md:mr-4 md:mb-0 mb-4">
                        <h3 className="font-bold mb-3 lg:text-2xl text-xl text-white">Contact Me</h3>
                        <p className="text-gray-300 mb-3 lg:text-base text-sm">Feel free contact me through email/number or through socials</p>
                        <div className="md:block flex justify-between">

                            <div>
                                <p className="text-white lg:text-base text-sm">Email:</p>
                                <p className="text-white font-bold mb-2 lg:text-lg text-base">jaykhuth@gmail.com</p>
                            </div>

                            <div>
                                <p className="text-white lg:text-base text-sm">Number:</p>
                                <p className="text-white font-bold mb-3 lg:text-lg text-base">2096623152</p>
                            </div>

                            <div className="sm:block hidden">

                                <div className="flex">
                                    {/* <img className="h-6 mr-2" src="/images/socialblade.svg" alt="" /> */}
                                    <p className="text-white lg:text-base text-sm mb-3">Socials:</p>
                                </div>

                                <div className="grid grid-flow-col gap-4">
                                    <a href="https://www.linkedin.com/in/jayvon-khuth-1363ab2a0/" target="_blank"><img className="w-8 h-8" src="/images/linkedin copy.svg" alt="" /></a>
                                    <a href="https://instagram.com/jayvon_khuth/" target="_blank"><img className="w-8 h-8" src="/images/instagram.svg" alt="" /></a>
                                    <a href="https://discordapp.com/users/256992176125247489" target="_blank"><img className="w-8 h-8" src="/images/discord.svg" alt="" /></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bgCard border w-full border-zinc-600  p-6">

                        <div className="flex">
                            <h3 className="font-bold mb-3 lg:text-2xl text-xl text-white">Current Project</h3>
                            <div className="relative ml-2">
                                <div className="bg-green-400 animate-[ping_2s_infinite] rounded-full h-[14px] w-[14px] absolute"></div>
                                <div className="bg-green-400 bg-opacity-85 rounded-full h-[14px] w-[14px]"></div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-4 lg:text-base text-sm">What Am I Currently Working On?</p>
                        <div className="grid sm:grid-cols-2 gap-4">

                            <div>
                                <div className="hover:cursor-pointer">
                                    <a href='https://full-stack-strike-showdown.vercel.app/' target='_blank'>
                                        <img src="/images/StrikeShowdown2.png" className="h-52 object-cover showdownBox border border-gray-500 hover:border-orange-300" alt="" />
                                    </a>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/nextdotjs.svg" alt="" />
                                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/typescript.svg" alt="" />
                                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/tailwindcss.svg" alt="" />
                                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/dotnet.svg" alt="" />
                                </div>
                            </div>

                            <div className="sm:pl-4 sm:mt-0 mt-4">
                                <h3 className="text-white lg:text-2xl text-xl font-bold mb-1"><span className="text-orange-400">Strike</span> Showdown</h3>
                                <p className="text-gray-300 mb-6 lg:text-base text-sm">Currently I am a team lead, guiding 2 other web developers to create a fullstack application aimed at the audience of bowlers, called &quot;Strike Showdown&quot;</p>
                                <button className="text-black font-semibold rounded-lg bg-white p-2 shadow-lg border hover:shadow-blue-500 animate-[bounce_2s_infinite]  " onClick={props.openProjects}>View All Projects</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="text-gray-300">
                <div className="rounded-lg bgCard border border-zinc-600  p-6 mb-4 xl:block hidden">
                    <h3 className="font-bold mb-3 lg:text-2xl text-xl text-white">About Me</h3>
                    <ul>
                        <li className="mb-3">I&apos;m a 18 year old web developer from Stockton, CA</li>
                        <li className="mb-3">I strive to become a full stack developer, however with my current skills I am more confident with front end development.</li>
                        <li className="mb-3">My tools of choice are:</li>
                        <ul className="list-inside list-disc text-xl font-bold mb-4 text-white">
                            <li>JavaScript</li>
                            <li>React/Next.JS</li>
                            <li>Tailwind CSS</li>
                            <li>VS Code</li>
                        </ul>
                        <li>Outside of coding, I love having challenging hobbies, for example I&apos;m currently trying to get back into skateboarding</li>
                    </ul>
                </div>

                <div className="grid xl:grid-cols-none sm:grid-cols-2 xl:gap-0 gap-4 xl:mt-0 mt-4">
                    <div className="rounded-lg bgCard border border-zinc-600 p-6 xl:mb-4">
                    <div className="flex justify-between">
                           <h3 className="text-xl text-white font-bold mb-4">Languages</h3> 
                           <button className="text-black font-semibold rounded-md bg-white px-2 shadow-lg border hover:shadow-blue-500 h-7 " onClick={props.openLang}>View All</button>
                        </div>

                        <div>
                            <Carousel plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}>
                                <CarouselContent>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <CarouselItem key={index} className="flex justify-between">
                                            <img className="sm:w-10 w-6 aspect-square object-cover" src={iconArr[index][0]} alt="" />
                                            <img className="sm:w-10 w-6 aspect-square object-cover" src={iconArr[index][1]} alt="" />
                                            <img className="sm:w-10 w-6 aspect-square object-cover" src={iconArr[index][2]} alt="" />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>

                    </div>

                    <div className="rounded-lg bgCard border border-zinc-600 p-6">

                        <div className="flex justify-between">
                           <h3 className="text-xl text-white font-bold mb-4">Frameworks</h3> 
                           <button className="text-black font-semibold rounded-md bg-white px-2 shadow-lg border hover:shadow-blue-500 h-7 " onClick={props.openLang}>View All</button>
                        </div>

                        <div>
                            <Carousel plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}>
                                <CarouselContent>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <CarouselItem key={index} className="flex justify-between">
                                            <img className="sm:w-10 w-6 aspect-square object-cover" src={frameworkArr[index][0]} alt="" />
                                            <img className="sm:w-10 w-6 aspect-square object-cover" src={frameworkArr[index][1]} alt="" />
                                            <img className="sm:w-10 w-6 aspect-square object-cover" src={frameworkArr[index][2]} alt="" />
                                            {frameworkArr[index][3] !== "" ? (<img className="sm:w-10 w-6 aspect-square object-cover" src={frameworkArr[index][3]} alt="" />) : (<></>)}

                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>

                    </div>
                </div>


                <div className="sm:hidden block rounded-lg bgCard border border-zinc-600  p-6 md:mr-4 md:mb-0 my-4">
                    <h3 className="font-bold mb-3 lg:text-2xl text-xl text-white">Contact Me</h3>
                    <p className="text-gray-300 mb-3 lg:text-base text-sm">Feel free contact me through email/number or through socials</p>
                    <div className="md:block flex justify-between">

                        <div>
                            <p className="text-white lg:text-base text-sm">Email:</p>
                            <p className="text-white font-bold mb-2 lg:text-lg text-base">jaykhuth@gmail.com</p>
                        </div>

                        <div>
                            <p className="text-white lg:text-base text-sm">Number:</p>
                            <p className="text-white font-bold mb-3 lg:text-lg text-base">2096623152</p>
                        </div>

                        <div className="sm:block hidden">

                            <div className="flex">
                                {/* <img className="h-6 mr-2" src="/images/socialblade.svg" alt="" /> */}
                                <p className="text-white lg:text-base text-sm mb-3">Socials:</p>
                            </div>

                            <div className="grid grid-flow-col">
                                <a href="https://www.linkedin.com/in/jayvon-khuth-1363ab2a0/" target="_blank"><img className="w-8 h-8" src="/images/linkedin copy.svg" alt="" /></a>
                                <a href="https://instagram.com/jayvon_khuth/" target="_blank"><img className="w-8 h-8" src="/images/instagram.svg" alt="" /></a>
                                <a href="https://discordapp.com/users/256992176125247489" target="_blank"><img className="w-8 h-8" src="/images/discord.svg" alt="" /></a>
                            </div>

                        </div>

                    </div>


                    <div className="sm:hidden block">
                        <div className="flex">
                            {/* <img className="h-6 mr-2" src="/images/socialblade.svg" alt="" /> */}
                            <p className="text-white lg:text-base text-sm mb-3">Socials:</p>
                        </div>

                        <div className="grid grid-flow-col">
                            <a href="https://www.linkedin.com/in/jayvon-khuth-1363ab2a0/" target="_blank"><img className="w-8 h-8" src="/images/linkedin copy.svg" alt="" /></a>
                            <a href="https://instagram.com/jayvon_khuth/" target="_blank"><img className="w-8 h-8" src="/images/instagram.svg" alt="" /></a>
                            <a href="https://discordapp.com/users/256992176125247489" target="_blank"><img className="w-8 h-8" src="/images/discord.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPageComponent
