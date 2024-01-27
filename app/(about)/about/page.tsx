import React from 'react'
import AboutCoverSection from '../../components/about/about-cover-section'
import Skills from '../../components/about/skills'
import Link from 'next/link'
import { Metadata } from 'next'
import { siteMetadata } from '@/app/utils/site-metadata'

export const metadata: Metadata = {
  title: 'Get to know me',
  description: `Here are some details about me.` ,
  
}
const AboutPage = () => {
  return (
    <>
      <AboutCoverSection/>
      <Skills/>
      <h2 className='mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light'>
      Have a project in mind? Reach out to me 📞 from <Link href='/contact' className='!underline underline-offset-2'>here </Link>and let&apos;s make it happen.
      </h2>
    </>
  )
}

export default AboutPage
