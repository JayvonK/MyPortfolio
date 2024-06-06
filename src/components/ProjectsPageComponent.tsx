import React from 'react'
import ProjectCardComponent from './ProjectCardComponent'

const ProjectsPageComponent = () => {
    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-4 mb-8 '>
            <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
                <a href='https://weather-app-rebuild-one.vercel.app/' target='_blank'>
                    <img className='rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-white' src="/images/weather.png" alt="" />
                </a>

                <div className='flex'>
                    <a className='lg:text-2xl text-xl font-bold text-white mb-2 underline hover:text-blue-500' href='https://weather-app-rebuild-one.vercel.app/' target='_blank'>Weather App</a>

                    <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                    <a href="https://github.com/JayvonK/WeatherAppRebuild" target='_blank'>
                        <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                    </a>
                </div>

                <p className='text-gray-300 lg:text-base text-sm mt-1'>A <span className='text-white font-bold'>fully responsive</span> web app that leverages the Open Weather API to display data concerning the weather.</p>
                <div className="flex justify-between mt-4">
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/nextdotjs.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/typescript.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/tailwindcss.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/vercel.svg" alt="" />
                </div>
            </div>

            {/* <ProjectCardComponent projectImg="/images/weather.png" link='https://weather-app-rebuild-one.vercel.app/' githubLink="https://github.com/JayvonK/WeatherAppRebuild" color="white" languageArray={["/images/nextdotjs.svg", "/images/typescript.svg", "/images/tailwindcss.svg", "/images/vercel.svg"]} /> */}

            <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
                <a href='https://rpsls-game-jade.vercel.app/' target='_blank'>
                    <img className='rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-purple-600' src="/images/rpsls.png" alt="" />
                </a>

                <div className='flex'>
                    <a className='lg:text-2xl text-xl font-bold text-white mb-2 underline hover:text-purple-600' href='https://rpsls-game-jade.vercel.app/' target='_blank'>RPSLS</a>

                    <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                    <a href="https://github.com/JayvonK/RPSLS-Repo" target='_blank'>
                        <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                    </a>
                </div>

                <p className='text-gray-300 lg:text-base text-sm mt-1'>A <span className='text-white font-bold'>desktop only</span> web app that simulates rock paper scissors, with the addition of lizzard and spock</p>
                <div className="flex justify-between mt-4">
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/figma.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/javascript.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/bootstrap.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/vercel.svg" alt="" />
                </div>
            </div>

            <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
                <a href='https://full-stack-strike-showdown.vercel.app/' target='_blank'>
                    <img className='rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-orange-600' src="/images/StrikeShowdown3.png" alt="" />
                </a>

                <div className='flex'>
                    <a className='lg:text-2xl text-xl text-white mb-2 font-bold underline hover:text-orange-600' href='https://full-stack-strike-showdown.vercel.app/' target='_blank'>Strike Showdown</a>

                    <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                    <a href="https://github.com/JayvonK/Full-Stack---Strike-Showdown" target='_blank'>
                        <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                    </a>
                </div>

                <p className='text-gray-300 lg:text-base text-sm mt-1'>A <span className='text-white font-bold'>fully responsive full stack web app</span> that aims to connect bowlers in a fun and entertaining way</p>
                <div className="flex justify-between mt-4">
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/nextdotjs.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/typescript.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/tailwindcss.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/dotnet.svg" alt="" />
                </div>
            </div>

            <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
                <a href='https://khuthjhamsterhotel.vercel.app/' target='_blank'>
                    <img className='rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-sky-600' src="/images/hamsterhotel.png" alt="" />
                </a>

                <div className='flex'>
                    <a className='lg:text-2xl text-xl text-white mb-2 font-bold underline hover:text-sky-600' href='https://khuthjhamsterhotel.vercel.app/' target='_blank'>Hamster Hotel</a>

                    <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                    <a href="https://github.com/JayvonK/HamsterHotel-Repo" target='_blank'>
                        <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                    </a>
                </div>

                <p className='text-gray-300 lg:text-base text-sm mt-1'>A <span className='text-white font-bold'> fully responsive static</span> web app that helped me enhance my frontend skills as a new beginner to HTML & CSS </p>
                <div className="flex justify-between mt-4">
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/html5.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/css3.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/bootstrap.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/vercel.svg" alt="" />
                </div>
            </div>


            <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
                
                <a href='https://poke-web-react.vercel.app/' target='_blank'>
                    <img className='rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-blue-700' src="/images/pokeweb.png" alt="" />
                </a>
                <div className='flex'>
                    <a className='lg:text-2xl text-xl text-white mb-2 font-bold underline hover:text-blue-700' href='https://poke-web-react.vercel.app/' target='_blank'>PokeWeb</a>

                    <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                    <a href="https://github.com/JayvonK/PokeWeb-Repo" target='_blank'>
                        <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                    </a>
                </div>
                <p className='text-gray-300 lg:text-base text-sm mt-1'>A <span className='text-white font-bold'>fully responsive web app</span> that leverages the PokeApi, to display statistics about pokemon just like a pokedex</p>
                <div className="flex justify-between mt-4">
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/react.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/typescript.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/tailwindcss.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/vercel.svg" alt="" />
                </div>
            </div>

            <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
                <a href='https://business-redesign-neon.vercel.app/' target='_blank'>
                    <img className='rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-yellow-400' src="/images/bestsandwiches.png" alt="" />
                </a>

                <div className='flex'>
                <a className='lg:text-2xl text-xl text-white mb-2 font-bold underline hover:text-yellow-400' href='https://business-redesign-neon.vercel.app/' target='_blank'>Best Sandwiches</a>

                    <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                    <a href="https://github.com/JayvonK/BestSandwichesAndSmoothies-Repo" target='_blank'>
                        <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                    </a>
                </div>
                
                <p className='text-gray-300 lg:text-base text-sm mt-1'>A <span className='text-white font-bold'>fully responsive</span> web app that was created for a local food food shop in hopes of increasing their customers</p>
                
                <div className="flex justify-between mt-4">
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/html5.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/css3.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/javascript.svg" alt="" />
                    <img className="sm:w-10 w-8 aspect-square object-cover" src="/images/bootstrap.svg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default ProjectsPageComponent
