import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import Category from './category'
import { slug } from 'github-slugger'
const Categories = ({categories, currentSlug}:{
    categories: string[]
    currentSlug: string
}) => {
  return (
    <div className='px-0 md:px-10 sxl:px-20  mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-center
    flex-wrap font-medium mx-10'>
        {
            categories.map(cat => <Category key={cat} link={`/categories/${cat}`} name={cat} active={currentSlug === slug(cat)}/>)
        }
    </div>
  )
}

export default Categories
