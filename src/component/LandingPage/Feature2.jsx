import React from 'react'
import Client from '../../assets/client.png'
import Communication from '../../assets/communication.png'
import Boost from '../../assets/boost.png'
import Analytic from '../../assets/analytic.png'

const Feature2 = () => {
  return (
    <div className='mx-2 bg-white pt-20 px-5 md:px-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:w-[90%]'>
            <div className="lg:h-[350px] md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
                <span className='features-gradient px-5 py-1 rounded-lg text-sm font-semibold'>
                    FEATURES
                </span>
                <div className='lg:w-[75%]'>
                    <h1 className='text-lg font-semibold md:text-2xl my-5 md:my-8'>Enable real-time collaboration and client engagement</h1>
                    <p>Client portals offer real-time updates, feedback options, and task approval tools. Share files, gather feedback, and collaborate seamlessly within ProTrack. Centralize client interactions to ensure clear communication.</p>
                </div>
                <div className='border my-16 border-[#5740ea67] relative'>
                    <div className='flex gap-5 absolute top-[-20px] right-0'>
                        <button className='border-2 bg-[#EFF5FD] border-[#5740EA] rounded-full w-10 h-10 flex justify-center items-center'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 3L4 6L7 9" stroke="#141415" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <button className='border-2 bg-[#EFF5FD] border-[#5740EA] rounded-full w-10 h-10 flex justify-center items-center'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9L8 6L5 3" stroke="#141415" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:h-[300px] md:h-[350px] md:col-span-1 lg:col-start-2 lg:row-start-2 flex flex-col lg:flex-row items-center justify-between">
                <div className='w-1/2 md:w-3/4 lg:w-[40%] text-center flex flex-col items-center'>
                    <img className='w-12 lg:w-16' src={Client} alt="" />
                    <p className='text-md font-semibold my-5 md:my-2'>Client Portals</p>
                    <p className='text-sm'>Provide clients with real-time updates, feedback options, and task approval tools</p>
                </div>
                <div className='w-1/2 md:w-3/4 lg:w-[40%] text-center flex flex-col items-center my-10 lg:my-0'>
                    <img className='w-12 lg:w-16' src={Communication} alt="" />
                    <p className='text-md font-semibold my-5 md:my-2'>Streamlined Communication</p>
                    <p className='text-sm'>Centralize all client interactions to eliminate miscommunication</p>
                </div>
            </div>
            <div className="lg:h-[600px] md:w-[400px] md:h-[350px] lg:w-[600px] md:col-span-1 md:row-start-2 lg:col-start-1 lg:row-span-2">
                <img className='object-contain h-full w-full' src={Analytic} alt="" />
            </div>
        </div>
    </div>

  )
}

export default Feature2