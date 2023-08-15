"use client"

import React from 'react'
import Link from 'next/link'
import { Home, PersonFill, RiBook2Fill, Contact, TelegramPlane, GridFill, ArrowCircleDown, ImageIcon, Toolbox } from "../component/icons/page";
import { useState, useEffect } from 'react';

const BottomNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <nav className='px-8 w-full h-14 flex items-center backdrop-blur-lg fixed justify-between z-[111]'>
            <div>
                <Link href="#Home" className="font-bold text-lg text-gold-100">MISHAEL.</Link>
            </div>

            <span onClick={handleClick}> {!isOpen && (<GridFill />)} </span>
        </nav>
        {isOpen && (
            <div className='px-4 container bg-[#0E0762] border-2 border-gold-100 backdrop-blur-lg fixed bottom-0 z-50 h-52'>
            <i className=' absolute right-5' onClick={handleClick}><ArrowCircleDown /></i>
            <div className="flex py-8 justify-evenly items-center h">
                <ul className="flex flex-col h-20 gap-6">
                    <li className={`basis-1/3`}>
                        <Link href="#Home" onClick={handleClick} className='flex flex-col items-center'><Home /><span className=' font-mono text-xs text-slate-200'>HOME</span></Link>
                    </li>
                    <li className={`basis-1/3`}>
                        <Link href="#Services" onClick={handleClick} className='flex flex-col items-center'> <Toolbox /> <span className=' font-mono text-xs text-slate-200'>SERVICES</span></Link>
                    </li>
                </ul>

                <ul className="flex flex-col h-20 gap-6">
                    <li className={`basis-1/3`}>
                        <Link href="#AboutMe" onClick={handleClick} className='flex flex-col items-center'><PersonFill /> <span className=' font-mono text-xs text-slate-200'>ABOUT</span></Link>
                    </li>
                    
                    <li className={`basis-1/3`}>
                        <Link href="#Portfolio" onClick={handleClick} className='flex flex-col items-center'><ImageIcon /><span className=' font-mono text-xs text-slate-200'>PORTFOLIO</span></Link>
                    </li>
                </ul>

                <ul className="flex flex-col h-20 gap-6">
                    <li className={`basis-1/3`}>
                        <Link href="#Skills" onClick={handleClick} className='flex flex-col items-center'><RiBook2Fill /><span className=' font-mono text-xs text-slate-200'>SKILLS</span></Link>
                    </li>
                    <li className={`basis-1/3`}>
                        <Link href="#Contact" onClick={handleClick} className='flex flex-col items-center'><TelegramPlane /><span className=' font-mono text-xs text-slate-200'>CONTACT</span></Link>
                    </li>
                </ul>
            </div>
        </div>
        )}
        </>
    )
}

function ResizedNav() {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return <>{windowWidth < 640 && (<BottomNav />)}</>
}

const Nav = () => {
  return (
    <>
        <nav className='px-4 w-full hidden h-14 sm:flex z-[111] items-center backdrop-blur-lg fixed justify-between'>
            <div>
                <Link href="#Home" className="font-bold text-lg text-gold-100">MISHAEL.</Link>
            </div>

            <div className=" hidden sm:inline-block">
                <ul className="flex gap-4 text-gold-100 font-mono">
                    <li className={`hover:text-slate-300`}>
                        <Link href="#Home" className=''>HOME</Link>
                    </li>
                    <li className={`hover:text-slate-300`}>
                        <Link href="#AboutMe">ABOUT</Link>
                    </li>
                    <li className={`hover:text-slate-300`}>
                        <Link href="#Skills">SKILLS</Link>
                    </li>
                    <li className={`hover:text-slate-300`}>
                        <Link href="#Services">SERVICES</Link>
                    </li>
                    <li className={`hover:text-slate-300`}>
                        <Link href="#Portfolio">PORTFOLIO</Link>
                    </li>
                    <li className={`hover:text-slate-300`}>
                        <Link href="#Contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <ResizedNav />    
    </>
  )
}

export default Nav