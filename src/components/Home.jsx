import React from 'react'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'



const Home = () => {
  return (
    <div>
      <div>
      <div >
      <Header />
      <Banner />
      </div>
      <BlogPage/>
      {/* <About/> */}
      <AboutPage/>
    </div>
    </div>
  )
}

export default Home
