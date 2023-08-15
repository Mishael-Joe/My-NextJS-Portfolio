import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Award, PersonPlus, Project } from '../icons/page';

const AboutMe = () => {
  return (
    <section className="about-me" id="AboutMe">
        <div className="container mx-auto text-slate-300 px-4 pt-20 max-w-6xl">
            <h1 className="text-xs text-center">Get to know me</h1>
            <h1 className="text-center pb-10 text-2xl font-bold text-gold-100">ABOUT ME</h1>
            <div className="flex flex-col md:flex-row gap-8 md:gap-0">
                <div className=" basis-2/4">
                    <Image src="/Snapchat-683490865_1.jpg" className="max-w-xs border border-gold-100 rounded-full mx-auto" width={600} height={600} alt="A picture of Mishael" />
                </div>
                <div className="basis-2/4 justify-start font-mono">
                    <p className='pb-4'>I&apos;m MISHAEL JOSEPH, a Front-end developer with experience designing and implementing custom front-end pages for clients.</p>
                    <p>My work process prioritizes user satisfaction and high-quality output. My commitment lies in achieving your desired outcome and making it a reality.</p>
                    <div className='pt-8 flex gap-4'>
                        <span className='hover:border transition ease-out delay-150 bg-[#0E0762] border-b-4 border-gold-100 rounded h-40 basis-1/3 flex flex-col items-center justify-evenly'>
                            <span><Award /></span>
                            <span>Experience</span>
                            <span>2+ years <br/> Working</span>
                        </span>
                        <span className='hover:border transition ease-out delay-150 bg-[#0E0762] border-b-4 border-gold-100 rounded h-40 basis-1/3 flex flex-col items-center justify-evenly'>
                            <span><PersonPlus /></span>
                            <span>Clients</span>
                            <span>7+ Clients </span>
                        </span>
                        <span className='hover:border transition ease-out delay-150 bg-[#0E0762] border-b-4 border-gold-100  rounded h-40 basis-1/3 flex flex-col items-center justify-evenly'>
                            <span><Project /></span>
                            <span>Projects</span>
                            <span>10+ Completed</span>
                        </span>
                    </div>
                    <div className='mt-4'>
                        <Link href={'#Contact'} className='p-2 w-32 rounded bg-blue-600 hover:border hover:border-gold-100 hover:text-gold-100'>Let&apos;s Talk</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe