import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const Forcast = () => {
    return (
        <div className='w-screen h-auto flex justify-center bg-amber-00 mt-3'>
            <Swiper slidesPerView={'auto'} spaceBetween={6} freeMode={true} modules={[FreeMode]} className="mySwiper forecast-con w-90 h-36 bg-[#1a1b1a] rounded-2xl !p-2">

                <SwiperSlide className='relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 bg-[#1a1b1a]/50 rounded-2xl'>
                    <p className='font-bold text-left text-[2vh] text-white leading-4'>Sun, 21</p>

                    <img src='weather-icons/clear-day.svg' className="w-16 h-16 mt-[-1vh]" />

                    <div className="w-full flex justify-between px-1 text-[1.4vh]">
                        <p className="font-bold text-white -mt-1.5">27°C</p>
                        <p className="font-bold text-white/60 -mt-1.5">32°C</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!w-0.5 !h-26 bg-white/40 rounded-2xl mt-3'></SwiperSlide>

                <SwiperSlide className='relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 bg-[#1a1b1a]/0 rounded-2xl'>
                    <p className='font-bold text-left text-[2vh] text-white leading-4'>Sun, 21</p>

                    <img src='weather-icons/clear-day.svg' className="w-16 h-16 mt-[-1vh]" />

                    <div className="w-full flex justify-between px-1 text-[1.4vh]">
                        <p className="font-bold text-white -mt-1.5">27°C</p>
                        <p className="font-bold text-white/60 -mt-1.5">32°C</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!w-0.5 !h-26 bg-white/40 rounded-2xl mt-3'></SwiperSlide>

                <SwiperSlide className='relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 bg-[#1a1b1a]/0 rounded-2xl'>
                    <p className='font-bold text-left text-[2vh] text-white leading-4'>Sun, 21</p>

                    <img src='weather-icons/clear-day.svg' className="w-16 h-16 mt-[-1vh]" />

                    <div className="w-full flex justify-between px-1 text-[1.4vh]">
                        <p className="font-bold text-white -mt-1.5">27°C</p>
                        <p className="font-bold text-white/60 -mt-1.5">32°C</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!w-0.5 !h-26 bg-white/40 rounded-2xl mt-3'></SwiperSlide>

                <SwiperSlide className='relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 bg-[#1a1b1a]/0 rounded-2xl'>
                    <p className='font-bold text-left text-[2vh] text-white leading-4'>Sun, 21</p>

                    <img src='weather-icons/clear-day.svg' className="w-16 h-16 mt-[-1vh]" />

                    <div className="w-full flex justify-between px-1 text-[1.4vh]">
                        <p className="font-bold text-white -mt-1.5">27°C</p>
                        <p className="font-bold text-white/60 -mt-1.5">32°C</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!w-0.5 !h-26 bg-white/40 rounded-2xl mt-3'></SwiperSlide>

                <SwiperSlide className='relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 bg-[#1a1b1a]/0 rounded-2xl'>
                    <p className='font-bold text-left text-[2vh] text-white leading-4'>Sun, 21</p>

                    <img src='weather-icons/clear-day.svg' className="w-16 h-16 mt-[-1vh]" />

                    <div className="w-full flex justify-between px-1 text-[1.4vh]">
                        <p className="font-bold text-white -mt-1.5">27°C</p>
                        <p className="font-bold text-white/60 -mt-1.5">32°C</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!w-0.5 !h-26 bg-white/40 rounded-2xl mt-3'></SwiperSlide>

                <SwiperSlide className='relative !flex flex-col justify-between items-center !w-24 !h-full !px-3 !py-2 bg-[#1a1b1a]/0 rounded-2xl'>
                    <p className='font-bold text-left text-[2vh] text-white leading-4'>Sun, 21</p>

                    <img src='weather-icons/clear-day.svg' className="w-16 h-16 mt-[-1vh]" />

                    <div className="w-full flex justify-between px-1 text-[1.4vh]">
                        <p className="font-bold text-white -mt-1.5">27°C</p>
                        <p className="font-bold text-white/60 -mt-1.5">32°C</p>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div >
    )
}

export default Forcast
