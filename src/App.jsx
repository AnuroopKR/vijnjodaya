import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import AboutPage from './components/AboutPage'
const App = () => {
  return (
    <div>
      <div >
      <Header />
      <Banner />
      </div>
      {/* <About/> */}
      <AboutPage/>
    </div>
  )
}

export default App

