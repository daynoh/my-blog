import { allBlogs } from '@/.contentlayer/generated'
import BlogDetails from '@/app/components/blog/blog-details'
import RenderMdx from '@/app/components/blog/render-mdx'
import Tag from '@/app/components/elements/tag'
import { siteMetadata } from '@/app/utils/site-metadata'
import GithubSlugger,{ slug } from 'github-slugger'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface RouteParams{
    params:{
        slug: string
    }
}
const slugger = new GithubSlugger()

export async function generateStaticParams(){
    return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}))
}

export async function generateMetadata({params}:RouteParams){
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath == params.slug)
    if(!blog){
        return;
    }

    const publishedAt = new Date(blog.publishedAt).toISOString()
    let imageList:string[] = [siteMetadata.socialBanner]
    if(blog.image){
        if (typeof blog.image.filePath === 'string'){
            imageList = [siteMetadata.siteUrl + blog.image.filePath.replace("../public", '')];
        }else blog.image
    }
    const ogImages = imageList.map(img =>{
        return {url: img.includes('http')? img : siteMetadata.siteUrl + img }
    })
    return{
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: siteMetadata.siteUrl + blog.url,
            siteName: siteMetadata.title,
            publishedTime: publishedAt,
    
            images: ogImages,
            locale: 'en_US',
            
            },
        twitter:{
            card: 'summary_large_image',
            title: blog.title,
            description: blog.description,
            images: ogImages
        }
}}
    
export default function BlogPage({params}:RouteParams) {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath == params.slug)
    // console.log('this is toc',blog?.toc)
  return (
    <article>
        <div className='mb-8 text-center relative w-full h-[70vh] bg-dark'>
            <div className='w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2' >
                <Tag name={blog!.tags![0]} link={`/categories/${slug(blog!.tags![0])}`}
                className= 'px-6 text-sm py-2'/>
                <h1 className='inline-block mt-6 font-semibold capitalize text-light 
                text-2xl md:text-3xl lg:text-5xl leading-normal relative w-5/6'>
                    {blog?.title}
                </h1>
            </div>
            <div className='absolute top-0 left-0 right-0 h-full bg-dark/60 dark:bg-dark/40' />
                <Image src={blog!.image!.filePath.replace("../public","")}
                    placeholder='blur'
                    blurDataURL={blog!.image?.blurhashDataUrl}
                    width={blog?.image?.width}
                    height={blog!.image?.height}
                    alt = {blog!.title}
                    
                    className='aspect-square w-full h-full object-cover object-center '
                
                />
        </div>
        <BlogDetails blog={blog!} slug={params.slug}/>

        <div className='grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10'>
            <div className='col-span-12 lg:col-span-4'>
                <details className='border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg pg-4 stick top-6 max-h-[80vh] overflow-hidden overflow-y-auto' open>
                    <summary className='text-lg py-5 font-semibold capitalize cursor-pointer'>Table Of Contents</summary>
                  
                    <ul className='mt-4 font-inter text-base'>
                        
                        {
                            blog?.toc.map((heading:any) =>{
                                return (
                                    <li key={`#${heading.slug}`} className='py-1'>
                                        <a href= {`#${heading.slug}`}
                                        data-level = {heading.level}
                                        className='data-[level=two]:pl-0 data-[level=two]pt-2
                                        data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40
                                        data-[level=three]:pl-4
                                        sm:data-[level=three]:pl-6
                                        flex items-center justify-start'>
                                            {heading.level === 'three' ? <span className='flex w-1 h-1 rounded-full bg-dark mr-2 '>&nbsp;</span> : null}
                                            <span className='hover:underline'>{heading.text}</span>
                                        </a>
                                    
                                    </li>
                                )
                            })
                        }
                    </ul>
                </details>
            </div>
            
            <RenderMdx blog={blog!}/>
            
        </div>
    </article>
  )
}