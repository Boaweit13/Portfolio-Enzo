import React from 'react';
import ComponentScrambleText from './ComponentScrambleText';
import {motion} from "motion/react";

function ComponentHeroText() {
    
    const sWords = ["Developer", "Helldiver", "GOD"];
    const variants = {
        hidden:{opacity: 0, x:-50},
        visible:{opacity: 1, x:0},
    }

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium" 
            variants={variants} initial="hidden" animate="visible" transition={{delay: 1}}>
                Hello! here's <br/><span className="font-bold text-white">Enzo Boadas</span>
            </motion.h1>
            <div className="flex items-start">
                <motion.p className="text-4xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.2}}>
                    a
                </motion.p>
                <motion.div className="flex container font-bold text-white text-5xl pl-5" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.4}}>
                    <ComponentScrambleText list={sWords}/>
                </motion.div>

            </div>
        </div>
        {/* Mobile View */}
        <div className="container absolute left-1/4 flex-col c-space md:hidden">
            <motion.p className="text-4xl font-medium text-left" variants={variants} initial="hidden" animate="visible" transition={{delay: 1}}>
                Hello!  here's <br/><span className="font-bold text-white">Enzo Boadas</span>
            </motion.p>
            <div className="flex items-center justify-center">
                <motion.p className="text-2xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.2}}>
                    a
                </motion.p>
                <motion.div className="flex container font-bold text-white text-3xl pl-5" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.4}}>
                    <ComponentScrambleText list={sWords}/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default ComponentHeroText