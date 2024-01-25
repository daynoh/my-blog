import React from 'react'
import type { Blog } from '@/.contentlayer/generated'
import Category from './category'
import { slug } from 'github-slugger'
const Categories = ({categories, currentSlug}:{
    categories: string[]
    currentSlug: string
}) => {
  return (
    <div className='px-20 mt-10'>
        {
            categories.map(cat => <Category key={cat} link={`/categories/${cat}`} name={cat} active={currentSlug === slug(cat)}/>)
        }
    </div>
  )
}

export default Categories
