import React, { useContext } from 'react'
import { WeatherContent } from '../data/WeatherData'

const SunUpDown = () => {
    const { data } = useContext(WeatherContent)
    if (!data) return <p>Loading....</p>


    return (
        <div className='w-screen h-auto flex justify-center pt-3'>
            <div className='w-90 h-18 bg-[#1a1b1a] rounded-2xl flex justify-between items-center px-4 pr-2 py-5'>
                <div className='sunrise flex justify-between items-center'>
                    <div className='sunriseTime'>
                        <p className='font-bold opacity-60 leading-3 pt-2'>Sunrise</p>
                        <p className='text-2xl'>6:08AM</p>
                    </div>
                    <img src="weather-icons/sunrise.svg" className='w-18 h-18 mt-1' />
                </div>

                <div className='w-[.2vh] h-full bg-white/40 rounded-2xl'></div>

                <div className='sunset flex justify-between items-center'>
                    <div className='sunsetTime'>
                        <p className='font-bold opacity-60 leading-3 pt-2'>Sunset</p>
                        <p className='text-2xl'>6:08AM</p>
                    </div>
                    <img src="weather-icons/sunset.svg" className='w-18 h-18 mt-1' />
                </div>
            </div>
        </div>
    )
}

export default SunUpDown
