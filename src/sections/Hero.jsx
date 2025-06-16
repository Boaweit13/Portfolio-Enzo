import React from 'react'
import ComponentHeroText from '../components/ComponentHeroText'
import ComponentBackground from '../components/ComponentBackground'

function Hero() {
  return (
    <section className="flex items-start md:justify-start min-h-screen c-space">
        <ComponentHeroText/>
        <ComponentBackground/>
    </section>
  )
}

export default Hero