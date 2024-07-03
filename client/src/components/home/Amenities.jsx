import React from 'react'
import { FaCar, FaHome, FaStethoscope, FaSwimmingPool } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import { MdBed, MdOutlineSecurity } from 'react-icons/md'
import { TbSoccerField } from 'react-icons/tb'

const Amenities = () => {
    const data =[
        {
            title:'Parking Space',
            icon: <FaCar className='text-5xl text-logoColor'/>
        },
        {
            title:'Swinning Poll',
            icon: <FaSwimmingPool className='text-5xl text-logoColor'/>
        },
        {
            title:'Private Security',
            icon: <MdOutlineSecurity className='text-5xl text-logoColor'/>
        },
        {
            title:'Mediacal Center',
            icon: <FaStethoscope className='text-5xl text-logoColor'/>
        },
        {
            title:'Library Area',
            icon: <IoLibrary className='text-5xl text-logoColor'/>
        },
        {
            title:'King Size Beds',
            icon: <MdBed className='text-5xl text-logoColor'/>
        },
        {
            title:'Smart Home',
            icon: <FaHome className='text-5xl text-logoColor'/>
        },
        {
            title:'Kids Playland',
            icon: <TbSoccerField className='text-5xl text-logoColor'/>
        },
    ]
  return (
    <div className='bg-[#f3f7fa] py-16 px-10 '>
        <div className='flex flex-col justify-center items-center text-center  '>

        <p className='text-logoColor underline text-xl font-bold'>Amenities</p>
   
        <p className="text-4xl font-semibold text-center">Featured Listings</p>
        </div>
        <div className='flex flex-wrap lg:px-32 justify-center gap-10 my-10'>
            {data.map(({icon,title})=>{
                return(<div className='flex flex-col gap-3 bg-white rounded-xl items-center text-center justify-center w-52 h-52 shadow-lg'>
                    <div className='bg-[#f3f7fa] flex items-center justify-center h-20 w-20 rounded-full p-1'>
                       {icon}
                    </div>
                    <p className='font-bold text-gray-600 text-lg'>{title}</p>
    
                </div>)
            })}

        </div>
    </div>
  )
}

export default Amenities