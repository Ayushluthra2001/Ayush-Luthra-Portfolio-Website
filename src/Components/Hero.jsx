import React from 'react'
import {HERO_CONTENT} from "../assets/constants"
import profilepicture1  from "../assets/assets/profilepicture1.jpg"
import profilepicture2  from "../assets/assets/profilepicture2.jpg"
import profilepicture3  from "../assets/assets/profilepicture3.jpg"
import profilepicture4  from "../assets/assets/profilepicture4.png"
import profilepicture5  from "../assets/assets/profilepicture4-1.png"
import profilepicture6 from "../assets/assets/profilepicture6.png"
import profilePic from "../assets/assets/kevinRushProfile.jpg"

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Ayush Luthra</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </span>

                        <p className='my-2 max-w-xl py-6 font-light  tracking-tighter'>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className=" w-full h-7  lg:w-1/2 lg:p-8">
                    <div className='flex justify-center'>
                        <img src={profilePic} alt="Profile Picture"  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
