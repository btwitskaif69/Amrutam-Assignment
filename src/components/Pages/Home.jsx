import React from 'react'
import NavCTA from '../Home/NavCTA'
import Navbar from '../Navbar'
import Search from '../Home/Search'
import Category from '../Home/Category'

const Home = () => {
  return (
    <div>
        <NavCTA/>
        <Navbar/>
        <Search/>
        <Category/>
    </div>
  )
}

export default Home