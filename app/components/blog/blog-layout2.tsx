import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '../elements/tag'
import { format } from 'date-fns'
interface blogProps{
    blog: Blog
}
const BlogLayoutTwo = ({blog}: blogProps) => {
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark dark:text-light'>
      <Link href={blog.url} className='col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden'>
        <Image src={blog.image!.filePath.replace("../public","")}
            placeholder='blur'
            blurDataURL={blog.image?.blurhashDataUrl}
            width={blog.image?.width}
            height={blog.image?.height}
            alt = {blog.title}
            
            className='aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500'
        
        />
      </Link>
      <div className="col-span-12 lg:col-span-8 w-full">
                
                <span className='inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm'>
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

                <span className='inline-block w-full capitalize text-dark/50 dark:text-light/50 font-semibold text-xs sm:text-base'>
                    {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
                </span>
                
               
            </div>
    </div>
  )
}

export default BlogLayoutTwo
