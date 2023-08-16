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
        <div className=' container mx-auto max-w-2xl px-4 sm:px-0'>
          <Swiper
          className=' h-fit'
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
              <div className='text-slate-300 flex gap-4 flex-col items-center justify-center'>
                <div className=' sm:max-w-sm rounded'>
                  <Image src="/swift.png" width={500} quality={100} className=' rounded' height={100}  alt="Image 1"/>
                </div>
                <div className='text-center'>
                  <h1 className='py-4'>Title</h1>
                  <div className=' flex gap-4'>
                    <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                    <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-slate-300 flex gap-4 flex-col items-center justify-center'>
                  <div className=' sm:max-w-sm rounded'>
                    <Image src="/pundit-test-img.png" width={500} quality={100} className=' rounded' height={100}  alt="Image 1"/>
                  </div>
                  <div className='text-center'>
                    <h1 className='py-4'>Title</h1>
                    <div className=' flex gap-4'>
                      <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                      <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-slate-300 flex gap-4 flex-col items-center justify-center'>
                  <div className=' sm:max-w-sm rounded'>
                    <Image src="/livingstone.png" width={500} quality={100} className=' rounded' height={100}  alt="Image 1"/>
                  </div>
                  <div className='text-center'>
                    <h1 className='py-4'>Title</h1>
                    <div className=' flex gap-4'>
                      <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                      <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='text-slate-300 flex gap-4 flex-col items-center justify-center'>
                  <div className=' sm:max-w-sm rounded'>
                    <Image src="/nextJS-portfolio.png" width={500} quality={100} className=' rounded' height={100}  alt="Image 1"/>
                  </div>
                  <div className='text-center'>
                    <h1 className='py-4'>Title</h1>
                    <div className=' flex gap-4'>
                      <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Demo</Link>
                      <Link href={'#'} className=' border p-2 rounded border-gold-100 text-gold-100'>Github</Link>
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