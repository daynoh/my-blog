import { cx } from '@/app/utils'
import Link from 'next/link'
import React from 'react'

const Category = ({link= '#', name, active,...props}:{
    link: string
    name: string
    active: boolean
   
}) => {
  return (
    <Link href = {link} className={cx('inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105',props.className,
    active? 'bg-dark text-light': 'bg-light text-dark')}>
        {name}
    </Link>
  )
}

export default Category
