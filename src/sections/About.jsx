import React from 'react'

function About() {
  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Card 1 */}
            <div className="flex grid-default-color grid-1">
                <div className='overflow-y-scroll'>
                    <h3 className='font-bold transition-colors text-white c-space '>My Objective</h3>
                    <p className='text-neutral-300 mt-10 c-space'>Learn and build experience with Information Technology and Administration. Accumulate knowledge on various topics and put it to the test, aiming to improve processes and make positive impacts on society and the environment around me.</p>
                </div>
            </div>
            {/* Card 2 */}
            <div className="flex grid-default-color grid-2">
                <div className='overflow-x-scroll'>
                    <h3 className='font-bold transition-colors text-white c-space '>Programming</h3>
                    <div className='flex flex-row'>
                        <ul className='text-neutral-300 mt-10 c-space'>
                            <li>Python</li>
                            <li>C</li>
                            <li>Java (Springboot)</li>
                            <li>HTML</li>
                        </ul>    
                        <ul className='text-neutral-300 mt-10 c-space'>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="flex grid-default-color grid-3">
                <div className='overflow-y-scroll md:overflow-y-auto'>
                    <h3 className='font-bold transition-colors text-white c-space '>Academic Experience</h3>
                    <div className='flex flex-row'>
                        <ul className='text-neutral-300 mt-10 c-space'>
                            <li>Higher Education | 2023 - 2025/2 (planned)| Unisinos
                                <ul className='text-neutral-400 mt-2'>
                                    <li>Technical degree in System analysis and development</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='text-neutral-300 mt-10 c-space'>
                            <li>Higher Education | 2021/1 - 2022/1 (Not completed) | UFRGS
                                <ul className='text-neutral-400 mt-2'>
                                    <li>Bachelor's degree in astrophysics.</li>
                                </ul>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="flex grid-default-color grid-4">
                <div className='overflow-y-scroll'>
                    <h3 className='font-bold transition-colors text-white c-space '>Professional Experience</h3>
                    <div className='flex flex-row'>
                        <ul className='text-neutral-300 mt-10 c-space'>
                            <li>Product Specialist Intern | 2023 – 02/2025| Dell Technologies
                                <ul className='text-neutral-400 mt-2'>
                                    <li>- Experience with data center operations and composition</li>
                                    <li>- Fundamentals of generative IA</li>
                                </ul>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
            {/* Card 5 */}
            <div className=" flex flex-col grid-default-color md:items-center items-start grid-5">
                <h3 className='font-bold transition-colors text-white'>Contact Information</h3>
                    <div className='flex md:flex-row flex-col overflow-y-scroll gap-10'>
                        <ul className='text-neutral-300 mt-10'>
                            <li>Email: <a className='hover:text-white hover:underline' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQQCxscrWDngTvtjRvGRPMpRrtSPJrlVZFtRSJgzZqDhgJNllRqnPHnvjFrFsftcCxJbq">enzo.boadas@gmail.com</a></li>
                            <li>Phone: (51)98448-4950</li>
                            
                        </ul>    
                        <ul className='text-neutral-300 mt-10'>
                            <li>Linkedin: <a className='hover:text-white hover:underline' href="https://www.linkedin.com/in/enzo-boadas/">My Linkedin account</a></li>
                            <li>GitHub: <a className='hover:text-white hover:underline' href="https://github.com/Boaweit13">My Github account</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default About