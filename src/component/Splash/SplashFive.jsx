import React from 'react'
import SplashBg5 from '../../assets/splash/splash5.png'

const SplashFive = () => {
  return (
    <div className='w-[80%] h-[80%] rounded-3xl grid grid-cols-2 items-center justify-center bg-white relative'>
    <div className='px-20'>
        <h1 className='text-2xl font-bold'>Simplify Your Finances</h1>
        <p className='font-medium mt-8'>Generate financial reports, track expenses, and monitor revenue with ProTrack’s robust financial management tools</p>
    </div>
    <div className='h-[65%]'
    style={{
        backgroundImage: `url(${SplashBg5})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
    <div className='absolute top-10 w-full flex justify-center'>
        <div className='w-1/2 flex justify-center gap-1'>
            <div className='w-14 h-[6px] bg-[#E7E4FC] rounded-full'></div>
            <div className='w-14 h-[6px] bg-[#E7E4FC] rounded-full'></div>
            <div className='w-14 h-[6px] bg-[#E7E4FC] rounded-full'></div>
            <div className='w-14 h-[6px] bg-[#5740EA] rounded-full'></div>
            <div className='w-14 h-[6px] bg-[#E7E4FC] rounded-full'></div>
            <div className='w-14 h-[6px] bg-[#E7E4FC] rounded-full'></div>
            <div className='w-14 h-[6px] bg-[#E7E4FC] rounded-full'></div>
        </div>
    </div>
    <div className='w-full absolute bottom-12 flex justify-end'>
        <div className='w-1/2 flex justify-between items-center px-20'>
            <a href="" className='text-[#65758E]'>Skip</a>
            <div className='bg-[#5740EA] w-10 h-10 rounded-full flex justify-center items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L21 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M15 18L21 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
    </div>
</div>
  )
}

export default SplashFive