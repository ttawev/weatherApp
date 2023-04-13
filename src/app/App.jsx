import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [country, setCountry] = useState()
    const [name, setName] = useState()
    const [time, setTime] = useState()
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    

    const API_KEY = '4712b371351041474dc06f12d05262c0'
    
    const searchHandler = (e) => {
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=${API_KEY}`)
        .then(({data}) => setCountry(data.sys.country))
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=${API_KEY}`)
        .then(({data}) => setName(data.name))
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=${API_KEY}`)
        .then(({data}) => setTime(data.dt))
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=${API_KEY}`)
        .then(({data}) => setWeather(data.weather[0].description))
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=${API_KEY}`)
        .then(({data}) => setTemp(Math.round(data.main.temp - 275.15)))
    }

  return (
     <div className='app'>
        <h1>WeatherApp</h1>
        <form action="" className='app__form' onSubmit={searchHandler}>
            <input type="text" placeholder='Search city' className='formInput' id='formInput'/>
            <button type='submit' className='formBtn'>Search</button>
        </form>
        <div className="weatherMain">
            <p>{JSON.stringify(time)}</p>
            <h2>{JSON.stringify(name)}{JSON.stringify(country)}</h2>
            <p>{JSON.stringify(weather)}</p>
            <h3>{JSON.stringify(temp)}</h3>
        </div>
        <div className="weatherDesc">

        </div>
     </div>
     
  )
  
}

export default App