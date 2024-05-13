import React from 'react'
import LangCardComponent from './LangCardComponent'

const LangPageComponent = () => {
    return (
        <div>
            <h1 className='sm:text-3xl text-xl text-white w-full mb-4 font-semibold'>Programming Languages</h1>
            {/* <hr /> */}
            <div className='grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-8'>

                <LangCardComponent  level={'Strong'} img={'/images/javascript.svg'} name={'JavaScript'} fav={true} />

                <LangCardComponent  level={'Strong'} img={'/images/typescript.svg'} name={'TypeScript'} fav={false} />

                <LangCardComponent  level={'Weak'} img={'/images/csharp.svg'} name={'C#'} fav={false} />

                <LangCardComponent  level={'Weak'} img={'/images/mysql.svg'} name={'SQL'} fav={false} />

                <LangCardComponent  level={'Strong'} img={'/images/html5.svg'} name={'HTML'} fav={false} />

                <LangCardComponent  level={'Strong'} img={'/images/css3.svg'} name={'CSS'} fav={true} />

            </div>

            <h1 className='sm:text-3xl text-xl text-white w-full mb-4 font-semibold'>Technoligies/Frameworks </h1>

            <div className='grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-8'>

                <LangCardComponent  level={'Strong'} img={'/images/react.svg'} name={'React'} fav={true} />

                <LangCardComponent  level={'Weak'} img={'/images/react-native-1.svg'} name={'React Native'} fav={false} />

                <LangCardComponent  level={'Weak'} img={'/images/bootstrap.svg'} name={'Bootstrap'} fav={false} />

                <LangCardComponent  level={'Strong'} img={'/images/tailwindcss.svg'} name={'Tailwind CSS'} fav={true} />

                <LangCardComponent  level={'Weak'} img={'/images/unity.svg'} name={'Unity'} fav={false} />

                <LangCardComponent  level={'Weak'} img={'/images/dotnet.svg'} name={'.NET 7'} fav={false} />

                <LangCardComponent  level={'Strong'} img={'/images/nextdotjs.svg'} name={'Next.JS'} fav={true} />

                <LangCardComponent  level={'Weak'} img={'/images/angular.svg'} name={'Angular'} fav={false} />

            </div>

            <h1 className='sm:text-3xl text-xl text-white w-full mb-4 font-semibold'>Developer Tools </h1>

            <div className='grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-12'>

                <LangCardComponent  level={'Strong'} img={'/images/visualstudiocode.svg'} name={'VS Code'} fav={true} />

                <LangCardComponent  level={'Strong'} img={'/images/github copy.svg'} name={'Github'} fav={true} />

                <LangCardComponent  level={'Strong'} img={'/images/postman.svg'} name={'Postman API'} fav={true} />

                <LangCardComponent  level={'Weak'} img={'/images/microsoftazure.svg'} name={'Azure'} fav={false} />

                <LangCardComponent  level={'Weak'} img={'/images/vercel.svg'} name={'Vercel'} fav={true} />

                <LangCardComponent  level={'Weak'} img={'/images/sqlite.svg'} name={'SQLite'} fav={false} />

                <LangCardComponent  level={'Strong'} img={'/images/figma.svg'} name={'Figma'} fav={false} />

                <LangCardComponent  level={'Strong'} img={'/images/slack.svg'} name={'Slack'} fav={true} />

                <LangCardComponent  level={'Weak'} img={'/images/jira.svg'} name={'Jira'} fav={false} />

                <LangCardComponent  level={'Weak'} img={'/images/notion.svg'} name={'Notion'} fav={true} />

            </div>

        </ div>

    )
}

export default LangPageComponent
