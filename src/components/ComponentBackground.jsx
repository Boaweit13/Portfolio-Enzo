import React, { use } from 'react'
import { motion, useSpring } from "motion/react";
import { useScroll, useTransform } from "motion/react";

function ComponentBackground() {
    const variants = {
        hidden:{opacity: 0, x:50},
        visible:{opacity: 1, x:0},
    }
    const {scrollYProgress} =  useScroll();
    const x = useSpring(scrollYProgress, {damping:20});

    const planetY = useTransform(
        x, 
        [0, 0.5], 
        ["0%", "30%"]);
    const shipY = useTransform(
        x, 
        [0, 0.5], 
        ["0%", "-50%"]);
  return (
    <section className="absolute inset-0 bg-black/40 ">
        <div className="relative h-screen overflow-y-hidden">
            {/*Sky*/}
            <div className=" absolute inset-0 w-full h-screen -z-50"
            style={{
                backgroundImage: "url('/assets/Sky-1.jpeg')",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
            }}/>
            {/*Planet*/}
            <motion.div className=" absolute inset-0 w-full h-screen -z-40"
            style={{
                backgroundImage: "url('/assets/planet-3.png')",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: planetY,
            }}/>
            {/*ship*/}
            <motion.div className=" absolute top-1/4 inset-0 -z-30" variants={variants} initial="hidden" animate="visible" transition={{delay: 1}}
            style={{
                backgroundImage: "url('/assets/Ship-2.png')",
                backgroundPosition: "top",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                x: shipY,
            }}/>

        </div>
    </section>
  )
}

export default ComponentBackground