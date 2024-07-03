import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-5 fixed top-0 right-0 left-0 bg-white z-10  px-8  '>
       <p className='text-xl first-letter:text-4xl text-logoColor  font-bold'>Logo.</p>
       <div className='flex items-center gap-10'>
        <p className='text-logoColor font-semibold'>Home</p>
        <p>Apartment</p>
        <p>Featured</p>
        <p>Amenities</p>
        <p>Faqs</p>
       </div>

       <p className='bg-logoColor text-white p-3 px-10 rounded-lg'>Get Started</p>
    </div>
  )
}

export default NavBar