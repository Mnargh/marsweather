import React from 'react'
import PropTypes from 'prop-types'

const CurrentWeather = ({ weather: {
  sol,
  maxTemp,
  minTemp,
  avWindSpeed,
  windDirectionDeg,
  windDirectionCardinal,
  date
} }) => {

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
        <h2 className="section-title">Wind</h2>
        <p className="reading"> {avWindSpeed} kph</p>

        <div className="wind__direction">
          <p className="sr-only">{windDirectionDeg} degrees</p>
          <div className="wind__arrow"></div>
        </div>
      </div>
      <div className="info">
        <p>Insight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Plantitia,
          a flat smooth crater near Mars' equator</p>

        <p>This is only part of insights mission. <a href="https://mars.nasa.gov/insight/mission/overview">Click here</a> to find out more</p>
      </div>
      <div className="unit">
        <label >°C</label>
        <input type="radio" id="cel" name="unit" checked />
        <button className="unit__toggle" />
        <label >°F</label>
        <input type="radio" id="fah" name="unit" />
      </div>
    </main>
  )
}

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
}

export default CurrentWeather
