import React, {useState} from 'react';
import Bluebg from '../../assets/Vector.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import Testimonial from './TestimonialData';
// import Avatar from '../../assets/avatar.png';
// import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-cards';
import './Testimonial.css'

const Testimonials = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div id='testimonials' className='mx-2 bg-white py-20 '>
      <div className='px-5 md:px-10 md:text-center'>
        <h1 className='text-lg font-semibold md:text-2xl my-5 md:my-8'>Testimonials</h1>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga in autem impedit et
          provident ullam vero, quidem facilis debitis ratione ea voluptates quasi! Impedit neque
          animi nam aliquam debitis?
        </p>
      </div>

      <div
        className='h-[600px] md:mx-10 rounded-3xl mt-8 flex justify-center items-center gap-5 lg:gap-16 md:bg-[#F4F3FF]'
      >
        <div className={`swiper-button-prev hidden bg-[#5740EA] hover:bg-[#5740EABF] active:bg-[#5B44E8] w-10 h-10 lg:w-14 lg:h-14 rounded-full md:flex items-center justify-center text-white cursor-pointer ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <svg className='w-4 h-4 lg:w-8 lg:h-8' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3L4 6L7 9" stroke="#FFF" stroke-linecap="round"/>
          </svg>
        </div>
        <div className='w-[90%] md:w-[70%]'
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
            loop={false}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            onReachEnd={() => setIsEnd(true)}
            onReachBeginning={() => setIsBeginning(true)}
          >
            {Testimonial.map((data)=>(
              <SwiperSlide key={data.id} className=''>
              <div className='h-[500px] w-full flex justify-center items-center'>
                <div className='relative h-[400px] w-full bg-white border rounded-lg px-2 py-10'>
                  <div className='absolute w-full h-20 -top-10 left-0 flex items-center justify-center'>
                    <div className='w-20 h-20'>
                      <img src={data.image} alt="" className='object-cover' />
                    </div>
                  </div>
                  <div className='text-center px-2 md:px-10'>
                    <p className='text-lg font-medium'>{data.name}</p>
                    <p className='pt-2 pb-5'>{data.jobRole}</p>
                    <p>{data.testimonial}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`swiper-button-next lg:z-20 hidden bg-[#5740EA] hover:bg-[#5740EABF] active:bg-[#5B44E8] w-10 h-10 lg:w-14 lg:h-14 rounded-full md:flex lg:flex items-center justify-center text-white cursor-pointer ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <svg className='w-4 h-4 lg:w-8 lg:h-8' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9L8 6L5 3" stroke="#FFF" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
