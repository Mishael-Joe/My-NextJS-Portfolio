import React from 'react'
import Header from './header/page'
import AboutMe from './aboutMe/page'
import Technologies from './technology/page'
import Services from './myServices/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'

const MainContent = () => {
  return (
    <main>
        <Header />
        <AboutMe />
        <Technologies />
        <Services />
        <Portfolio />
        <Contact />
    </main>
  )
}

export default MainContent