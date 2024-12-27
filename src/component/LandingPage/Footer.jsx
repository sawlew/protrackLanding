import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F4F3FF] px-5 md:px-10 pt-20 text-center md:text-left'>
        <div className='md:flex justify-between items-start'>
            <div>
                <h1 className='font-bold text-xl md:text-2xl'>ProTrack</h1>
                <p className='my-5'>+234-802-418-2946</p>
                <p className='text-sm'>support@protrack.com</p>
            </div>
            <div className='hidden md:block'>
                <h1 className='font-bold text-xl md:text-lg'>QUICKLINKS</h1>
                <div className='text-gray-500 font-medium text-sm mt-5 grid grid-cols-2 gap-5 lg:gap-x-40'>
                    <a href="">Product</a>
                    <a href="">Company</a>
                    <a href="">Information</a>
                    <a href="">ProTrack</a>
                </div>
            </div>
            <div className='hidden md:block'>
                <h1 className='font-bold text-xl md:text-lg'>Subscribe</h1>
                <div className='mt-5 flex'>
                    <input className='p-3 borderborder-gray-400 rounded-l-md rounded-r-none placeholder:text-sm' type="text" placeholder='Get product updates' />
                    <button className='bg-[#5740EA] hover:bg-[#5740EABF] active:bg-[#5B44E8] text-white p-3 px-5 rounded-r-md'>
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className='md:flex justify-between items-center md:mt-20 text-sm font-medium text-gray-800 md:border-t border-gray-300 py-10'>
            <div className='flex justify-center gap-5'>
                <a href='' className='border border-gray-300 w-10 h-10 flex justify-center items-center rounded-full'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.48355 2.9671C2.30289 2.9671 2.9671 2.30289 2.9671 1.48355C2.9671 0.664208 2.30289 0 1.48355 0C0.664208 0 0 0.664208 0 1.48355C0 2.30289 0.664208 2.9671 1.48355 2.9671Z" fill="#0A142F"/>
                    <path d="M2.71984 3.96094H0.247258C0.110772 3.96094 0 4.07171 0 4.2082V11.6259C0 11.7624 0.110772 11.8732 0.247258 11.8732H2.71984C2.85633 11.8732 2.9671 11.7624 2.9671 11.6259V4.2082C2.9671 4.07171 2.85633 3.96094 2.71984 3.96094Z" fill="#0A142F"/>
                    <path d="M10.0876 3.54445C9.03077 3.18246 7.70893 3.50044 6.91622 4.07061C6.88902 3.96429 6.7921 3.88517 6.67687 3.88517H4.20429C4.0678 3.88517 3.95703 3.99594 3.95703 4.13243V11.5502C3.95703 11.6867 4.0678 11.7974 4.20429 11.7974H6.67687C6.81336 11.7974 6.92413 11.6867 6.92413 11.5502V6.21929C7.3237 5.8751 7.83849 5.76532 8.25982 5.94434C8.66829 6.11692 8.9022 6.53825 8.9022 7.09953V11.5502C8.9022 11.6867 9.01297 11.7974 9.14946 11.7974H11.622C11.7585 11.7974 11.8693 11.6867 11.8693 11.5502V6.60155C11.8411 4.56958 10.8852 3.81742 10.0876 3.54445Z" fill="#0A142F"/>
                    </svg>
                </a>
                <a href='' className='border border-gray-300 w-10 h-10 flex justify-center items-center rounded-full'>
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.0932 2.02078H6.70158C6.84955 2.02078 6.96964 1.90762 6.96964 1.76819V0.252598C6.96964 0.113164 6.84955 0 6.70158 0H5.0932C3.46766 0 2.1445 1.24632 2.1445 2.77858V4.54676H0.268063C0.120092 4.54676 0 4.65993 0 4.79936V6.31495C0 6.45438 0.120092 6.56755 0.268063 6.56755H2.1445V11.8721C2.1445 12.0115 2.2646 12.1247 2.41257 12.1247H4.02095C4.16892 12.1247 4.28901 12.0115 4.28901 11.8721V6.56755H6.16545C6.28072 6.56755 6.38312 6.49783 6.42011 6.39477L6.95624 4.87918C6.98358 4.80239 6.96964 4.71752 6.91924 4.65134C6.86831 4.58566 6.78789 4.54676 6.70158 4.54676H4.28901V2.77858C4.28901 2.36078 4.64982 2.02078 5.0932 2.02078Z" fill="#0A142F"/>
                    </svg>
                </a>
                <a href='#' className='border border-gray-300 w-10 h-10 flex justify-center items-center rounded-full'>
                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2202 1.26468C12.139 1.17289 12.0081 1.14981 11.9007 1.20642C11.8339 1.2416 11.7083 1.28776 11.5592 1.33338C11.7473 1.07616 11.8985 0.788169 11.9653 0.529303C11.9942 0.417733 11.952 0.300117 11.8601 0.233614C11.7682 0.167661 11.6458 0.167661 11.5539 0.233614C11.4091 0.33749 10.7102 0.649668 10.2683 0.750795C9.26957 -0.148913 8.10738 -0.242346 6.89924 0.483136C5.91712 1.07287 5.70338 2.27211 5.74506 3.00309C3.49709 2.7805 2.09979 1.55927 1.31324 0.54854C1.2582 0.47764 1.1695 0.440267 1.08614 0.445763C0.998509 0.452358 0.919427 0.502373 0.874542 0.579867C0.502641 1.22566 0.399513 1.9396 0.577449 2.64474C0.674699 3.02947 0.844619 3.36858 1.04179 3.64338C0.947213 3.59557 0.85584 3.53566 0.769811 3.46421C0.690729 3.39716 0.58012 3.38452 0.486611 3.42904C0.393635 3.47465 0.334323 3.57138 0.334323 3.67746C0.334323 4.88825 1.07065 5.69617 1.75834 6.11827C1.6472 6.10453 1.53125 6.07925 1.41423 6.04242C1.31377 6.01109 1.20476 6.04242 1.1353 6.12376C1.06584 6.20456 1.04927 6.31997 1.09255 6.41835C1.47888 7.29718 2.21093 7.90175 3.11664 8.12104C2.32581 8.59865 1.26728 8.83278 0.297988 8.71791C0.172418 8.69978 0.0527257 8.78167 0.0131845 8.90588C-0.0263567 9.03009 0.0254743 9.16639 0.136083 9.23015C1.60659 10.0793 2.93603 10.3827 4.08486 10.3827C5.75682 10.3827 7.04725 9.74073 7.83273 9.20377C9.95032 7.7583 11.2701 5.16305 11.0863 2.84096C11.4256 2.58319 11.9333 2.10723 12.248 1.59554C12.3132 1.49222 12.3014 1.35591 12.2202 1.26468Z" fill="#0A142F"/>
                    </svg>
                </a>
            </div>
            <p className='my-5 md:my-0 uppercase md:normal-case'>A product of ProTrack</p>
            <p className='uppercase md:normal-case'>© 2024 ProTrack. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer