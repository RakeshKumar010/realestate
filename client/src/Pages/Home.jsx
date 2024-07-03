import React from 'react'
import NavBar from '../components/global/NavBar'
import Header from '../components/home/Header'
import Featured from '../components/home/Featured'
import Amenities from '../components/home/Amenities'
import Faqs from '../components/Faqs'
import Footer from '../components/global/Footer'

const Home = () => {
  return (
    <div className=''>
    <NavBar/>
        <Header/>
       
        <Featured/>
        <Amenities/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home