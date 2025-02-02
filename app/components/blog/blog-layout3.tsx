import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '../elements/tag'
import { format } from 'date-fns'
interface blogProps{
    blog: Blog
}
const BlogLayoutThree = ({blog}: blogProps) => {
  return (
    <div className='group flex flex-col items-center text-dark dark:text-light'>
      <Link href={blog.url} className=' h-full rounded-xl overflow-hidden'>
        <Image src={blog.image!.filePath.replace("../public","")}
            placeholder='blur'
            blurDataURL={blog.image?.blurhashDataUrl}
            width={blog.image?.width}
            height={blog.image?.height}
            alt = {blog.title}
            
            className='aspect-{4/3} w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500'
        
        />
      </Link>
      <div className="flex flex-col mt-4">
                
                <span className='uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm'>
                    {blog.tags?.[0]}
                </span>
                <Link href={blog.url} className='inline-block my-1'>
                <h2 className='font-semibold capitalize text-base sm:text-lg'>
                    <span className='bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent dark:to-accentDark bg-[length:0px_6px]
                    hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size]
                    duration-500'>
                        {blog.title}
                    </span>
                </h2>
                </Link>

                <span className='capitalize text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base'>
                    {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
                </span>
                
               
            </div>
    </div>
  )
}

export default BlogLayoutThree
