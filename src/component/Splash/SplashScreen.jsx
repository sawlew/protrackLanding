import React from 'react'
import SplashWallPaper from '../../assets/splashwall.png'
import SplashOne from './SplashOne'
import SplashTwo from './SplashTwo'
import SplashThree from './SplashThree'
import SplashFour from './SplashFour'
import SplashFive from './SplashFive'
import SplashSix from './SplashSix'
import SplashSeven from './SplashSeven'
import SplashEight from './SplashEight'
import SplashNine from './SplashNine'

const SplashScreen = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'
    style={{
        backgroundImage: `url(${SplashWallPaper})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
        {/* <SplashOne /> */}
        {/* <SplashTwo /> */}
        {/* <SplashThree /> */}
        {/* <SplashFour /> */}
        {/* <SplashFive /> */}
        {/* <SplashSix /> */}
        {/* <SplashSeven /> */}
        {/* <SplashEight /> */}
        <SplashNine />
    </div>
  )
}

export default SplashScreen