import React from 'react'
import ComponentHeroText from '../components/ComponentHeroText'
import ComponentBackground from '../components/ComponentBackground'

function Hero() {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <ComponentHeroText/>
        <ComponentBackground/>
    </section>
  )
}

export default Hero