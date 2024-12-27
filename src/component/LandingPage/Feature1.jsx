import React from 'react'
import Automated from '../../assets/automated.png'
import Invoicing from '../../assets/invoicing.png'
import Overview from '../../assets/overview.png'

const Feature1 = () => {
  return (
    <div id='features' className='mx-2 bg-white pt-20 px-5 md:px-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:w-[90%]'>
            <div className="lg:h-[350px] md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1">
                <span className='features-gradient px-5 py-1 rounded-lg text-sm font-semibold'>
                    FEATURES
                </span>
                <div className='lg:w-[75%]'>
                    <h1 className='text-lg font-semibold md:text-2xl my-5 md:my-8'>Simplify project and financial management</h1>
                    <p>Effortlessly create new projects with customizable templates. Stay organized with task scheduling, recurring deadlines, and clear assignments. Use pre-scoping forms to gather project details upfront. Manage finances with professional invoices, payment tracking, and automated reminders for overdue accounts.</p>
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
            <div className=" md:col-span-1 lg:row-start-2 flex flex-col lg:flex-row items-center justify-between">
                <div className='w-1/2 md:w-3/4 lg:w-[40%] text-center flex flex-col items-center'>
                    <img className='w-12 lg:w-16' src={Automated} alt="" />
                    <p className='text-md font-semibold my-5 md:my-2'>Automated Project Creation</p>
                    <p className='text-sm'>Set up new projects effortlessly using  customizable templates</p>
                </div>
                <div className='w-1/2 md:w-3/4 lg:w-[40%] text-center flex flex-col items-center my-10 lg:my-0'>
                    <img className='w-12 lg:w-16' src={Invoicing} alt="" />
                    <p className='text-md font-semibold my-5 md:my-2'>Invoicing and Payments</p>
                    <p className='text-sm'>Create professional invoices, track payments, and send automated reminders for overdue accounts</p>
                </div>
            </div>
            {/* <div className="lg:h-[600px] md:w-[400px] md:h-[350px] lg:w-[600px] md:col-span-1 lg:col-start-2 lg:row-span-2">
                <img className='object-cover h-full w-full' src={Overview} alt="" />
            </div> */}
            <div className="md:col-span-1 lg:col-start-2 lg:row-span-2 w-full h-[350px] md:h-auto"
                        style={{
                            backgroundImage: `url(${Overview})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
            >
                {/* <img className='object-cover h-full w-full' src={Overview} alt="" /> */}
            </div>
        </div>
    </div>

  )
}

export default Feature1