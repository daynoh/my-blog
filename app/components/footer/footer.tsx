import React from 'react'
import { useForm } from 'react-hook-form';
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';
import Link from 'next/link';

const Footer = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);
  return (
    <footer className='mt-16 rounded 2xl bg-dark m-10 flex flex-col items-center text-light'>
        <h3 className='mt-16 font-medium text-center capitalize text-4xl px-4'>
            Interesting Stories | Updates | Guides
        </h3>
        <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
            Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
        </p>
        <form className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mr-2 ml-2'>
            <input type="email" placeholder="email" required  maxLength={80} className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border- border-b mr-2 pb-2'/>

            <input type="submit" className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-2' />
        </form>
        <div className='flex items-center mt-8'>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><LinkedinIcon className='hover:scale-110 transition-all ease duration-200'/></a>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><TwitterIcon className='hover:scale-110 transition-all ease duration-200'/></a>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><GithubIcon className='hover:scale-110 transition-all ease duration-200 fill-light'/></a>
            <a href="http://" className="w-6 h-6 mr-4 inline-block"><DribbbleIcon className='hover:scale-110 transition-all ease duration-200'/></a>
        </div>

        <div className='w-full mt-24 font-medium border-t border-solid border-light py-6 px-8 flex flex-row justify-between items-center'>
            <span className='text-center'>© 2023 CodeBucks. All rights reserved.</span>
            
            <Link href = '/sitemap.xml' className='text-center underline'> sitemap.xml </Link>

            <div>
                Made with &hearts; by <a href='#portofolio website' className='text-center underline'> Musingila </a>
            </div>
        </div>

    </footer>
  )
}

export default Footer
