import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const Forecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="w-screen h-auto">
      <div className="forecast w-full h-auto flex flex-col mt-16 text-[3.6vw] pb-10">
        <div className="w-full flex justify-between px-4">
          <h1 className="bg-[#121212]/40 lg:text-2xl flex justify-center items-center backdrop-blur-[1vw] rounded-2xl px-2.5 text-white">
            Forecast
          </h1>
          <div className="flex items-center gap-2">
            <img src="/icons/link.png" className="w-5 h-5 opacity-90" />
            <h1 className="text-white lg:text-2xl">Next 7 Days</h1>
          </div>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={14}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper forecast-con w-screen h-auto mt-4 !px-4 lg:!px-4"
        >
          {forecast.map((day, i) => (
            <SwiperSlide
              key={i}
              className="SwiperSlide !w-[45vw] !h-[56vw] lg:!w-[18vw] lg:!h-[22vw] p-4 py-3 lg:p-6 rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] !flex flex-col justify-between items-center"
            >
                <p className="cloud w-full font-bold text-[3.4vh] text-white flex justify-between">
                {(() => {
                  const d = new Date(day.date);
                  const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
                  const dayNum = d.getDate();
                  return `${weekday}, ${dayNum}`;
                  

                })()}
              </p>

              <img src={`weather-icons/clear-day.svg`} alt={day.date} className="w-[7rem] h-[7rem] lg:w-[10vw] lg:h-[10vw]"/>

              <div className="w-full flex justify-between">
                <p className="text-[1.8vh] font-bold text-white -mt-1.5">{day.max}°C</p>
                <p className="text-[1.8vh] font-bold text-white/60 -mt-1.5">{day.min}°C</p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end items-center gap-1 px-4 mt-3">
          <img src="/icons/link.png" className="w-3.5 h-3.5 opacity-60" />
          <h1 className="text-white/60 text-[2.6vw] lg:text-[1vw]">Scroll Left</h1>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
