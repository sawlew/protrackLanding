import React from 'react'
import SplashWallPaper from '../../assets/splashwall.png'

const SignUp = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'
    style={{
        backgroundImage: `url(${SplashWallPaper})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
          <div className='w-[80%] h-[80%] rounded-3xl grid grid-cols-2 items-center justify-center bg-white relative'>
        <div className='h-[65%]'
        style={{
            backgroundImage: `url()`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
        ></div>
            <div className='px-20 w-[90%]'>
                <h1 className='text-2xl font-bold'>Join Us!</h1>
                <p className='text-[#8692A6] font-medium mt-4 mb-8'>To begin this journey, tell us what type of account you’d be opening.</p>
                <div className='cursor-pointer flex items-center gap-5 w-auto rounded-lg py-5 px-10 shadow-md border border-transparent hover:border hover:border-[#5740EA] hover:bg-[#F5F9FF] group ease-linear duration-200'>
                    <div className=''>
                        {/* <img src={} alt="" /> */}
                    </div>

                    <div>
                        <p className='font-medium'>Individual</p>
                        <p className='text-[#8692A6] text-sm'>Personal account to manage all you <br /> activities.</p>
                    </div>
                    <svg className='opacity-0 group-hover:opacity-100 ease-linear duration-200' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5899 3.58002C10.2645 3.25458 9.73683 3.25458 9.4114 3.58002C9.08596 3.90545 9.08596 4.43309 9.4114 4.75853L13.8221 9.16927H4.16732C3.70708 9.16927 3.33398 9.54237 3.33398 10.0026C3.33398 10.4628 3.70708 10.8359 4.16732 10.8359H13.8221L9.4114 15.2467C9.08596 15.5721 9.08596 16.0998 9.4114 16.4252C9.73683 16.7506 10.2645 16.7506 10.5899 16.4252L16.4232 10.5919C16.7487 10.2664 16.7487 9.73879 16.4232 9.41335L10.5899 3.58002Z" fill="#1565D8"/>
                    </svg>
                </div>
                <div className='cursor-pointer flex items-center gap-5 w-auto rounded-lg py-5 px-10 shadow-md border border-transparent hover:border hover:border-[#5740EA] hover:bg-[#F5F9FF] group mt-10 ease-linear duration-200'>
                    <div className=''>
                        {/* <img className='w-[50px] h-[48px]' src={} alt="" /> */}
                    </div>

                    <div>
                        <p className='font-medium'>Individual</p>
                        <p className='text-[#8692A6] text-sm'>Own or belong to a company, this<br /> is for you.</p>
                    </div>
                    <svg className='opacity-0 group-hover:opacity-100 ease-linear duration-200' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5899 3.58002C10.2645 3.25458 9.73683 3.25458 9.4114 3.58002C9.08596 3.90545 9.08596 4.43309 9.4114 4.75853L13.8221 9.16927H4.16732C3.70708 9.16927 3.33398 9.54237 3.33398 10.0026C3.33398 10.4628 3.70708 10.8359 4.16732 10.8359H13.8221L9.4114 15.2467C9.08596 15.5721 9.08596 16.0998 9.4114 16.4252C9.73683 16.7506 10.2645 16.7506 10.5899 16.4252L16.4232 10.5919C16.7487 10.2664 16.7487 9.73879 16.4232 9.41335L10.5899 3.58002Z" fill="#1565D8"/>
                    </svg>
                </div>
            </div>
        <div className='absolute bottom-12 text-center w-1/2'>
            <p className='text-[#8692A6]'>Already have an account? <a className='text-[#5740EA]' href="">Sign In</a></p>
        </div>
    </div>
    </div>
  )
}

export default SignUp