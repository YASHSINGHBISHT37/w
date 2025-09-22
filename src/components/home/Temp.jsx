import React, { useContext } from 'react'
import { WeatherContent } from '../data/WeatherData'
import Loading from '../../assets/Loading'

const Temp = () => {
  const { data } = useContext(WeatherContent)
  if (!data) return <Loading />

  return (
    <div className='w-screen h-auto flex justify-center pt-16'>
      <div className='w-90 h-50 bg-[#1a1b1a] rounded-2xl flex justify-center items-center'>

        <div className='w-1/2 h-full flex flex-col justify-between p-5 py-3 pr-0 text-white'>

          <div className='leading-5'>
            <div className="day-date opacity-70">Monday, September 22</div>
            <div className="condition font-bold">Cloudy</div>
            <div className="feels flex items-center">Feels<span className='w-1 h-1 pt-1 rounded-full m-2 bg-amber-300'></span>39°C</div>
          </div>

          <div>
            <div className="temp text-[5vh] font-bold leading-9.5">{data.current_weather.temperature}°C</div>
            <div className="max-min opacity-60">27°C / 35°C</div>
          </div>
        </div>

        <div className='w-1/2 h-full flex justify-center items-center'>
          <img src="weather-icons/clear-day.svg" /></div>
      </div>
    </div>
  )
}

export default Temp
