import React from 'react';
import Bluebg from '../../assets/Vector.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import Avatar from '../../assets/avatar.png';
// import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-cards';
import './Testimonial.css'

const Testimonials = () => {
  return (
    <div className='mx-2 bg-white py-20 '>
      <div className='px-5 md:px-10'>
        <h1 className='text-lg font-semibold md:text-2xl my-5 md:my-8'>Testimonials</h1>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga in autem impedit et
          provident ullam vero, quidem facilis debitis ratione ea voluptates quasi! Impedit neque
          animi nam aliquam debitis?
        </p>
      </div>

      <div
        className='h-[600px] md:mx-10 rounded-3xl mt-8 flex justify-center items-center gap-5 md:bg-[#F4F3FF]'
      >
        <div className='swiper-button-prev hidden bg-[#5740EA] w-10 h-10 rounded-full md:flex items-center justify-center text-white cursor-pointer'>
          <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3L4 6L7 9" stroke="#FFF" stroke-linecap="round"/>
          </svg>
        </div>
        <div className='border-2 border-rose-500 w-[90%] md:w-[70%]'
            style={{
              backgroundImage: `url(${Bluebg})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
        >
          <Swiper
            modules={[Navigation, EffectCards]}
            effect='cards'
            // spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
          >
            <SwiperSlide className=''>
              <div className='h-[500px] w-full flex justify-center items-center'>
                <div className='relative h-[400px] w-full bg-blue-400 rounded-lg px-2 py-10'>
                  <div className='absolute w-full h-20 -top-10 left-0 flex items-center justify-center'>
                    <div className='w-20 h-20'>
                      <img src={Avatar} alt="" className='object-cover' />
                    </div>
                  </div>
                  <p>Slide 1 Content</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='h-[500px] w-full flex justify-center items-center'>
                <div className='relative h-[400px] w-full bg-blue-400 rounded-lg px-2 py-10'>
                  <div className='absolute w-full h-20 -top-10 left-0 flex items-center justify-center'>
                    <div className='w-20 h-20'>
                      <img src={Avatar} alt="" className='object-cover' />
                    </div>
                  </div>
                  <p>Slide 2 Content</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='h-[500px] w-full flex justify-center items-center'>
                <div className='relative h-[400px] w-full bg-blue-400 rounded-lg px-2 py-10'>
                  <div className='absolute w-full h-20 -top-10 left-0 flex items-center justify-center'>
                    <div className='w-20 h-20'>
                      <img src={Avatar} alt="" className='object-cover' />
                    </div>
                  </div>
                  <p>Slide 3 Content</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=''>
              <div className='h-[500px] w-full flex justify-center items-center'>
                <div className='relative h-[400px] w-full bg-blue-400 rounded-lg px-2 py-10'>
                  <div className='absolute w-full h-20 -top-10 left-0 flex items-center justify-center'>
                    <div className='w-20 h-20'>
                      <img src={Avatar} alt="" className='object-cover' />
                    </div>
                  </div>
                  <p>Slide 4 Content</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='swiper-button-next hidden bg-[#5740EA] w-10 h-10 rounded-full md:flex lg:flex items-center justify-center text-white cursor-pointer'>
          <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9L8 6L5 3" stroke="#FFF" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
