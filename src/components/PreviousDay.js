import React from 'react'
import PropTypes from 'prop-types'

const PreviousDay = ({ dailyData: {
  sol,
  maxTemp,
  minTemp,
  avWindSpeed,
  windDirectionDeg,
  windDirectionCardinal,
  date
} }) => {
  return (
    <div className="previous-day">
      <h3 className="previous-day__sol">Sol {sol}</h3>
      <p className="previous-day__date">{date}</p>
      <p className="previous-day__temp">High: {maxTemp}°C</p>
      <p className="previous-day__temp">Low: {minTemp}°C</p>
      <button className="previous-day__more-info">more info</button>
    </div>
  )
}

PreviousDay.propTypes = {
  dailyData: PropTypes.object.isRequired,
}

export default PreviousDay
