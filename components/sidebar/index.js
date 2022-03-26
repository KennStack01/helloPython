import React from 'react'
import Banner from '../banner'
import Navbar from './navbar'

const Index = () => {
  return (
    <div id="banner" className="mx-1 flex flex-col md:mx-auto">
      <Navbar />
      <Banner />
    </div>
  )
}

export default Index
