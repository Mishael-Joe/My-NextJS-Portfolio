import React from 'react'
import { Instagram, TwitterSquare, Linkedin, Github } from '../icons/icons';

const Header = () => {
  return (
    <header className="text-slate-300 px-4 font-mono pt-14 text-center container mx-auto max-w-5xl" id="Home">
      <span>Hi there!&#128075; I&apos;m </span> <br />
      <span className="md:text-4xl text-2xl font-bold text-gold-100 font-Roboto">MISHAEL JOSEPH</span><br />
      {/* <span>Front-end Developer</span> */}
  
      <div className="flex justify-center bg-blue-800">
        <div className='fixed z-40 flex gap-2 bottom-4 p-4 backdrop-blur-md hover:bg-[#0E0762] transition delay-150 ease-in-out rounded-md border border-gold-100'>
          <a href="https://www.instagram.com/mishaeljoe722/"><i className=''><Instagram /></i></a>
          {/* <a href="https://www.youtube.com/channel/UCRqtxJorYxa67VXhNMb4RMg"><WhatsappSquare /><i className=''></i></a> */}
          <a href="https://twitter.com/MishaelJoseph4"><i className=''><TwitterSquare /></i></a>
          <a href="https://www.linkedin.com/in/mishael-joseph912/"><i className=''><Linkedin /></i></a>
          <a href="https://github.com/Mishael-Joe"><i className=''><Github /></i></a>
        </div>
      </div>

      <div className="container-fluid intro__text text-center  pt-2">
        <p>A proficient web developer. My expertise is crafting and executing custom front-end pages for clients, focusing on delivering consistent outcomes for an enhanced user experience.</p>
      </div>
    </header>
  )
}

export default Header