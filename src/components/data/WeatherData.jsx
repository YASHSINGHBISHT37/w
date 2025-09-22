import React, {createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const WeatherContent = createContext()

const WeatherData = ({ city, children }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            try {
                const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`) // put city name
                const geo = geoRes.data.results?.[0] // get latitude & longitude
                if (!geo) return;

                // const { lat, lon } = geo // put the latitude = lat & longitude = lon
                const lat = geo.latitude;
                const lon = geo.longitude;

                const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`) // put the value of lat & lon, for the data
                setData(weatherRes.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchWeather()
    }, [city])


    return (
        <div>
            <WeatherContent.Provider value={{ data }}>
                {children}
            </WeatherContent.Provider>

        </div>
    )
}

export default WeatherData
