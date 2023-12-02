'use client'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import profilepic from '../public/profile-pic.jpg'
import web1 from '../public/cookbook.png'
import web3 from '../public/pytest.png'
import web2 from '../public/coiny.png'
import web4 from '../public/neighborhood.png'
import { useState } from 'react'

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
                {/* Introduction and Description */}
                <section className='min-h-screen'>
                    <nav className='pt-10 mb-8 flex justify-between'>
                        <h1 className='text-xl font-burtons dark:text-white'>h-alan</h1>
                        <ul className='flex items-center'>
                            <li><a className='text-lg leading-8 text-gray-800 dark:text-white px-4 py-2 mr-8' href="#interests">Interests</a></li>
                            <li><a className='text-lg leading-8 text-gray-800 dark:text-white px-4 py-2 mr-8' href="#skills">Skills</a></li>
                            <li><a className='text-lg leading-8 text-gray-800 dark:text-white px-4 py-2 mr-12' href="#projects">Projects</a></li>
                            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' /></li>
                            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/file/d/1KGnFnvAf0XNx3Y1Ut6kunJgcPVDcWVG9/view?usp=sharing">Resume</a></li>
                        </ul>
                    </nav>
                    <div className='text-center px-10'>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>Alan Han</h2>
                        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Cornell University</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Junior majoring in Computer Science.
                            Actively researching in the field of Software Engineering and Software Testing to help developers have access to more testing tools.</p>
                    </div>
                    <div className='relative mx-auto rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96'>
                        <Image src={profilepic} alt='' style={{ objectFit: "cover" }} />
                    </div>
                    <div className='text-5xl flex justify-center gap-16 py-8 text-gray-600 dark:text-white'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/h-alan'><AiFillGithub /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/h-alan/'><AiFillLinkedin /></a>
                    </div>

                </section>

                {/* Interests */}
                <section>
                    <div className='margingap-10' id='interests'>
                        <h3 className='text-3xl py-1 dark:text-white'>My Interests</h3>
                        <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>I am currently interested in all aspects related to CS. The topic I am passionate about learning right now is the relationship between
                            <span className='text-teal-500'> hardware and software</span> through computer systems. My research includes developing better tools for data race analysis and reducing costs of current techniques.</p>
                        <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'><span className='text-teal-500'>Relevant Coursework: </span>Object-Oriented Programming & Data Structures,
                            Data Structures and Algorithms, Functional Programming, Linear Algebra,
                            Foundations of Artificial Intelligence, Differential Equations</p>
                        <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>
                            Outside of coursework I enjoy learning about open-source development, game development, and artistic design. I also love to work out and reading comics in my free time.
                        </p>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h3 className='mt-4 text-3xl py-1 dark:text-white' id='skills'>Skills</h3>
                    <div className='lg:flex gap-10'>
                        <div className='text-center shadow-lg p-10 rounded-xl mt-1 mb-10'>
                            <h3 className='text-large font-medium pt-2 pb-2 dark:text-white'>Programming Languages</h3>
                            <p className='py-2 dark:text-white'>These are languages I am proficient in an interested in working with</p>
                            <h4 className='text-teal-600'>Java</h4>
                            <p className='text-gray-800 py-1 dark:text-white'>Python</p>
                            <p className='text-gray-800 py-1 dark:text-white'>C/C++</p>
                            <p className='text-gray-800 py-1 dark:text-white'>OCaml</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl mt-1 mb-10'>
                            <h3 className='text-large font-medium pt-2 pb-2 dark:text-white'>Favorite Dev Tools</h3>
                            <p className='py-2 dark:text-white'>Here are some tools I&apos;ve love using day-to-day</p>
                            <h4 className='text-teal-600'>VSCode</h4>
                            <p className='text-gray-800 py-1 dark:text-white'>Linux/Unix</p>
                            <p className='text-gray-800 py-1 dark:text-white'>Docker</p>
                            <p className='text-gray-800 py-1 dark:text-white'>Atlassian</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl mt-1 mb-10'>
                            <h3 className='text-large font-medium pt-2 pb-2 dark:text-white'>Software Testing</h3>
                            <p className='py-2 dark:text-white'>Testing techniques used in practice to ensure high quality software</p>
                            <h4 className='text-teal-600'>Test Design</h4>
                            <p className='text-gray-800 py-1 dark:text-white'>Regression Testing</p>
                            <p className='text-gray-800 py-1 dark:text-white'>Integration Testing</p>
                            <p className='text-gray-800 py-1 dark:text-white'>Test Generation</p>
                        </div>
                    </div>
                </section>

                {/* Project Section */}
                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white' id='projects'>Projects</h3>
                        <p className='text-xl py-2 leading-8 text-gray-800 dark:text-white'>
                            Feel free to click on each to learn more!
                        </p>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2'>
                            <a target="_blank" rel="noopener noreferrer" href='https://h-alan.github.io/cook-book/'>
                                <Image className='rounded-lg hover:brightness-50' src={web1} alt='' />
                            </a>
                        </div>
                        <div className='ml-20 w-1/2'>
                            <h3 className='text-xl py-1 leading-8 text-gray-800 dark:text-white'>CookBook</h3>
                            <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>Deployed a Recipe App using React and Tailwind.
                                Implemented data storage for favorite recipes, pages for recipe instructions and restaurant recommendations.
                                Utilized the API Spoonacular to extract information for images and cooking instructions.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2'>
                            <a>
                                <Image className='rounded-lg hover:brightness-50' src={web2} alt='' />
                            </a>
                        </div>
                        <div className='ml-20 w-1/2'>
                            <h3 className='text-xl py-1 leading-8 text-gray-800 dark:text-white'>Coiny</h3>
                            <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>A simple game involving dodging arrows and collecting coins. Made in Unity complete with particle effects, scoring systems, collisions, and menus
                                Created as a workshop for a Hackathon, with associating in-depth tutorial written.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2'>
                            <a>
                                <Image className='rounded-lg hover:brightness-50' src={web3} alt='' />
                            </a>
                        </div>
                        <div className='ml-20 w-1/2'>
                            <h3 className='text-xl py-1 leading-8 text-gray-800 dark:text-white'>Inline Testing - Python</h3>
                            <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>
                                Complete entire development process for a Python Pytest plugin, including implementation, and code reviews.
                                Collaborated with 2 PhD students and an undergraduate student to implement the testing end-to-end.
                                Published as a paper at ICSE 2023: https://arxiv.org/abs/2305.13486
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2'>
                            <a>
                                <Image className='rounded-lg hover:brightness-50' src={web4} alt='' />
                            </a>
                        </div>
                        <div className='ml-20 w-1/2'>
                            <h3 className='text-xl py-1 leading-8 text-gray-800 dark:text-white'>...</h3>
                            <p className='text-md py-1 leading-8 text-gray-800 dark:text-white'>...</p>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}
