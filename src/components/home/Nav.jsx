import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


// const apiKey = ''

const Nav = () => {

    const [active, setActive] = useState('search')
    const [cityInput, setCityInput] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [selectedCity, setSelectedCity] = useState('Delhi, India')



    useEffect(() => {

        const deBounce = setTimeout(async () => {
            if (!cityInput.trim()) {
                setSuggestions([])
                return
            }

            try {
                const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&format=json`)
                const data = res.data.results || []

                // Remove duplicates based on name + country
                const uniqueCities = Array.from(
                    new Map(data.map(city => [`${city.name}-${city.country}`, city])).values()
                );

                setSuggestions(uniqueCities)
            }
            catch (error) {
                console.log(error)
            }
        }, 100)

        return () => clearTimeout(deBounce)
    }, [cityInput])




    return (
        <div className='w-screen h-auto fixed z-[999] flex justify-center backdrop-blur-[1vw]'>

            <nav className="Menu w-90 h-auto py-2 flex items-center rounded-b-[1vh]">
                <Link to='/' className='flex justify-center items-center mr-2'><h1 className="w-8 h-8 pb-9 text-3xl font-bold tracking-tight text-blue-900">W</h1></Link>

                <div className='SearchBar w-full flex justify-between items-center bg-[#1a1b1a] rounded-full' style={{
                    backgroundColor: active === 'search' ? 'transparent' : ''
                }} >

                    <div className=' relative inputSearch w-full h-9 flex justify-center items-center border-white/80 '>
                        <input type="text" value={cityInput} placeholder="Search by the city..." className="cityInput w-full h-full outline-none pl-3" onChange={(e) => setCityInput(e.target.value)}
                            style={{ display: active === 'close' ? 'block' : 'none' }} />
                        <h1 className='text-[2.4vh] px-4 py-0.5 rounded-4xl' style={{ display: active === 'search' ? 'block' : 'none' }}>{selectedCity}</h1>

                        <ul className={`suggestions absolute w-80 h-auto top-10 rounded-2xl bg-[#1a1b1a]/98 backdrop-blur-3xl ${suggestions.length === 0 ? '' : 'border-1 border-white/50'}`}>

                            {suggestions.map((city, index) => {
                                const isLast = index === suggestions.length - 1

                                return (
                                    <li key={index} className={`px-3 cursor-pointer py-0.5 flex justify-between items-center text-white ${isLast ? '' : 'border-b-1 border-white/50'}`}
                                        onClick={() => {
                                            setSelectedCity(`${city.name}, ${city.country}`)
                                            setCityInput('')
                                            setSuggestions([])
                                            setActive('search')
                                        }}>
                                            
                                        <p>{city.name}{city.admin1 ? ', ' + city.admin1 : ''} </p>
                                        <p>{city.country}</p>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>

                    <div className='SearchBtn relative w-8 h-8 ml-2 flex justify-center items-center cursor-pointer opacity-60 pr-3'>
                        <img src="/icons/search.png" alt="search-icon" className='w-5.5 h-5.5 absolute' onClick={() => setActive('close')} style={{ display: active === 'search' ? 'block' : 'none' }} />
                        <img src="/icons/close.png" alt="close-icon" className='w-4.5 h-4.5 rounded-full border-1 p-1 border-white absolute' onClick={() => setActive('search')} style={{ display: active === 'close' ? 'block' : 'none' }} />
                    </div>

                </div>
            </nav >

        </div >
    )
}

export default Nav
