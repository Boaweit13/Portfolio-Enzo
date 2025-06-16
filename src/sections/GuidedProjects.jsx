import { section } from 'motion/react-client'
import React from 'react'

function GuidedProjects() {
  const projects= [
    '/assets/PG1-1.png',
    '/assets/PG2-1.png',
    '/assets/PG3-1.png',
    '/assets/PG4-1.png'
  ]

  const [project, setProject] = React.useState(projects[0])
  const projectsHandler = (index) => {
    setProject(projects[index])
  }

  return (
    <section id='projects' className="c-space section-spacing">
        <h2 className="text-heading">Guided Projects</h2>
        <div className="flex grid-default-color grid-projects mt-12">
            <div className='flex items-center p-4 flex-col md:flex-row max-w-full' >
                <div className='mb-10 md:w-1/3 flex justify-center'>
                  <ol className='flex flex-row md:flex-col '>
                    <li><button className='md:c-space m-2 flex cursor-pointer text-neutral-400 hover:text-white foucus:outline-none' onClick={() => projectsHandler(0)}>Project 1</button></li>
                    <li><button className='md:c-space m-2 flex cursor-pointer text-neutral-400 hover:text-white foucus:outline-none' onClick={() => projectsHandler(1)}>Project 2</button></li>
                    <li><button className='md:c-space m-2 flex cursor-pointer text-neutral-400 hover:text-white foucus:outline-none' onClick={() => projectsHandler(2)}>Project 3</button></li>
                    <li><button className='md:c-space m-2 flex cursor-pointer text-neutral-400 hover:text-white foucus:outline-none' onClick={() => projectsHandler(3)}>Project 4</button></li>
                  </ol>
                </div>
                <div className='justify-center max-w-full md:w-3/4 flex justify-center'>
                    <img src={project} className='w-full h-full'/>
                </div>
            </div>
        </div>

    </section>
  )
} 

export default GuidedProjects