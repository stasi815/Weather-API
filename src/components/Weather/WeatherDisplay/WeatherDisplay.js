import React from 'react'
import Temperature from './Temperature/Temperature'
import WeatherDescription from './WeatherDescription/WeatherDescription'
import Atmosphere from './Atmosphere/Atmosphere'
import './WeatherDisplay.css'

function WeatherDisplay(props) {
  const { temp, unit, main, description, pressure, humidity, temp_min, temp_max} = props
  return (
    <div className='weather-display'>
    <Temperature
      temp={temp}
      unit={unit}
      min={temp_min}
      max={temp_max}
      />
    <div className='description'>
      <WeatherDescription
        title={main}
        description={description}
      />
      <Atmosphere
        pressure={pressure}
        humidity={humidity}
      />
    </div>
    </div>
  )
}

export default WeatherDisplay