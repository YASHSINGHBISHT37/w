import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Forecast from './Forecast';

const apiKey = '2078d8fd3148732b191a7bec324b0636'

const Day = () => {
    const [cityInput, setCityInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [weather, setWeather] = useState(null);
    const [dateTime, setDateTime] = useState(new Date())
    const [timezoneOffset, setTimezoneOffset] = useState(0);
    const [forecast, setForecast] = useState([]);


    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const cityTime = new Date(now.getTime() + timezoneOffset * 1000 - now.getTimezoneOffset() * 60000);
            setDateTime(cityTime);
        }, 1000);
        return () => clearInterval(timer);
    }, [timezoneOffset]);


    const formattedDate = dateTime.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    const formattedTime = dateTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });


    // Default Delhi
    useEffect(() => {
        getWeather(28.6139, 77.2090, 'Delhi', 'India');
    }, []);


    // Suggestions
    useEffect(() => {
        if (!cityInput) {
            setSuggestions([])
            return
        }

        const fetchCities = async () => {
            try {
                const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=10&appid=${apiKey}`)
                setSuggestions(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchCities()
    }, [cityInput])


    // Fetch Weather Data
    const getWeather = async (lat, lon, name = null, country = null) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            const data = res.data;

            setWeather({
                city: name || data.name,
                country: country || regionNames.of(data.sys.country),
                condition: data.weather[0].description,
                temperature: Math.round(data.main.temp),
                highTemp: Math.round(data.main.temp_max),
                lowTemp: Math.round(data.main.temp_min),
                wind: (data.wind.speed * 3.6).toFixed(1),
                feelsLike: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                cloud: data.clouds.all,
                pressure: (data.main.pressure * 0.750062).toFixed(1),
                visibility: (data.visibility / 1000).toFixed(1)
            });

            setTimezoneOffset(data.timezone);

            // Fetch 5-day forecast
            const dailyForecast = await getForecast(lat, lon);
            setForecast(dailyForecast);

        } catch (error) {
            console.log(error);
        }
    };


    const getForecast = async (lat, lon) => {
    try {
        const res = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=7&timezone=auto`
        );

        const data = res.data.daily;

        // Map into forecast array
        const dailyForecast = data.time.map((date, i) => ({
            date,
            max: Math.round(data.temperature_2m_max[i]),
            min: Math.round(data.temperature_2m_min[i]),
            precipitation: data.precipitation_sum[i] // optional, can use in Forecast component
        }));

        return dailyForecast;

    } catch (err) {
        console.log(err);
        return [];
    }
};



    return (
        <div className='w-screen h-auto bg-amber-400'>

            {/* Input */}
            {/* <div className='input-search h-auto pt-7 '>
                <div className="input w-auto flex z-[9999] justify-center items-center h-auto gap-2 mt-10 relative lg:hidden mx-8">

                    <div className='inputSearch w-[84vw] flex justify-between items-center border-1 border-white/80 rounded-2xl px-3 backdrop-blur-3xl fixed top-16'>
                        <input type="text" value={cityInput} placeholder="Search by the city..." className="cityInput lg:w-[30vw] w-full h-9 outline-none text-white" onChange={(e) => setCityInput(e.target.value)} />
                        <img src="/icons/search.png" alt="search-icon" className='w-5 h-5 opacity-90' />
                    </div>

                    <ul className={`suggestions absolute top-11 lg:top-12 left-0 w-full h-auto bg-[#121212]/30 backdrop-blur-[5vw] lg:bg-white/10 lg:backdrop-blur-[.8vw] rounded-2xl max-h-56 overflow-auto z-50
                        ${suggestions.length === 0 ? 'border-0' : 'border-1 border-white/30'}`}>
                        {suggestions.map((city, index) => {

                            const country = city.country ? regionNames.of(city.country) : '--'
                            const isLast = index === suggestions.length - 1

                            return (
                                <li key={index} className={`w-full flex justify-between items-center cursor-pointer py-1 text-white px-4 hover:bg-blue-700/70 hover:text-[#121212]
                                    ${isLast ? '' : 'border-b-1 border-white/30'}
                                }`}
                                    onClick={() => {
                                        getWeather(city.lat, city.lon, city.name, country), setCityInput(''), setSuggestions([])
                                    }}>
                                    <h1>{city.name}{city.state ? ', ' + city.state : ''}</h1>
                                    <h1>{country}</h1>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div> */}

            {/* Temperature Info */}
            {/* <div className="city flex flex-col items-center mt-16 text-white/90">
                <h1 className="cityCountryName text-3xl tracking-tight">{weather?.city ?? '--'}, {weather?.country ?? '--'}</h1>
                <p className="dayDateTime text-[2vh]">{formattedDate}, {formattedTime}</p>
            </div>

            <div className="temp flex flex-col items-center mt-20 lg:mt-[5vw] text-white">
                <p className="condition text-2xl lg:text-4xl mb-1.5 tracking-tight capitalize">{weather?.condition ?? '--'}</p>
                <span className="temperature text-9xl lg:text-[8vw] leading-[28vw] lg:leading-[9vw]">{weather?.temperature ?? '--'}°C</span>

                <div className="high-low-temp flex gap-3 text-[3.6vw] lg:text-[1vw] mt-7">
                    <p className="highTemp bg-[#121212]/40 backdrop-blur-[1vw] rounded-2xl px-3.5 py-0.5"> High - {weather?.highTemp ?? '--'}°C</p>
                    <p className="lowTemp bg-[#121212]/40 backdrop-blur-[1vw] rounded-2xl px-3.5 py-0.5"> Low - {weather?.lowTemp ?? '--'}°C</p>
                </div>

            </div> */}

            {/* Other Weather Details */}
            {/* <div className="otherDetails h-auto w-screen px-4 lg:px-[26vw] mt-16">

                <div className='cont w-full h-full flex flex-wrap justify-between border-[#121212]/60'>
                    <div className="w-[44vw] h-[36vw] lg:w-[15.6vw] lg:h-[10vw] p-4 border- rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] mb-3 flex flex-col justify-between">
                        <p className="text-[1.8vh] font-bold text-white/30 -mt-1.5">Wind</p>
                        <img src="weather-icons/wind.svg" alt="wind" className="w-14 h-14 lg:w-14 lg:h-14" />
                        <p className="wind font-bold text-[3.8vh] text-white">{weather?.wind ?? '--'} <span className='text-[2.6vh]'>Km/h</span></p>
                    </div>

                    <div className="w-[44vw] h-[36vw] lg:w-[15.6vw] lg:h-[10vw] p-4 border- rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] mb-3 flex flex-col justify-between">
                        <img src="weather-icons/thermometer-glass.svg" alt="feels-like" className="w-14 h-14" />
                        <p className="text-[1.8vh] font-bold text-white/30 -mt-1.5">Feels like</p>
                        <p className="feelsLike font-bold text-[3.8vh] text-white">{weather?.feelsLike ?? '--'}<span className='text-[2.6vh]'>°C</span></p>
                    </div>

                    <div className="w-[44vw] h-[36vw] lg:w-[15.6vw] lg:h-[10vw] p-4 border- rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] mb-3 flex flex-col justify-between">
                        <img src="weather-icons/humidity.svg" alt="humidity" className="w-14 h-14" />
                        <p className="text-[1.8vh] font-bold text-white/30 -mt-1.5">Humidity</p>
                        <p className="humidity font-bold text-[3.8vh] text-white">{weather?.humidity ?? '--'}<span className='text-[2.6vh]'>%</span></p>
                    </div>

                    <div className="w-[44vw] h-[36vw] lg:w-[15.6vw] lg:h-[10vw] p-4 border- rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] mb-3 flex flex-col justify-between">
                        <img src="weather-icons/cloud.png" alt="cloud" className="w-14 h-14 pt-2.5 pr-3" />
                        <p className="text-[1.8vh] font-bold text-white/30 -mt-1.5">Cloud</p>
                        <p className="cloud font-bold text-[3.8vh] text-white">{weather?.cloud ?? '--'}<span className='text-[2.6vh]'>%</span></p>
                    </div>

                    <div className="w-[44vw] h-[36vw] lg:w-[15.6vw] lg:h-[10vw] p-4 border- rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] mb-3 flex flex-col justify-between">
                        <img src="weather-icons/air-pressure.png" alt="air-pressure" className="w-14 h-14 pt-2.5 pb-1 pr-3.5 opacity-80" />
                        <p className="text-[1.8vh] font-bold text-white/30 -mt-1.5">Air pressure</p>
                        <p className="airPressure font-bold text-[3.8vh] text-white">{weather?.pressure ?? '--'} <span className='text-[2.6vh]'>mmHg</span></p>
                    </div>

                    <div className="w-[44vw] h-[36vw] lg:w-[15.6vw] lg:h-[10vw] p-4 border- rounded-2xl bg-[#121212]/40 backdrop-blur-[1vw] mb-3 flex flex-col justify-between">
                        <img src="weather-icons/visibility.png" alt="visibility" className="w-14 h-14 py-2.5 pr-4 pl-1 opacity-80" />
                        <p className="text-[1.8vh] font-bold text-white/30 -mt-1.5">Visibility</p>
                        <p className="visibility font-bold text-[3.8vh] text-white">{weather?.visibility ?? '--'} <span className='text-[2.6vh]'>Km</span></p>
                    </div>

                </div>

            </div> */}

            {/* <Forecast forecast={forecast} /> */}

        </div >
    )
}

export default Day
