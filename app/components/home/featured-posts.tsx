import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import { sortBlogs } from '@/app/utils'
import BlogLayoutOne from '../blog/blog-layout1'
import BlogLayoutTwo from '../blog/blog-layout2'

interface BlogProps {
    blogs: Blog[]
}
const FeaturedPosts = ({blogs}:BlogProps) => {
    const sortedBlogs = sortBlogs(blogs)
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            
        <h2 className='w-full inline-block capitalize font-bold text-4xl'>
            Featured posts
        </h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-16'>
            <article className='col-span-1 row-span-2 relative'>
                <BlogLayoutOne blog= {sortedBlogs[5]}/>
            </article>
            <article className='col-span-1 row-span-1 relative'>
                <BlogLayoutTwo blog= {sortedBlogs[6]}/>
            </article>
            <article className='col-span-1 row-span-1 relative'>
                <BlogLayoutTwo blog = {sortedBlogs[7]}/>
            </article>

        </div>
    </section>
  )
}

export default FeaturedPosts
