import React from 'react'
import { BiBadgeCheck } from '../icons/page';

const Services = () => {
  return (
    <section className="my-services">

        <div className="container mx-auto px-8 md:px-0 pt-20">

            <h2 className="text-center text-slate-300 text-xs">What I offer</h2>

            <h1 className='text-xl font-bold text-gold-100 text-center pb-6'>MY SERVICES</h1>

            <div className="flex gap-4 flex-col md:flex-row text-slate-300 font-mono">

                <div className="hover:border transition ease-out delay-150 bg-[#0E0762] border-b-4 border-gold-100 rounded h-52 basis-1/2">

                    <div className="text-center p-4">
                        <h3 className="card-title">Responsive Design</h3>
                        <div className=' container mx-auto max-w-xs'>
                            <div>
                                <ul className=''>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Secure and dependable</span> </li>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Easy Navigation</span> </li>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Responsive in all devices</span> </li>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Highly scalable</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hover:border transition ease-out delay-150 bg-[#0E0762] border-b-4 border-gold-100 rounded h-52 basis-1/2">
                    <div className="text-center p-4">
                        <h3 className="card-title">Content Creation</h3>
                        <div className=' container mx-auto max-w-xs'>
                            <div>
                                <ul className=''>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Blogs</span> </li>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Educational Websites</span> </li>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Social Medial Updates</span> </li>
                                    <li className="flex gap-4 text-slate-300 font-mono py-2"> <i> <BiBadgeCheck /> </i> <span>Highly scalable</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services