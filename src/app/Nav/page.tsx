import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='px-8 w-full h-14 flex items-center backdrop-blur-lg fixed'>
        <div className="">
            <Link href="./index.html" className="font-bold text-lg text-gold-100 text-warning">MISHAEL.</Link>
        </div>

        <div className="collapse">
            <ul className="flex">
                <li className="menu-nav__item">
                    <a href="#home" className="menu-nav__link">HOME</a>
                </li>
                <li className="menu-nav__item">
                    <a href="#about-me" className="menu-nav__link">ABOUT ME</a>
                </li>
                <li className="menu-nav__item">
                    <a href="" className="menu-nav__link">MY PROJECTS</a>
                </li>
                <li className="menu-nav__item">
                    <a href="#contact" className="menu-nav__link">CONTACT ME</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav