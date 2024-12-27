import React from 'react'
import Stats from '../../assets/graph.png'

const AboutUs = () => {
  return (
    <div id='aboutUs' className='w-[full] mx-2 bg-white pt-10 px-5 md:px-10 lg:flex lg:flex-row-reverse justify-center items-center lg:pt-20 lg:gap-20'>
        <div className='lg:w-[30%]'>
            <div className='flex items-center gap-3 mb-5'>
                <h1 className='text-[#5B44E8] text-lg md:text-2xl font-semibold'>About Us</h1>
                <div className='border-2 border-[#5B44E8] w-[100px] h-4 rounded-lg'></div>
            </div>
            <h1 className='text-lg md:text-2xl font-semibold'>
            We are the ultimate solution for task, finance, and project management
            </h1>
            <p className='my-8'>
            ProTrack is a project and financial management platform designed to streamline task tracking, client management, financial reporting, and collaboration for service-based professionals. It serves individual users like professionals, freelancers, professionals, consultants, and small teams with features tailored to each group's needs.
            </p>
            <button className='bg-[#5B44E8] hover:bg-[#5740EABF] active:bg-[#5B44E8] px-5 py-3 text-white rounded-lg'>Learn More</button>
        </div>
        <div className='lg:w-[50%] mt-10 lg:mt-0'>
            <img className='' src={Stats} alt="" />
        </div>
    </div>
  )
}

export default AboutUs