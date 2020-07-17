import React from 'react'
import './Atmosphere.css'

function Atmosphere(props) {
  const { pressure, humidity } = props
    return (
      <div>
        <div>Humidity: {humidity}</div>
        <div>Pressure: {pressure}</div>
      </div>
    )
}


export default Atmosphere