"use client"

import React from 'react'
import Link from 'next/link';
import { useState } from 'react'
import { Mail, WhatsappSquare, Phone } from '../icons/icons';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// action="https://formspree.io/f/mwkjwqry" method="POST"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: ''
    })

    let data = {
        service_id: 'mishael_webhook',
        template_id: 'template_h4wxaem',
        public_key: 'm6F6-JUIYOnX_pucN',
    };

    const notifyOnSuccess = () => toast('Message Sent Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notifyOnFailure = () => toast('Oops! An error occurred', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    function handleChange(event) {
        const {name, value} = event.target

        setFormData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    let templateParams = {
        to_name: 'Mishael Joe',
        from_name: formData.name,
        user_email: formData.email,
        message: formData.subject,
    };

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.send(data.service_id, data.template_id, templateParams, data.public_key)
        .then((result) => {
            notifyOnSuccess();
            setFormData({
                name: '',
                email: '',
                subject: '',
            });
            console.log(result.text);
        }, (error) => {
            notifyOnFailure();
            console.log(error.text);
        });
        // console.log(formData)
    }

  return (
    <section className="contact text-slate-300 px-4 md:px-0 pt-20" id="Contact">
            <div className="text-center">
                <span className="text-xs font-mono"> GET IN TOUCH </span> <br />
                <span className="text-2xl font-bold text-gold-100">CONTACT</span>
            </div>
            <div className="container mx-auto max-w-2xl pt-10 ">
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
                                    <p className='font-mono text-gold-100'>+234 90722 988 35</p>
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
                            <div>
                                <div className="col-75">
                                    <input 
                                        type="text" 
                                        onChange={handleChange}
                                        value={formData.name}
                                        name="name" 
                                        placeholder="Your name.." 
                                        className="w-full py-0.5 px-2 my-1 rounded h-16 font-mono bg-inherit mb-4 block text-gray-100 text-lg placeholder-gray-400 border border-gold-100 focus:outline-none"
                                        required 
                                    />
                                </div>

                                <div className="col-75">
                                    <input 
                                        type="email" 
                                        onChange={handleChange}
                                        value={formData.email}
                                        name="email" 
                                        placeholder="Enter Email" 
                                        className="w-full py-0.5 px-2 my-1 rounded h-16 font-mono bg-inherit mb-4 block text-gray-100 text-lg placeholder-gray-400 border border-gold-100 focus:outline-none"
                                        required 
                                    />
                                </div>

                                <div className="col-75">
                                    <textarea
                                        type='text'
                                        name="subject"
                                        onChange={handleChange}
                                        value={formData.subject} 
                                        placeholder="Write something.." 
                                        className="w-full py-0.5 px-2 my-1 rounded font-mono bg-inherit mb-4 block text-gray-100 text-lg placeholder-gray-400 border border-gold-100 focus:outline-none"
                                        required 
                                    />
                                </div>

                                <button className='max-w-xs bg-blue-600/60 p-1 rounded border border-gold-100 font-mono font-semibold hover:bg-transparent hover:text-gold-100 transition ease-in-out delay-100'>Send Message</button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact