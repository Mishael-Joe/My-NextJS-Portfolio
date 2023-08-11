import React from 'react'
import Header from './header/page'
import AboutMe from './aboutMe/page'
import Technologies from './technology/page'
import Services from './myServices/page'

const MainContent = () => {
  return (
    <main>
        <Header />
        <AboutMe />
        <Technologies />
        <Services />
    </main>
  )
}

export default MainContent