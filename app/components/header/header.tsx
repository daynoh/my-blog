import Link from "next/link"
import Logo from "./logo"
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../icons"

const Header = () => {
  return (
   <header className="w-full p-4 px-10 flex items-center justify-between">
    <Logo/>
    <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center 
    fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
      <Link href='/home' className="mr-2">Home</Link>
      <Link href='/about' className="mx-2">About</Link>
      <Link href='/contact'className="mx-2">Contact</Link>
      <button>
      <SunIcon/>
      </button>

    </nav>
    <div>
      <a href="http://" className="w-6 h-6 mr-4 inline-block"><LinkedinIcon className='hover:scale-110 transition-all ease duration-200'/></a>
      <a href="http://" className="w-6 h-6 mr-4 inline-block"><TwitterIcon className='hover:scale-110 transition-all ease duration-200'/></a>
      <a href="http://" className="w-6 h-6 mr-4 inline-block"><GithubIcon className='hover:scale-110 transition-all ease duration-200'/></a>
      <a href="http://" className="w-6 h-6 mr-4 inline-block"><DribbbleIcon className='hover:scale-110 transition-all ease duration-200'/></a>
    </div>

   </header>
  )
}

export default Header
