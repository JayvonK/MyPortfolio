import React from 'react'

const LangCardComponent = (props: { color: string, level: string, img: string, name: string, fav: boolean }) => {
    return (
        <div className={`p-6 bgCard border relative border-${props.color} rounded-md`}>
            {props.fav && <img className='absolute top-2 right-2 sm:w-7 w-3' src="/images/heart-fill.svg" alt="" />}
            <div className='flex items-center h-full'>
                <img className='sm:w-12 w-6 aspect-square mr-4' src={props.img} alt="" />
                <h2 className='text-white sm:text-xl text-base w-full text-center'>{props.name}</h2>
            </div>
        </div>
    )
}

export default LangCardComponent
