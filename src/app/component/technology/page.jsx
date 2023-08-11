import React from 'react'
import { HiBadgeCheck } from '../icons/page';

const Technologies = () => {
  return (
    <section className='px-8'>
        <h1 className='text-center pb-10 text-2xl font-bold text-gold-100 pt-20'>Technologies</h1>
        <div className="container mx-auto  text-center border max-w-screen-sm py-4 transition delay-100 ease-in-out border-gold-100 bg-[#0E0762] rounded hover:bg-transparent">
            <p className='pb-4 text-slate-300 font-mono'>I use a variety of tools and frameworks such as</p>
            <div className='flex gap-8 rounded-md items-center justify-center'>
                <div>
                    <ul className=''>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>HTML</span> </li>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>CSS</span> </li>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>JAVASCRIPT</span> </li>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>TYPRSCRIPT</span> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>React JS</span> </li>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>Next JS</span> </li>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>Bootstrap</span> </li>
                        <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <HiBadgeCheck /> </i> <span>Tailwind</span> </li>
                    </ul>
                </div>
            </div>
            <p className='pt-2 text-slate-300 font-mono'>to design outstanding web interfaces, driven by my enthusiasm for web development.</p>
        </div>
    </section>
  )
}

export default Technologies