import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import GuidedProjects from './sections/GuidedProjects'

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero/>
      <About/>
      <GuidedProjects/>
    </div>
  )
}

export default App