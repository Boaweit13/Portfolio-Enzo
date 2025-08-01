import React, { useState } from 'react'
// Importing motion library for animations (https://motion.dev/docs/react-quick-start)
import {motion} from "motion/react"
import {Link} from 'react-scroll';

function Navigation(){
    return <ul className="nav-ul">
        <li className="nav-li">
            <Link className="nav-link" to='home' smooth={true} duration={300}>Home</Link>
        </li>
        <li className="nav-li">
            <Link className="nav-link" to='about' smooth={true} duration={300}>About</Link>
        </li>
        <li className="nav-li">
            <Link className="nav-link" to='projects' smooth={true} duration={300}>Projects</Link>
        </li>
    </ul>
}
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                    Enzo
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white foucus:outline-none sm:hidden">
                    <img src={isOpen? "./assets/close.svg":"./assets/menu.svg"} className="w-6 h-6"/>
                </button>
                <nav className="hidden sm:flex">
                    <Navigation/>
                </nav>
            </div>
        </div>
        {isOpen && 
            (<motion.div className="block overflow-hidden text-center sm:hidden" 
            initial={{opacity: 0, x: -10}}
            animate={{opacity: 1, x: 0}}
            style={{maxHeight: "100vh"}}
            transition={{duration: 1}}>
                <nav className="pb-5">
                    <Navigation/>
                </nav> 
            </motion.div>)}
    </div>
  )
}

export default Navbar