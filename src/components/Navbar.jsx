// "use client"
// import logo from "../assets/kevinRushLogo.png";
import { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import Link from "next/link"
const links=[
  {url:"/",title: "Home"},
  {url:"/",title: "About"},
  {url:"/",title: "Portfolio"},
  {url:"/",title: "Contact"}
]
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav className="mb-10 flex items-center justify-bewtween py-6 " >
          <div className="flex  items-center gap-4 mr-auto hidden md:flex">
         {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
          
          <a href="/" className="line text-sm bg-black rounded-md p-1 font-semibold">
            <span className="text-white ">Home</span>
          </a>
          <a href="/" className="line text-sm bg-black rounded-md p-1 font-semibold">
            <span className="text-white ">About</span>
          </a>
          <a href="/" className="line text-sm bg-black rounded-md p-1 font-semibold">
            <span className="text-white ">Portfolio</span>
          </a>
          <a href="/" className="line text-sm bg-black rounded-md p-1 font-semibold">
            <span className="text-white ">Contact</span>
          </a>
          
          </div>



{/* Hamburger menu */}
           <div className="md:hidden ">
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
            onClick={()=>setOpen(!open)}>
              <div className="w-8 h-1 bg-white rounded"></div>
              <div className="w-8 h-1 bg-white rounded"></div>
              <div className="w-8 h-1 bg-white rounded"></div>
            </button>
            {
            open && 
            (
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center 
            justify-center gap-8 text-4xl">
              {links.map((link,index)=>
                (
                  <a key={index} href={link.url} 
                  className="line text-sm bg-black rounded-md p-1 font-semibold">
                      <span className="text-white ">{link.title}</span>
                    </a>
                ))
              }
            </div>
            ) }
           </div>




{/* Logos */}
          <div className="m-8 flex items-center justify-between gap-4 text-2xl ml-auto">
            {/* <button className="w-10 h-8 flex flex-col justify-between">
              
            </button> */}
          <a href="https://www.linkedin.com/in/subham-singh-91b751200" className='logo1'
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn">
          <FaLinkedin/>
        </a>
        {/* <a href="https://x.com/SubhamSingh_1" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="X">
        <FaTwitter/>
      </a> */}
        <a href="https://github.com/1-SubhamSingh" className='logo2'
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"><FaGithub/>
          </a>
          <a href="https://www.instagram.com/risab551/" className='logo3'
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram">
            <FaInstagram/>
            </a>
            </div>
            </nav>        
  );
};

export default Navbar;