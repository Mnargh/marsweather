import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PreviousDay from './PreviousDay'

const PreviousWeather = props => {

  const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

  const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const {
          sol_keys,
          validity_checks,
          ...solData // gets remaining data
        } = data

        const temp = Object.entries(solData).map(
          ([sol, data]) => {

            const pickedData = {
              ...(sol ? { sol: sol } : { sol: null }),
              ...(data.AT ? { maxTemp: data.AT.mx } : { maxTemp: null }),
              ...(data.AT ? { minTemp: data.AT.mn } : { minTemp: null }),
              ...(data.HWS ? { avWindSpeed: data.HWS.av } : { avWindSpeed: null }),
              ...(data.WD.most_common ? { windDirectionDeg: data.WD.most_common.compass_degrees } : { windDirectionDeg: null }),
              ...(data.WD.most_common ? { windDirectionCardinal: data.WD.most_common.compass_point } : { windDirectionCardinal: null }),
              ...(data.First_UTC ? { date: new Date(data.First_UTC) } : { date: null }),
            }
            return pickedData;
          }
        )
      })
  }, [])

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
      <h2 className="main-title previous-weather__title">Previous 7 days</h2>

      <div className="previous-days">
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
