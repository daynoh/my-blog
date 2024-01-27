import ContactForm from '@/app/components/contact/contact-form'
import LottieAnimation from '@/app/components/contact/lottieAnimation'
import { siteMetadata } from '@/app/utils/site-metadata'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: `Contact me through this form or email me ${siteMetadata.email}` ,
  
}

const ContactPage = () => {
  return (
    <section className='w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light 
    flex flex-col md:flex-row items-center
    justify-center text-dark dark:text-light'>
        <div className='inline-block w-full md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light'><LottieAnimation/></div>
        <div className='full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8'>
            <h2 className='font-bold capitalize text-2xl xs:text-3xl sm:text-4xl'>let&apos;s connect!</h2>
            <ContactForm/>
        </div>
    </section>
  )
}

export default ContactPage
