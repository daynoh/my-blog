import React from 'react'
const SkillList = [
    "next.js",
    "tailwind css",
    "figma",
    "javaScript",
    "web design",
    "Gatsby.js",
    "strapi",
    "firebase",
    "generative AI",
    "wireframing",
    "SEO",
    "framer motion",
    "sanity",
  ];
  
const Skills = () => {
  return (
    <section className='w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light text-dark dark:text-light'>
        <span className='font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark'>I&apos;m comfortable in...</span>
        <ul className='flex flex-wrap mt-8 justify-center xs:justify-start'>
            {
                SkillList.map((item, index) =>{
                    return <li key={index} className='font-semibold inline-block capitalize md:text-2xl sm:text-xl xs:text-lg text-base
                    lg:py-5 sm:py-4 xs:py-3 py-2
                    px-4 xs:px-6 lg:px-12 border-2 border-solid border-dark  dark:border-light rounded mr-3 xs:mr-4 md:mr-6 mb-3 
                    dark:font-normal xs:mb-4 md:mb-6 hover:scale-105 transition-all ease direction-200
                    cursor-pointer'>{item}</li>
                })
            }
        </ul>
    </section>
  )
}

export default Skills
