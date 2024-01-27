import { cx } from '@/app/utils'
import Link from 'next/link'
import React from 'react'

const Tag = ({link= '#', name, ...props}:{
  link:string
  name:string
  className?:string
}) => {
  return (
    <Link href = {link} className={cx('inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize\
     font-semibold border-2 border-solid border-light hover:scale-105\
     text-sm sm:text-base',props.className)}>
        {name}
    </Link>
  )
}

export default Tag
