import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    const [active, setActive] = useState('weather')

    return (
        <div className='relative w-screen h-auto flex justify-center'>
            <div className='w-54 h-12 z-[9999] rounded-full  backdrop-blur-3xl fixed bottom-3 flex justify-between items-center border-1 border-white/30'
                style={{ backgroundColor: active === 'menu' ? 'rgba(18, 18, 18, 0.8)' : 'transparent' }}>

                <div className={`highLight absolute right-2 w-24 h-8 rounded-2xl bg-blue-400 transition-all duration-300 ease-in-out`}
                    style={{ left: active === 'weather' ? "4%" : "52%" }}></div>

                <div className='relative flex justify-center items-center w-full cursor-pointer' onClick={() => setActive('weather')}>
                    <img src="weather-icons/clear-day.svg" className='w-4 h-4 mr-1' />
                    <p className='text-1xl'>Weather</p>
                </div>

                {/* <div className='w-0.5 h-full bg-white/50 rounded-2xl'></div> */}

                <div className='relative Menu flex justify-center items-center w-full cursor-pointer' onClick={() => setActive('menu')}>
                    <div className="menu w-3 h-[1vh] gap-0.5 flex flex-col cursor-pointer mr-2">
                        <div className='bar w-auto h-1/3 rounded-full transition-colors duration-300 bg-white'></div>
                        <div className='bar w-auto h-1/3 rounded-full transition-colors duration-300 bg-white'></div>
                        <div className='bar w-auto h-1/3 rounded-full transition-colors duration-300 bg-white'></div>
                    </div>
                    <p className='text-1xl'>Menu</p>
                </div>

            </div>

            {/* Extended Menu */}
            <div className={`extended-menu w-screen h-screen py-3 px-3.5 z-[999] fixed top-0 transition-all duration-400 ease-in-out`}
                style={{
                    backgroundColor: active === 'menu' ? 'rgba(18, 18, 18, 0.2)' : 'transparent',
                    backdropFilter: active === 'menu' ? 'blur(1.6vh)' : 'blur(0)',
                    opacity: active === 'menu' ? 1 : 0,
                    pointerEvents: active === 'menu' ? 'auto' : 'none',
                }}>
                <div className={`menu-cont w-90 h-84 bg-[#1a1b1a]/10 backdrop-blur-[0vw] rounded-2xl border-1 border-white/30 flex flex-col justify-between px-5 py-2 text-white fixed transition-all duration-400 ease-in-out`}
                    style={{ bottom: active === 'menu' ? '9vh' : '-60%' }}>

                    <div className="top w-full h-full flex flex-col">

                        <div className="top justify-between items-center">
                            <div className="flex justify-between items-start">
                                <p className="font-bold text-[3vh] text-white/60 mb-4">Links</p>
                            </div>
                        </div>

                        <span className="overflow-hidden">
                            <a href="mailto:yashbisht0007@gmail.com"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="email" className="w-10 h-10 mt-1" />Email
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://github.com/YASHSINGHBISHT37" target="_blank"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="Github" className="w-10 h-10 mt-1 " />Github
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://linkedin.com/in/yash-singh-bisht-349960295" target="_blank"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="Linkdin" className="w-10 h-10 mt-1" />Linkedin
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://instagram.com/thunderbeast37" target="_blank"
                                className="font-bold text-5xl active:text-blue-400 gap-3 ml-[-6.2vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="instagram" className="w-10 h-10 mt-1" />Instagram
                            </a>
                        </span>
                    </div>

                    <div className="bottom border-t-[.1vh] border-white/50 w-full h-8 px-1 pt-1 font-bold flex justify-between items-center text-[1.8vh]">
                        <p className="text-white">Website by&nbsp;<span className="text-blue-300">Yash Singh Bisht.</span></p>
                        <p className="text-white" onClick={() => {}}>Themes</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu
