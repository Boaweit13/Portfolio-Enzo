import React, { use } from 'react'
import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";

function ComponentBackground() {
    const {scrollYProgress} =  useScroll();

    const planetY = useTransform(
        scrollYProgress, 
        [0, 0.5], 
        ["0%", "30%"]);
    const shipY = useTransform(
        scrollYProgress, 
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
            <motion.div className=" absolute inset-0 scale-50 -z-30"
            style={{
                backgroundImage: "url('/assets/Ship-2.png')",
                backgroundPosition: "top",
                backgroundSize: "cover",
                x: shipY,
            }}/>

        </div>
    </section>
  )
}

export default ComponentBackground