import { cx } from '@/app/utils'
import Link from 'next/link'
import React from 'react'

const Category = ({link= '#', name, active,...props}:{
    link: string
    name: string
    active: boolean
    className?:string
   
}) => {
  return (
    <Link href = {link} className={cx('inline-block py-1 md:py-2 px-6 md:px-10 bg-dark rounded-full border-2 border-solid border-dark dark:border-light m-2 hover:scale-105',props.className,
    active ?"bg-dark text-light dark:bg-light dark:text-dark":"bg-light text-dark dark:bg-dark dark:text-light")}>
        #{name}
    </Link>
  )
}

export default Category
