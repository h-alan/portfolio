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
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>h-alan</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>Alan Han</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Student at Cornell University</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Looking to learn more about Software Engineering! My recent projects are listed down below.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/h-alan'><AiFillGithub /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/alan-han-2b7b0a23a/'><AiFillLinkedin /></a>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={profilepic} alt='' style={{ objectFit: "cover" }} />
          </div>

        </section>

        {/* Cards and Skills */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>My Interests</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Relevant Coursework: Object-Oriented Programming & Data Structures,
              <span className='text-teal-500'> Data Structures and Algorithms</span>, Functional Programming, Linear Algebra,
              <span className='text-teal-500'> Foundations of Artificial Intelligence</span>, Differential Equations</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Currently conducting research in Software Engineering related to testing and runtime verification.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-large font-medium pt-2 pb-2 dark:text-white'>Programming Languages</h3>
              <p className='py-2 dark:text-white'>These are languages I am proficient in an interested in working with</p>
              <h4 className='py-4 text-teal-600'>Languages:</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Java</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
              <p className='text-gray-800 py-1 dark:text-white'>C/C++</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-large font-medium pt-2 pb-2 dark:text-white'>Favorite Tools</h3>
              <p className='py-2 dark:text-white'>Here are some tools I`&apos;ve worked with in the past</p>
              <h4 className='py-4 text-teal-600'>Developer Tools</h4>
              <p className='text-gray-800 py-1 dark:text-white'>VSCode</p>
              <p className='text-gray-800 py-1 dark:text-white'>Docker</p>
              <p className='text-gray-800 py-1 dark:text-white'>Linux/Unix</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-large font-medium pt-2 pb-2 dark:text-white'>Front-End Development</h3>
              <p className='py-2 dark:text-white'>Frameworks I k  w for developing websites (not sure what to put here)</p>
              <h4 className='py-4 text-teal-600'>Front-End tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>React</p>
              <p className='text-gray-800 py-1 dark:text-white'>Next</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind</p>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
            <p className='text-xl py-2 leading-8 text-gray-800 dark:text-white'>
              Feel free to click on each to learn more!
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 hover:brightness-50'>
              <a target="_blank" rel="noopener noreferrer" href='https://h-alan.github.io/cook-book/'>
                <Image className='rounded-lg object-cover' src={web1} alt='' />
              </a>
            </div>
            <div className='basis-1/3 flex-1 hover:brightness-50'><Image className='rounded-lg object-cover' src={web2} alt='' /></div>
            <div className='basis-1/3 flex-1 hover:brightness-50'><Image className='rounded-lg object-cover' src={web3} alt='' /></div>
            <div className='basis-1/3 flex-1 hover:brightness-50'><Image className='rounded-lg object-cover' src={web4} alt='' /></div>
          </div>
        </section>
      </main>
    </div>
  )
}
