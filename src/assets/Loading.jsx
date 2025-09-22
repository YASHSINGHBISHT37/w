import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center flex-col pt-[80vw] w-screen h-screen absolute top-0 bg-gradient-to-b from-blue-300 to-blue-900'>
            <img src="weather-icons/clear-day.svg" alt="sun-loading" className='w-36 h-36' />
            <p class="tracking-tight leading-[2vh] mt-[-2vw] text-center text-white/90">Don’t let the weather surprise you — stay <br /> prepared every day!</p>
        </div>
    )
}

export default Loading
