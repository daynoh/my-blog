import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import Image from 'next/image'
import Tag from '../elements/tag'
import Link from 'next/link'

interface blogProps{
    blog: Blog
}
const BlogLayoutOne = ({blog}:blogProps) => {
  return (
    <div className='group inline-block overflow-hidden rounded-xl'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10'/>
                
            <Image src={blog.image!.filePath.replace("../public","")}
            placeholder='blur'
            blurDataURL={blog.image?.blurhashDataUrl}
            width={blog.image?.width}
            height={blog.image?.height}
            alt = {blog.title}
            
            className='w-full h-full object-center object-cover rounded-xl z-0 group-hover:scale-105 transition-all duration-500' />

            <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                
                <Tag link={`/categories/${blog.tags?.[0]}`} name={blog.tags![0]}
                className= 'px-6 text-xs sm:text-sm py-1 sm:py-2 !border'/>
                <Link href={blog.url} className='mt-6'>
                <h2 className='font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light z-0
                sm:mt-4 mt-2'>
                    <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
                    hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size]
                    duration-700'>
                        {blog.title}
                    </span>
                </h2>
                </Link>
                
               
            </div>
      
    </div>
  )
}

export default BlogLayoutOne
