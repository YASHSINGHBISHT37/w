import React, { useState } from 'react'
import Nav from '../components/home/Nav'
import Menu from '../components/home/Menu'
import Temp from '../components/home/Temp'
import Forcast from '../components/home/Forecast'
import SunUpDown from '../components/home/SunUpDown'
import OtherDetails from '../components/home/OtherDetails'
import WeatherData from '../components/data/WeatherData'
// import SetCity from '../assets/SetCity'

const Home = () => {
  const [city, setCity] = useState('')

  return (
    <div className='relative w-screen h-screen bg-transparent bg-gradient-to-b from-blue-500 to-blue-950'>
      <Nav setCity={setCity} />

      <WeatherData city={city}>
        <Temp />
        <Forcast />
        <SunUpDown />
        <OtherDetails />
        <Menu />
        {/* <SetCity /> */}

      </WeatherData>

    </div>
  )
}

export default Home
