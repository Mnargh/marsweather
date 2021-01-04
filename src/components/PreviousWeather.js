import React from 'react'
import PropTypes from 'prop-types'
import PreviousDay from './PreviousDay'

const PreviousWeather = props => {
  return (
    <div class="previous-weather">
      <button for="weather-toggle" class='show-previous-weather'>
        <span> &#8593;</span>
        <span class="sr-only">Show previous weather</span>
      </button>
      <h2 class="main-title previous-weather__title">Previous 7 days</h2>

      <div class="previous-days">
        <PreviousDay />
        <PreviousDay />
        <PreviousDay />
        <PreviousDay />
        <PreviousDay />
        <PreviousDay />
        <PreviousDay />
      </div>
    </div>
  )
}

PreviousWeather.propTypes = {

}

export default PreviousWeather
