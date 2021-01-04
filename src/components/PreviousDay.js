import React from 'react'
import PropTypes from 'prop-types'

const PreviousDay = props => {
  return (
    <div className="previous-day">
      <h3 className="previous-day__sol">Sol 371</h3>
      <p className="previous-day__date">September 31</p>
      <p className="previous-day__temp">High: -20°C</p>
      <p className="previous-day__temp">Low: -180°C</p>
      <button className="previous-day__more-info">more info</button>
    </div>
  )
}

PreviousDay.propTypes = {

}

export default PreviousDay
