import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  )
}

export default App