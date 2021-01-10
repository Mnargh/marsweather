import './styling/main.scss';
import React, { useEffect, useState } from 'react';
import CurrentWeather from '../src/components/CurrentWeather';
import PreviousWeather from '../src/components/PreviousWeather';

function App() {

  const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

  const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`

  const [weatherData, setWeatherData] = useState(
    [{
      sol: '',
      maxTemp: '',
      minTemp: '',
      avWindSpeed: '',
      windDirectionDeg: '',
      windDirectionCardinal: '',
      date: ''
    }
    ])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(undefined,
      {
        day: 'numeric',
        month: 'long'
      })
  }

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
              ...(sol ? { sol: sol } : { sol: 5 }),
              ...(data.AT ? { maxTemp: data.AT.mx } : { maxTemp: 50 }),
              ...(data.AT ? { minTemp: data.AT.mn } : { minTemp: 5 }),
              ...(data.HWS ? { avWindSpeed: data.HWS.av } : { avWindSpeed: 30 }),
              ...(data.WD.most_common ? { windDirectionDeg: data.WD.most_common.compass_degrees } : { windDirectionDeg: 40 }),
              ...(data.WD.most_common ? { windDirectionCardinal: data.WD.most_common.compass_point } : { windDirectionCardinal: 'SE' }),
              ...(data.First_UTC ? { date: formatDate(data.First_UTC) } : { date: 60 }),
            }
            return pickedData;
          }
        )
        console.log(NASA_API_KEY)
        setWeatherData(temp);
      })
  }, [API_URL])

  return (
    <div className="App">
      <CurrentWeather weatherData={weatherData[(weatherData.length - 1)]} />
      <PreviousWeather weatherData={weatherData} />
    </div>
  );
}

export default App;
