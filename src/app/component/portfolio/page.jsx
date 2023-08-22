"use client"

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h1 className='text-xs text-slate-300 pt-20 text-center font-mono'>My past works</h1>
      <h1 className='text-gold-100 font-bold text-2xl text-center pb-4'> Portfolio</h1>
        <div className=' container mx-auto max-w-2xl lg:max-w-3xl px-4 sm:px-0'>
          <Swiper
          className=''
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            // slidesPerView={3}
            navigation
            //pagination={{ clickable: true }}
            breakpoints={{
              200: {
                  slidesPerView: 1
              },
          }}
          >
            <SwiperSlide>
              <div className='text-slate-300 flex flex-col md:flex-row gap-4 items-center justify-center'>
                <div className='sm:max-w-s rounded'>
                  <Image src="/swift.png" width={500} quality={100} className='rounded object-cover object-center md:w-full' height={100}  alt="Image 1"/>
                </div>
                <div className='flex flex-col justify-center text-center md:text-left items-center md:items-start'>
                  <h1 className='text-lg font-semibold tracking-wide'>Modern Blog website (Swift)</h1>
                  <p className='py-3'>Responsive website with adaptable UI components for SWIFT. Responsive in all device</p>
                  <div className='flex gap-4'>
                    <Link href={'https://blog-site-demo.netlify.app/#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                    <Link href={'https://github.com/Mishael-Joe/Blog-site-demo/tree/main'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='text-slate-300 flex flex-col md:flex-row gap-4 items-center justify-center'>
                  <div className=' sm:max-w-s rounded'>
                    <Image src="/pundit.png" width={500} quality={100} className='rounded object-cover object-center md:w-full' height={100}  alt="Image 1"/>
                  </div>
                  <div className='flex flex-col justify-center text-center md:text-left items-center md:items-start'>
                    <h1 className='text-lg font-semibold tracking-wide'>Responsive Website for WiSchool</h1>
                    <p className='py-3'>Beautifully designed website for WiSchool Academy. Highly adaptable and easy to navigate.</p>
                    <div className='flex gap-4'>
                      <Link href={'https://test-file-red.vercel.app/'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                      <Link href={'https://github.com/Mishael-Joe/pundit'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='text-slate-300 flex flex-col md:flex-row gap-4 items-center justify-center'>
                  <div className=' sm:max-w-s rounded'>
                    <Image src="/livingstone.png" width={500} quality={100} className='rounded object-cover object-center md:w-full' height={100}  alt="Image 1"/>
                  </div>
                  <div className='flex flex-col justify-center text-center md:text-left items-center md:items-start'>
                    <h1 className='text-lg font-semibold tracking-wide'>Beautiful Landing page for Livingstones Academy</h1>
                    <p className='py-3'>Livingstones Academy landing page with modern and responsive UI.</p>
                    <div className=' flex gap-4'>
                      <Link href={'https://livingstone-school-site.vercel.app/'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                      <Link href={'https://github.com/Mishael-Joe/Livingstone-school-site'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='text-slate-300 flex flex-col md:flex-row gap-4 items-center justify-center'>
                  <div className=' sm:max-w-s rounded'>
                    <Image src="/nextJS-portfolio.png" width={500} quality={100} className='rounded object-cover object-center md:w-full' height={100}  alt="Image 1"/>
                  </div>
                  <div className='flex flex-col justify-center text-center md:text-left items-center md:items-start'>
                    <h1 className='text-lg font-semibold tracking-wide'>My Personal Portfolio</h1>
                    <p className='py-3'>Highly adaptable and easy to navigate. Responsive in all device</p>
                    <div className='flex gap-4'>
                      {/* <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link> */}
                      <Link href={'https://github.com/Mishael-Joe/My-NextJS-Portfolio'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </section>
  )
}

export default Portfolio