import React from 'react'

const LangCardComponent = (props: { level: string, img: string, name: string, fav: boolean }) => {
    return (
        <div className={props.level === "Strong" ? "p-6 bgCard border relative border-white rounded-md" : "p-6 bgCard border relative border-zinc-500 rounded-md"}>
            {props.fav && <img className='absolute top-2 right-2 sm:w-7 w-3' src="/images/heart-fill.svg" alt="" />}
            <div className='flex items-center h-full'>
                <img className='sm:w-12 w-6 aspect-square mr-4' src={props.img} alt="" />
                <h2 className={props.level === "Strong" ? "text-white sm:text-xl text-base w-full text-center font-semibold" : "text-white sm:text-xl text-base w-full text-center"}>{props.name}</h2>
            </div>
        </div>
    )
}

export default LangCardComponent
