import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <div className='fixed top-0 w-full z-40 flex md:flex-row-reverse justify-between items-center px-4 py-6 md:py-3 bg-white font-[Poppins]'>
      <div className='hidden md:block'>
        <button className='hover:bg-[#5740EABF] active:bg-[#5B44E8] bg-[#5B44E8] px-10 py-3 rounded-lg text-white border-none'>Join Waitlist</button>
      </div>
      <nav className='hidden lg:block'>
        <ul className='flex gap-5 font-medium'>
          <li className='cursor-pointer hover:font-bold hover:text-[#5740EA]'>
            <ScrollLink to="hero" smooth={true} duration={700}>Home</ScrollLink>
          </li>
          <li className='cursor-pointer hover:font-bold hover:text-[#5740EA]'>
            <ScrollLink to="features" smooth={true} duration={700}>Features</ScrollLink>
          </li>
          <li className='cursor-pointer hover:font-bold hover:text-[#5740EA]'>
            <ScrollLink to="integration" smooth={true} duration={700}>Integration</ScrollLink>
          </li>
          <li className='cursor-pointer hover:font-bold hover:text-[#5740EA]'>
            <ScrollLink to="testimonials" smooth={true} duration={700}>Testimonials</ScrollLink>
          </li>
        </ul>
      </nav>
      <div className=''>
        <p className='font-bold text-xl md:text-2xl'>ProTrack</p>
      </div>
      <div className='md:hidden'>
        <button className='hover:bg-[#5740EABF] active:bg-[#5B44E8] bg-[#5B44E8] px-5 py-2 text-xs rounded-lg text-white border-none'>Use App</button>
      </div>
      <div  className='flex gap-3 md:gap-0 md:flex-row-reverse lg:hidden'>
        <span className='md:hidden'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_691_9470)">
          <rect width="24" height="24" fill="#EFF5FD"/>
          <path d="M12 21.75C11.2044 21.75 10.4413 21.4339 9.87868 20.8713C9.31607 20.3087 9 19.5456 9 18.75C9 18.5511 9.07902 18.3603 9.21967 18.2197C9.36032 18.079 9.55109 18 9.75 18H14.25C14.4489 18 14.6397 18.079 14.7803 18.2197C14.921 18.3603 15 18.5511 15 18.75C15 19.5456 14.6839 20.3087 14.1213 20.8713C13.5587 21.4339 12.7956 21.75 12 21.75ZM10.7025 19.5C10.8344 19.7273 11.0236 19.916 11.2513 20.0471C11.479 20.1783 11.7372 20.2473 12 20.2473C12.2628 20.2473 12.521 20.1783 12.7487 20.0471C12.9764 19.916 13.1656 19.7273 13.2975 19.5H10.7025Z" fill="#283344"/>
          <path d="M13.5 5.25H10.5C10.3011 5.25 10.1103 5.17098 9.96967 5.03033C9.82902 4.88968 9.75 4.69891 9.75 4.5C9.75 3.90326 9.98705 3.33097 10.409 2.90901C10.831 2.48705 11.4033 2.25 12 2.25C12.5967 2.25 13.169 2.48705 13.591 2.90901C14.0129 3.33097 14.25 3.90326 14.25 4.5C14.25 4.69891 14.171 4.88968 14.0303 5.03033C13.8897 5.17098 13.6989 5.25 13.5 5.25Z" fill="#283344"/>
          <path d="M20.25 19.5H3.75C3.55109 19.5 3.36032 19.421 3.21967 19.2803C3.07902 19.1397 3 18.9489 3 18.75C2.99934 17.903 3.20363 17.0684 3.59543 16.3175C3.98723 15.5665 4.5549 14.9215 5.25 14.4375V10.5C5.24996 8.71756 5.95494 7.00745 7.21109 5.74287C8.46725 4.47828 10.1726 3.76188 11.955 3.75H12.0375C13.8277 3.75 15.5446 4.46116 16.8105 5.72703C18.0763 6.9929 18.7875 8.70979 18.7875 10.5V14.4375C19.4757 14.9256 20.0361 15.5724 20.4212 16.3231C20.8063 17.0738 21.0049 17.9063 21 18.75C21 18.9489 20.921 19.1397 20.7803 19.2803C20.6397 19.421 20.4489 19.5 20.25 19.5ZM4.575 18H19.425C19.3188 17.48 19.1034 16.9886 18.7931 16.558C18.4828 16.1275 18.0847 15.7677 17.625 15.5025C17.5105 15.4364 17.4156 15.3413 17.3497 15.2267C17.2839 15.1121 17.2495 14.9822 17.25 14.85V10.5C17.25 9.10761 16.6969 7.77226 15.7123 6.78769C14.7277 5.80312 13.3924 5.25 12 5.25C10.6076 5.25 9.27226 5.80312 8.28769 6.78769C7.30313 7.77226 6.75 9.10761 6.75 10.5V14.85C6.75053 14.9822 6.71612 15.1121 6.65027 15.2267C6.58442 15.3413 6.48945 15.4364 6.375 15.5025C5.91533 15.7677 5.51719 16.1275 5.2069 16.558C4.89661 16.9886 4.68123 17.48 4.575 18Z" fill="#283344"/>
          <circle cx="17.5" cy="5.5" r="4.5" fill="#A90107"/>
          </g>
          <defs>
          <clipPath id="clip0_691_9470">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </span>
        <span>
        <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="6" rx="2" fill="#5B44E8"/>
            <rect y="9" width="35" height="6" rx="2" fill="#5B44E8"/>
            <rect y="18" width="35" height="6" rx="2" fill="#5B44E8"/>
        </svg>

        </span>
      </div>
    </div>
  )
}

export default Header