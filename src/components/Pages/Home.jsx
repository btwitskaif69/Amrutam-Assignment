import React from 'react'
import NavCTA from '../Home/NavCTA'
import Navbar from '../Navbar'
import Search from '../Home/Search'
import Category from '../Home/Category'
import SummerCollection from '../Home/ProductCard'
import DownloadCTA from '../Home/DownloadCTA'
import Footer from '../Home/Footer'

const Home = () => {
  return (
    <div>
        <NavCTA/>
        <Navbar/>
        <Search/>
        <Category/>
        <SummerCollection/>
        <SummerCollection/>
        <DownloadCTA/>
        <Footer/>
    </div>
  )
}

export default Home