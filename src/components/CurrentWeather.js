import React from 'react'
import PropTypes from 'prop-types'

const CurrentWeather = props => {
  return (
    <main class="mars-current-weather" >
      <h1 class="main-title">Latest weather at Elysium Plantitia</h1>
      <div class="date">
        <h2 class="section-title section-title--date">Sol 377</h2>
        <p class="date__day">September 18</p>
      </div>
      <div class="temperature">
        <h2 class="section-title">Temperature</h2>
        <p class="reading">High: -20°C</p>
        <p class="reading">Low: -180°C</p>
      </div>
      <div class="wind">
        <h2 class="section-title">Wind</h2>
        <p class="reading">75 kph</p>

        <div class="wind__direction">
          <p class="sr-only">45 degrees</p>
          <div class="wind__arrow"></div>
        </div>
      </div>
      <div class="info">
        <p>Insight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Plantitia,
          a flat smooth crater near Mars' equator</p>

        <p>This is only part of insights mission. <a href="https://mars.nasa.gov/insight/mission/overview">Click here</a> to find out more</p>
      </div>
      <div class="unit">
        <label for="cel">°C</label>
        <input type="radio" id="cel" name="unit" checked />
        <button class="unit__toggle" />
        <label for="fah">°F</label>
        <input type="radio" id="fah" name="unit" />
      </div>
    </main>
  )
}

CurrentWeather.propTypes = {

}

export default CurrentWeather
