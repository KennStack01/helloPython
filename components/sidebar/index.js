import React from 'react'
import Navbar from './Navbar'
import Banner from '../Banner'

const Index = () => {
  return (
    <div id="banner" className="mx-1 flex flex-col md:mx-auto">
      <Navbar />
      <Banner />
    </div>
  )
}

export default Index
