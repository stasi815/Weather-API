import React, { Component } from 'react'
import './Weather.css'
import WeatherDisplay from './WeatherDisplay/WeatherDisplay'

class Weather extends Component {
    constructor(props) {
      super(props)

      this.state = {
        inputValue: '94010',     // Used to hold value entered in the input field
        weatherData: null,
        unit: 'imperial',
        status: 'idle',
      }
    }

    handleSubmit(e) {
        const { inputValue } = this.state
      e.preventDefault()
      const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
      // Get the zip from the input
      const zip = inputValue
      // Temp units
      const units = 'imperial'
      // Form an API request URL with the apikey and zip
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
      // Get data from the API with fetch
      fetch(url).then(res => {
        // Handle the response stream as JSON
        this.setState({ status: 'loading' })
        return res.json()
      }).then((json) => {
        // If the request was successful assign the data to component state
        this.setState({ weatherData: json })
        this.setState({ status: 'success' })
        // It's possible to get a valid JSON response that is not weather
        // data, for example when a bad zip code entered.
      }).catch((err) => {
        // If there is no data
        this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
        // Print an error to the console.
        console.log('-- Error fetching --')
        console.log(err.message)
        // You may want to display an error to the screen here.
      })
    }

    renderWeather() {
      const { weatherData, unit } = this.state
      // This method returns undefined or a JSX component
      if (weatherData === null) {
        // If there is no data return undefined
        return undefined
      } else if (weatherData.cod !== 200) {
        return <p>{weatherData.message}</p>
      }

      /*
      This next step needs another level of error checking. It's
      possible to get a JSON response for an invalid zip in which
      case the step below fails.
      */
      console.log(weatherData)
      // Take the weather data apart to more easily populate the component
      const { main, description } = weatherData.weather[0]
      const { temp, pressure, humidity, temp_min, temp_max} = weatherData.main

      return (
        <div>
          <WeatherDisplay
            main={main}
            description={description}
            temp={temp}
            temp_min={temp_min}
            temp_max={temp_max}
            pressure={pressure}
            humidity={humidity}
            unit={unit}
          />
        </div>
      )
    }

    render() {
      const { status, inputValue } = this.state
      return (
        <div className="App">

          {/** This input uses the controlled component pattern */}
          <form className="input-form" onSubmit={e => this.handleSubmit(e)}>

            {/**
            This pattern is used for input and other form elements
            Set the value of the input to a value held in component state
            Set the value held in component state when a change occurs at the input
            */}
            <h3>Enter Zip: </h3>
            <input
              className="input-box"
              value={inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              type="text"
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="enter zip"
            />
            <div className="unit-input">
              <input
                type="radio"
                id="imperial"
                name="unit"
                value="imperial"
                onChange={e => this.setState({ unit: 'imperial' })}
              />
              <label for="imperial">Imperial</label><br/>
              <input
                type="radio"
                id="metric"
                name="unit"
                value="metric"
                onChange={e => this.setState({ unit: 'metric' })}
              />
              <label for="metric">Metric</label><br/>
            </div>

            <button className="zip-button" type="submit">Submit</button>

          </form>
          {/** Conditionally render this component */}
          {this.renderWeather()}

          <div className="app-status">
            App status: {status}
          </div>

        </div>
      );
    }
}

export default Weather