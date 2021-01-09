import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CurrentWeather = ({ weatherData: {
  sol,
  maxTemp,
  minTemp,
  avWindSpeed,
  windDirectionDeg,
  windDirectionCardinal,
  date
} }) => {


  const [isMetric, setIsMetric] = useState('true');


  const formatUnits = () => {
    setIsMetric(!isMetric)
  }

  const formatTemp = (temperature) => {
    return isMetric ? Math.round(temperature) : Math.round((temperature * (9 / 5)) + 32) // to fahrenheit
  }

  const formatWind = (windSpeed) => {
    // convert m/s to kmh and mph
    return isMetric ? Math.round(windSpeed * 2.236) : Math.round(windSpeed * 3.6)
  }

  return (
    <main className="mars-current-weather" >
      <h1 className="main-title">Latest weather at Elysium Plantitia</h1>
      <div className="date">
        <h2 className="section-title section-title--date">
          Sol {sol}</h2>
        <p className="date__day"> {date}</p>
      </div>
      <div className="temperature">
        <h2 className="section-title">Temperature</h2>
        <p className="reading">High: {formatTemp(maxTemp)}°{isMetric ? 'C' : 'F'}</p>
        <p className="reading">Low: {formatTemp(minTemp)}°{isMetric ? 'C' : 'F'}</p>
      </div>
      <div className="wind">
        <h2 className="section-title">Wind</h2>
        <p className="reading"> {formatWind(avWindSpeed)} {isMetric ? 'kmh' : 'mph'}</p>
        <p className="reading"> {windDirectionDeg}° {windDirectionCardinal}</p>

        <div className="wind__direction">
          <p className="sr-only"></p>
          <div className="wind__arrow" style={{ "--direction": `${windDirectionDeg}deg` }}></div>
        </div>
      </div>
      <div className="info">
        <p>Insight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Plantitia,
          a flat smooth crater near Mars' equator</p>

        <p>This is only part of insights mission. <a href="https://mars.nasa.gov/insight/mission/overview">Click here</a> to find out more</p>
      </div>
      <div className="unit">
        <label >°C</label>
        <button className="unit__toggle" onClick={() => {
          formatUnits()
        }} >
          <div className={`temp-btn-slider${isMetric ? '-celsius' : '-fahrenheit'}`} />
        </button>
        <label>°F</label>
      </div>
    </main >
  )
}

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
}

export default CurrentWeather
