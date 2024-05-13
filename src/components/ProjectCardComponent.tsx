import React from 'react'

const ProjectCardComponent = (props: { projectImg: string, link: string, githubLink: string, languageArray: string[], color: string, name: string, description: string }) => {
    const languages = {
        "next.js": "/images/nextdotjs.svg",
        "typescript": "/images/typescript.svg",
        "tailwind": "/images/tailwindcss.svg",
        "vercel": "/images/vercel.svg",
        "figma": "/images/figma.svg",
        "javascript": "/images/javascript.svg",
        "bootstrap": "/images/bootstrap.svg",
        "dotnet": "/images/dotnet.svg",
        "html": "/images/html5.svg",
        "css": "/images/css3.svg",
        "react": "/images/react.svg"
    }

    return (
        <div className='rounded-lg bgCard p-6 border border-zinc-600 '>
            <a href={props.link} target='_blank'>
                <img className={`rounded-lg mb-3 sm:shadow-lg shadow-md hover:shadow-${props.color}`} src="/images/weather.png" alt="" />
            </a>

            <div className='flex'>
                <a className={`lg:text-2xl text-xl font-bold text-gray-200 mb-3 underline hover:text-${props.color === "white" ? "blue-500" : props.color}`} href={props.link} target='_blank'>{props.name}</a>

                <p className='lg:text-2xl text-xl text-white mx-5'>|</p>

                <a href={props.githubLink} target='_blank'>
                    <img className="sm:w-8 w-6 aspect-square object-cover" src="/images/github copy.svg" alt="" />
                </a>
            </div>

            <p className='text-gray-300 lg:text-base text-sm mt-3'>{props.description}</p>
            <div className="flex justify-between mt-4">
                <img className="sm:w-10 w-8 aspect-square object-cover" src={props.languageArray[0]} alt="image of language 1" />
                <img className="sm:w-10 w-8 aspect-square object-cover" src={props.languageArray[1]} alt="image of language 2" />
                <img className="sm:w-10 w-8 aspect-square object-cover" src={props.languageArray[2]} alt="image of language 3" />
                <img className="sm:w-10 w-8 aspect-square object-cover" src={props.languageArray[3]} alt="image of language 4" />
            </div>
        </div>
    )
}

export default ProjectCardComponent
