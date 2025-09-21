import React from 'react'
import Nav from '../components/home/Nav'
import Main from '../components/home/Main'
import Menu from '../components/home/Menu'
import Temp from '../components/home/Temp'
import Forcast from '../components/home/Forcast'
import SunUpDown from '../components/home/SunUpDown'
import OtherDetails from '../components/home/OtherDetails'

const Home = () => {
  return (
    // from-blue-300 to-blue-900
    //  <div className='flex items-center flex-col pt-[80vw] w-screen h-screen absolute top-0 bg-gradient-to-b from-blue-300 to-blue-900 z-[999] hover:z-[-1]'>
    //             <img src="/animated-icons/clear-day.svg" alt="sun-loading" className='w-36 h-36' />
    //             <p class="tracking-tight leading-[2vh] mt-[-2vw] text-center text-white/90">Don’t let the weather surprise you — stay <br /> prepared every day!</p>
    //         </div> 
    <div className='relative w-screen h-auto bg-transparent bg-gradient-to-b from-blue-500 to-blue-950'>
      <Nav />
      <Temp/>
      <Forcast/>
      <SunUpDown/>
      <OtherDetails/>
      <Menu />

      <Main />
    </div>
  )
}

export default Home
