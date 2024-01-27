'use client'

import Link from "next/link"
import Logo from "./logo"
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../icons"
import { siteMetadata } from "@/app/utils/site-metadata"
import UseThemeSwitch from "../hooks/useThemesSwitch"
import { useState } from "react"



const Header = () => {

  const [mode, setMode] = UseThemeSwitch()
  const [click, setClick] = useState(false)
  const toggle = () =>{
    setClick(!click)
  }
  return (
   <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
    <Logo/>
    <button onClick={toggle}  className="inline-block sm:hidden z-50">
      <div className="w-6 cursor-pointer transition-all ease duration-300">
        <div className="relative">
          <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration 200"
          style={{
            transform: click ? "rotate(-45deg) translateY(0)": "rotate(0deg) translateY(6px)"
          }}>&nbsp;</span>
          <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration 200"
          style={{
            opacity: click ? 0: 1
          }}>&nbsp;</span>
          <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration 200"
          style={{
            transform: click ? "rotate(45deg) translateY(0)": "rotate(0deg) translateY(-6px)"
          }}>&nbsp;</span>
        </div>
      </div>
    </button>
    <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize 
    flex sm:hidden items-center 
    fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
    transition-all ease 300"
    style={{
      top: click ? "1rem": "-5rem"
    }}>
      <Link href='/' className="mr-2">Home</Link>
      <Link href='/about' className="mx-2">About</Link>
      <Link href='/contact'className="mx-2">Contact</Link>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")} >
      {
          mode === "light"? <MoonIcon className="pl-2"/>: <SunIcon className="pl-2"/>
        }
      
      </button>

    </nav>

    <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize hidden sm:flex items-center 
    fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
      <Link href='/' className="mr-2">Home</Link>
      <Link href='/about' className="mx-2">About</Link>
      <Link href='/contact'className="mx-2">Contact</Link>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")} >
        {
          mode === "light"? <MoonIcon className="pl-2"/>: <SunIcon className="pl-2"/>
        }
    
      </button>

    </nav>
    <div className="hidden sm:flex items-center ">
      <a href={siteMetadata.linkedin} className="w-6 h-6 mr-4 inline-block"><LinkedinIcon className='hover:scale-110 transition-all ease duration-200'/></a>
      <a href={siteMetadata.twitter} className="w-6 h-6 mr-4 inline-block"><TwitterIcon className='hover:scale-110 transition-all ease duration-200'/></a>
      <a href={siteMetadata.github} className="w-6 h-6 mr-4 inline-block dark:fill-light"><GithubIcon className='hover:scale-110 transition-all ease duration-200'/></a>
      <a href={siteMetadata.dribbble} className="w-6 h-6 mr-4 inline-block"><DribbbleIcon className='hover:scale-110 transition-all ease duration-200'/></a>
    </div>

   </header>
  )
}

export default Header
