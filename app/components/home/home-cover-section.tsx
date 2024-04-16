import { sortBlogs } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../elements/tag'
import type { Blog } from '@/.contentlayer/generated'
import { slug } from 'github-slugger'
interface blogsProps{
    blogs: Blog[]
}
const HomeCoverSection = ({blogs}:blogsProps) => {
    const sortedBlogs = sortBlogs(blogs)
    const blog = sortedBlogs[6]
    // console.log(blog)
  return (
    <div className='w-full block-inline'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh] transition-all ease 300'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10'/>
                
            <Image src={blog.image!.filePath.replace("../public","")}
            placeholder='blur'
            blurDataURL={blog.image!.blurhashDataUrl}
            fill
            alt = {blog.title}
            priority
            
            className='w-full h-full object-center object-cover rounded-3xl z-0'/>

            <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-20 text-light'>
                
                <Tag link={`/categories/${slug(blog.tags![0])}`} name={blog.tags![0]}/>
                <Link href={blog.url} className='mt-6'>
                <h1 className='font-bold capitalize sm:text-xl text-lg md:text-3xl lg:text-4xl'>
                    <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark bg-[length:0px_6px]
                    hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size]
                    duration-700'>
                        {blog.title}
                    </span>
                </h1>
                </Link>
                
                <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
                    {blog.description}
                </p>
            </div>
    </article>
    </div>
    
  )
}

export default HomeCoverSection
