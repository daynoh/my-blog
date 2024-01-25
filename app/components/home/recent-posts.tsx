import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import { sortBlogs } from '@/app/utils'
import BlogLayoutOne from '../blog/blog-layout1'
import BlogLayoutTwo from '../blog/blog-layout2'
import Link from 'next/link'
import BlogLayoutThree from '../blog/blog-layout3'

interface BlogProps {
    blogs: Blog[]
}
const RecentPosts = ({blogs}:BlogProps) => {
    const sortedBlogs = sortBlogs(blogs)
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
         <div className='w-full flex justify-between'>
            <h2 className='inline-block capitalize font-bold text-4xl'>
                Recent posts
            </h2>
            <Link href = "/categories/all" className='inline-block font-medium text-accent underline
            underline-offset-2 text-lg capitalize'> view all </Link>
        
        </div>   
        <div className='grid grid-cols-3 grid-rows-2 gap-16 mt-14'>
           {
             sortedBlogs.slice(5,11).map((blog, index)=>(
            <article key={index} className='col-span-1 row-span-1 relative'><BlogLayoutThree blog= {blog}/></article>
             ))
           }

        </div>
        
    </section>
  )
}

export default RecentPosts
