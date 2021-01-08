import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PreviousDay from './PreviousDay'

const PreviousWeather = ({ weatherData }) => {

  const [showWeather, setShowWeather] = useState('false');

  const togglePrevWeather = () => {
    setShowWeather(!showWeather);
  }

  return (
    <div className={`previous-weather` + (showWeather ? '' : ' show-weather')} onClick={togglePrevWeather}>
      <button label="weather-toggle" className='show-previous-weather' >
        <span> &#8593;</span>
        <span className="sr-only">Show previous weather</span>
      </button>
      <h2 className="main-title previous-weather__title">
        Previous 7 days</h2>

      <div className="previous-days">
        {
          weatherData.map((daydata, index) => {
            return <PreviousDay key={index} dailyData={daydata} />
          })
        }
      </div>
    </div>
  )
}

PreviousWeather.propTypes = {
  weatherData: PropTypes.array.isRequired,
}

export default PreviousWeather
