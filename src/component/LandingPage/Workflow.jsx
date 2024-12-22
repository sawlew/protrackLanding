import React from 'react'
import Integration from '../../assets/integration.png'

const Workflow = () => {
  return (
    <div className='mx-2 bg-white pt-20 px-5 md:px-10 lg:flex justify-center items-center gap-3'>
        <div className='lg:w-[40%]'>
            <h1 className='text-lg font-semibold md:text-2xl'>Integrate critical workflows</h1>
            <p className='text-sm my-8'>Link Protrack to your existing tools, connect important business processes, and build more powerful applications.</p>
            <a href="#d" className='flex items-center gap-2 text-[#5740EA] text-sm font-medium'>
              <p>Explore all integrations</p>
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_691_9085)">
                <path d="M10 1.82812L15 6.82812L10 11.8281" stroke="#5740EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 6.82812H1" stroke="#5740EA" stroke-width="2" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_691_9085">
                <rect width="16" height="12" fill="white" transform="translate(0 0.828125)"/>
                </clipPath>
                </defs>
              </svg>
            </a>
        </div>

        <div className="mt-8 lg:mt-0">
            <img className='object-cover h-full w-full' src={Integration} alt="" />
        </div>
    </div>
  )
}

export default Workflow