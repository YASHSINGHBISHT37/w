import React,{useContext} from 'react'
import { WeatherContent } from '../data/WeatherData'


const OtherDetails = () => {
  const { data } = useContext(WeatherContent)
  if (!data) return <p>Loading....</p>

  return (
    <div className='w-screen h-auto flex justify-center bg-amber-00 mt-3 mb-18'>
      <div className='w-90 h-50 bg-[#1a1b1a] rounded-2xl flex flex-wrap justify-between items-cnter p-2'>
        <div className='bg-[#1a1b1a]/0 w-full rounded-2xl flex flex-col justify-between gap-1'>

          <div className='w-full h-full flex justify-between items-center gap-1 '>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border- border-white/50 rounded-2xl'>
              <img src="weather-icons/wind.svg" className='w-10 h-10' />
              <p>{data.current_weather.windspeed} Km/h</p>
              <p className='font-bold text-[1.6vh] opacity-50'>Wind</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border- border-white/50 rounded-2xl'>
              <img src="weather-icons/thermometer.svg" className='w-10 h-10' />
              <p>34°C</p>
              <p className='font-bold text-[1.6vh] opacity-50'>Feels Likes</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border- border-white/50 rounded-2xl'>
              <img src="weather-icons/humidity.svg" className='w-10 h-10' />
              <p>66%</p>
              <p className='font-bold text-[1.6vh] opacity-50'>Humidity</p>
            </div>

          </div>  

          <div className='w-full h-full flex justify-between items-center gap-1'>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border- border-white/50 rounded-2xl'>
              <img src="weather-icons/cloudy.svg" className='w-10 h-10' />
              <p>7.4 Km/h</p>
              <p className='font-bold text-[1.6vh] opacity-50'>Cloud</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border- border-white/50 rounded-2xl'>
              <img src="weather-icons/ap.png" className='w-10 h-10 p-2' />
              <p>34°C</p>
              <p className='font-bold text-[1.6vh] opacity-50'>Air pressure</p>
            </div>

            <div className='w-1/3 h-full flex flex-col justify-center items-center leading-4 border- border-white/50 rounded-2xl'>
              <img src="weather-icons/visibility.png" className='w-10 h-10 p-2' />
              <p>66%</p>
              <p className='font-bold text-[1.6vh] opacity-50'>Visibility</p>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default OtherDetails
