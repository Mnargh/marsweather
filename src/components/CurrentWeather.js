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


  const [isCelsius, setIsCelsius] = useState('true');

  function changeTempUnits() {
    setIsCelsius(!isCelsius)
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
        <p className="reading">High: {maxTemp}°C</p>
        <p className="reading">Low: -{minTemp}°C</p>
      </div>
      <div className="wind">
        <h2 className="section-title">{console.log(isCelsius)}Wind</h2>
        <p className="reading"> {avWindSpeed} kph</p>
        <p className="reading"> {windDirectionCardinal}</p>

        <div className="wind__direction">
          <p className="sr-only">{windDirectionDeg} degrees</p>
          <div className="wind__arrow" style={{ "--direction": `${windDirectionDeg}deg` }}></div>
        </div>
      </div>
      <div className="info">
        <p>Insight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Plantitia,
          a flat smooth crater near Mars' equator</p>

        <p>This is only part of insights mission. <a href="https://mars.nasa.gov/insight/mission/overview">Click here</a> to find out more</p>
      </div>
      <div className="unit">
        <label for="cel" >°C</label>
        <button className="unit__toggle" onClick={() => {
          changeTempUnits()
        }} >
          <div className={`temp-btn-slider${isCelsius ? '-celsius' : '-fahrenheit'}`} />
        </button>
        <label for="fah">°F</label>
      </div>
    </main >
  )
}

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
}

export default CurrentWeather
