import { useState } from 'react'
import Header from './Components/Header.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Skills from './Skills/Skills.jsx'
import Projects from './Projects/Projects.jsx'
import Experience from './Experience/Experience.jsx'
import Education from './Education/Education.jsx'
import Contact from './Contacts/Contacts.jsx'
import Footer from './Components/Footer.jsx'

// Divider Component
import StyleDivider from './Components/StyleDivider.jsx'
import Style1Divider from './Components/Style1Divider.jsx'
import Style2Divider from './Components/Style2Divider.jsx'

import './App.css'

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
      <Header/>
      <Home/>
      <StyleDivider/> {/* Divider */}
      <About/>
      <Style1Divider/> {/* Divider */}
      <Skills/>
      <Projects/>
      <Style2Divider/> {/* Divider */}
      <Experience/>
      <Style2Divider/> {/* Divider */}
      <Education/>
      <Style1Divider/> {/* Divider */}      
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
