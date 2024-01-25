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
    const blog = sortedBlogs[3]
    // console.log(blog)
  return (
    <div className='w-full block-inline'>
        <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10'/>
                
            <Image src={blog.image.filePath.replace("../public","")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            layout='fill'
            alt = {blog.title}
            
            className='w-full h-full object-center object-cover rounded-3xl z-0'/>

            <div className='w-3/4 p-16 flex flex-col items-start justify-center z-20 text-light'>
                
                <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]}/>
                <Link href={blog.url} className='mt-6'>
                <h1 className='font-bold capitalize text-4xl'>
                    <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
                    hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size]
                    duration-700'>
                        {blog.title}
                    </span>
                </h1>
                </Link>
                
                <p>
                    {blog.description}
                </p>
            </div>
    </article>
    </div>
    
  )
}

export default HomeCoverSection
