import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css';
const Footer=()=>{
    return(
    <div className="h">
  <hr class="h-px my-8 bg-green-300 border-0 "/>
  <p className="text-2xl text-center">Subham Singh</p>
  
          <div className="pt-2 flex  items-center justify-center gap-12  ">
          <a href="/" className="line text-sm  p-1 font-semibold">
            <span className="text-white ">Home</span>
          </a>
          <a href="/" className="line text-sm   p-1 font-semibold">
            <span className="text-white ">About</span>
          </a>
          <a href="/" className="line text-sm  p-1 font-semibold">
            <span className="text-white ">Portfolio</span>
          </a> 
          </div>

          
          <div className=" m-4 flex items-center justify-center gap-8 text-2xl ml-auto">
          <a href="https://www.linkedin.com/in/subham-singh-91b751200"  className="logo1"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn">
          <FaLinkedin/>
        </a>
    
        <a href="https://github.com/1-SubhamSingh" className="logo2"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"><FaGithub/>
          </a>
          <a href="https://www.instagram.com/risab551/"  className="logo3"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram">
            <FaInstagram/>
            </a>
            </div>


            <p className="text-center text-xs">© All rights reserved</p>
    </div>

    )
}
export default Footer