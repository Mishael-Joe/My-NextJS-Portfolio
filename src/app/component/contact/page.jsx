"use client"

import React from 'react'
import Link from 'next/link';
import { useState } from 'react'
import { Mail, WhatsappSquare, Phone } from '../icons/page';

// action="https://formspree.io/f/mwkjwqry" method="POST"

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        TextArea: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefualt()
    }

  return (
    <section class="contact text-slate-300 px-4 md:px-0 pt-20" id="Contact">
            <div class="text-center">
                <span class="text-xs font-mono"> GET IN TOUCH </span> <br />
                <span class=" text-2xl font-bold text-gold-100">CONTACT</span>
            </div>
            <div class="container mx-auto max-w-2xl pt-10 ">
                <div className='flex gap-4 flex-col sm:flex-row justify-center'>
                    <div className=' basis-1/3'>
                        <div className=' flex flex-col gap-4'>
                            <span className='hover:bg-transparent transition ease-out delay-150 bg-[#0E0762] py-4 border border-gold-100 rounded h-40 basis-1/2 flex gap-2 px-2 items-center justify-start max-w-xs'>
                                <span><Mail /></span>
                                <div className='flex flex-col'>
                                    <span className='text-xl font-semibold font-sans'>Email</span>
                                    <Link href={"mailto:mishaeljoe55@gmail.com"} className=' font-mono text-gold-100 text-sm'>Send Email</Link>
                                </div>
                            </span>

                            <span className='hover:bg-transparent transition ease-out delay-150 bg-[#0E0762] border py-4 border-gold-100 rounded h-40 basis-1/2 flex gap-2 px-2 items-center justify-start max-w-xs'>
                                <span><Phone /></span>
                                <div>
                                    <p className=' text-xl font-semibold font-sans'>Prefer Calling?</p>
                                    <p className='font-mono'>+234 90722 988 35</p>
                                </div>
                            </span>

                            <span className='hover:bg-transparent transition ease-out delay-150 bg-[#0E0762] border py-4 border-gold-100 rounded h-40 basis-1/2 flex gap-2 px-2 items-center justify-start max-w-xs'>
                                <span><WhatsappSquare /></span>
                                <div>
                                    <p className=' text-xl font-semibold font-sans'>WhatsApp</p>
                                    <Link href={'https://wa.me/message/YBREECOXXDILG1'} className=' font-mono text-gold-100 text-sm'>Send a Message</Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className=' basis-2/3'>
                        <form onSubmit={handleSubmit}>
                            <div class="">
                                <div class="col-75">
                                    <input 
                                        type="text" 
                                        onClick={handleChange}
                                        value={formData.Name}
                                        id="name" 
                                        name="Name" 
                                        placeholder="Your name.." 
                                        className="w-full py-0.5 px-2 my-1 rounded h-16 font-mono bg-inherit mb-4 block text-gray-700 placeholder-gray-400 border border-gold-100 focus:outline-none"
                                        required 
                                    />
                                </div>

                                <div class="col-75">
                                    <input 
                                        type="email" 
                                        onClick={handleChange}
                                        value={formData.Email}
                                        id="email" 
                                        name="Email" 
                                        placeholder="Enter Email" 
                                        className="w-full py-0.5 px-2 my-1 rounded h-16 font-mono bg-inherit mb-4 block text-gray-700 placeholder-gray-400 border border-gold-100 focus:outline-none"
                                        required 
                                    />
                                </div>

                                <div class="col-75">
                                    <textarea
                                        id="subject" 
                                        name="subject"
                                        onClick={handleChange}
                                        value={formData.TextArea} 
                                        placeholder="Write something.." 
                                        className="w-full py-0.5 px-2 my-1 rounded font-mono bg-inherit mb-4 block text-gray-700 placeholder-gray-400 border border-gold-100 focus:outline-none"
                                        required 
                                    />
                                </div>

                                <button className='max-w-xs bg-blue-600/60 p-1 rounded border border-gold-100 font-mono font-semibold hover:bg-transparent hover:text-gold-100 transition ease-in-out delay-100'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact