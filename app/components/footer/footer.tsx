import React from 'react'
import { useForm } from 'react-hook-form';
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';
import Link from 'next/link';

const Footer = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);
  return (
    <footer className='mt-16 rounded 2xl bg-dark dark:bg-accentDark/30 m-2 sm:m-10 flex flex-col items-center text-light'>
        <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
            Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light text-base sm:text-base'>
            Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
        </p>
        <form className='mt-6 w-fit sm:min-w-[384px] flex items-stretch dark:bg-dark bg-light p-1 sm:p-2 rounded mr-2 ml-2'>
            <input type="email" placeholder="email" required  maxLength={80} className='w-full dark:text-light bg-transparent text-dark focus:border-dark focus:ring-0 border- border-b mr-2 pb-2'/>

            <input type="submit" className='bg-dark  dark:bg-light dark:text-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-2' />
        </form>
        <div className='flex items-center mt-3 sm:mt-8 py-3'>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><LinkedinIcon className='hover:scale-110 transition-all ease duration-200'/></a>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><TwitterIcon className='hover:scale-110 transition-all ease duration-200'/></a>
            <a href="http://" className="w-6 h-6 mr-4 inline-block dark:fill-light"><GithubIcon className='hover:scale-110 transition-all ease duration-200 fill-dark'/></a>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><DribbbleIcon className='hover:scale-110 transition-all ease duration-200'/></a>
        </div>

        <div className='w-full sm:mt-16 md:mt-24 font-medium border-t border-solid border-light 
        py-6 px-8 flex flex-col md:flex-row justify-between items-center'>
            <span className='text-center'>© 2023 Musingila. All rights reserved.</span>
            
            <Link href = '/sitemap.xml' className='text-center underline my-4 md:my-0'> sitemap.xml </Link>

            <div>
                Made with &hearts; by <a href='#portofolio website' className='text-center underline'> Musingila </a>
            </div>
        </div>

    </footer>
  )
}

export default Footer
