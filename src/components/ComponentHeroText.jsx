import React from 'react'
import ComponentScrambleText from './ComponentScrambleText'

function ComponentHeroText() {

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className="text-4xl font-medium">
                Hello! here's Enzo
            </h1>
            <div className="flex flex-col items-start">
                <p className="text-5xl font-medium text-neutral-300">
                    a
                </p>
                <div className="text-4xl font-medium text-neutral-300">
                    <ComponentScrambleText text="Software Engineer" />
                </div>

            </div>
        </div>
        {/* Mobile View */}
    </div>
  )
}

export default ComponentHeroText