import React from 'react'
import logo2 from "../assets/assets/kevinRushLogo.png"

import logo from "../assets/assets/ayushluthraLogo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



const NavBar = () => {
  return (
    <div >
        <nav className=' mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 item-center' >
            <img src={logo} alt="logo" className=' mx-2 w-10 h-12'/>
            </div>
            
            <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
             
              <FaLinkedin/>
              <FaGithub/>
            </div>

        </nav>
    </div>
  )
};

export default NavBar
