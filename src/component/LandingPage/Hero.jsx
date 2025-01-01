import React from 'react'
import Meeting from '../../assets/meeting_mobile.png'
import Progress from '../../assets/progress_mobile.png'
import Project from '../../assets/projects_mobile.png'
import Finances from '../../assets/finances_mobile.png'
import MeetingD from '../../assets/meeting.png'
import ProgressD from '../../assets/progress.png'
import ProjectD from '../../assets/projects.png'
import FinancesD from '../../assets/finances.png'
// import HeroWallPaper from '../../assets/herowall.png'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className='text-center bg-[#5740EA] h-[500px] md:h-[700px] lg:h-screen flex flex-col gap-3 justify-center items-center md:block text-white relative lg:bg-herowall bg-no-repeat bg-center bg-90%'>
          <h1 className='text-lg md:text-xl lg:text-5xl font-semibold md:pt-36 md:mb-3 leading-9 lg:leading-[64px] lg:hidden'>Your Projects, Clients, and Finances, <br/>All in One Place</h1>
          <h3 className='text-sm lg:hidden'>Simplify your workday with protrack - Where Productivity meets profitability</h3>
          <div className='w-full hidden md:block mt-9 relative lg:hidden'>
            <div className='flex justify-between items-center bg-white p-4 rounded-lg w-3/4 lg:w-[40%] mx-auto'>
              <p className='text-gray-500 text-sm font-medium'>Get Started for free</p>
              <button className='text-white text-sm px-5 py-3 rounded-lg bg-[#5740EA] border-none'>Join Waitlist</button>
            </div>
            <img className='absolute top-[-90px] left-[40px] lg:left-[100px] w-[150px] lg:w-[250px]' src={MeetingD} alt="" />
            <img className='absolute top-[-30px] lg:top-[-90px] right-[40px] lg:right-[100px] w-[150px] lg:w-[250px]' src={ProgressD} alt="" />
            <img className='absolute top-[120px] lg:top-[200px] left-[60px] lg:left-[200px] w-[150px] lg:w-[250px]' src={ProjectD} alt="" />
            <img className='absolute top-[90px] lg:top-[200px] right-[50px] lg:right-[100px] w-[150px] lg:w-[250px]' src={FinancesD} alt="" />
          </div>

          <div className='absolute w-full h-full md:hidden'>
              <img className='absolute top-[120px] left-[30%] w-[8%]' src={Progress} alt="" />
              <img className='absolute bottom-[120px] left-[40px] w-[8%]' src={Project} alt="" />
              <img className='absolute bottom-[80px] left-[40%] w-[8%]' src={Meeting} alt="" />
              <img className='absolute bottom-[140px] right-[50px] w-[8%]' src={Finances} alt="" />
          </div>
        {/* <a href="#next" className='hidden md:flex gap-2 items-center absolute bottom-10 right-10'>
          <a className='text-gradient text-lg' href="#aboutUs">Scroll Down</a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 15L12 21L18 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a> */}
        <ScrollLink to="aboutUs" smooth={true} duration={700} className='hidden md:flex gap-2 items-center absolute bottom-10 right-10 cursor-pointer'>
        <p className='text-gradient text-lg' href="#aboutUs">Scroll Down</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6 15L12 21L18 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </ScrollLink>
    </div>
  )
}

export default Hero