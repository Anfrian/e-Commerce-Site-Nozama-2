import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
        <Announcement></Announcement>
        <NavBar></NavBar>
        <Slider></Slider>
        <Categories></Categories>
    </div>
  )
}

export default Home