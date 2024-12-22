import React from 'react'

const AboutStats = () => {
  return (
    <div className='w-[full] mx-2 bg-white pt-10 px-5 md:px-10'>
        <h1 className='text-lg font-semibold md:text-2xl md:text-center'>Struggling to Keep Up with Deadlines, Clients, and Finances?</h1>
        <p className='my-8 md:text-center'>Managing projects and finances doesn’t have to be stressful. Many professionals waste hours on disorganized workflows, lose track of client feedback, or miss payments due to manual processes. ProTrack is here to solve these challenges.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
            <div className='text-center md:col-span-1 pb-10 md:pb-0 md:pr-4'>
                <span className='flex items-end justify-center gap-3'>
                    <h1 className='text-[#5740EA] text-4xl font-bold'>30%</h1>
                    <p className='font-semibold'>time saved</p>
                </span>
                <p> Automating administrative workflows with tools like ProTrack</p>
            </div>
            <div className='text-center md:col-span-1 py-10 border-dashed border-y-2 border-[#acacae] md:border-l-2 md:border-y-0 lg:border-r-2 lg:px-4 md:pl-4'>
                <span className='flex items-end justify-center gap-3'>
                    <h1 className='text-[#5740EA] text-4xl font-bold'>15-20%</h1>
                    <p className='font-semibold'>revenue loss</p>
                </span>
                <p>Due to missed deadlines and poor client management, addressed by ProTrack’s organization tools</p>
            </div>
            <div className='text-center md:col-span-2 pt-10 md:pt-0 lg:pl-4 lg:col-span-1 lg:justify-self-center md:mt-5 lg:mt-0'>
                <span className='flex items-end justify-center gap-3'>
                    <h1 className='text-[#5740EA] text-4xl font-bold'>50%</h1>
                    <p className='font-semibold'>faster approval</p>
                </span>
                <p>Thanks to centralized collaboration portals</p>
            </div>
        </div>
    </div>
  )
}

export default AboutStats