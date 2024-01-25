import { allBlogs } from '@/.contentlayer/generated';
import Categories from '@/app/components/blog/categories';
import { slug } from 'github-slugger';
import React from 'react'
interface RouteParams{
    params:{
        slug: string
    }
}
const CategoryPage = ({params}:RouteParams) => {
    const allCategories = ['all'];
    const blogs = allBlogs.filter((blog) =>{
        return blog.tags?.some(tag => {
            const slugified = slug(tag)
            if (!allCategories.includes(slugified)){
                allCategories.push(slugified)
            }
            if (params.slug == 'all'){
                return true
            }
            return slugified === params.slug
        })
    })
  return (
    <article>
        <h1>
            #{params.slug}
        </h1>
        <span> Discover more categories and expand your knowledge! </span>
        <Categories categories={allCategories} currentSlug={params.slug}/>
    </article>
  )
}

export default CategoryPage
