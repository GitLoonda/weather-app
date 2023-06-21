import React from 'react'

function Weather({ weather }) {
  return (
    <>
      {weather && (
            <div className="info">
              <h2>{weather.name}</h2>
              <p>현재온도 : {Math.round((weather.main.temp - 273.15)*10)/10}℃</p>
              <p>상세날씨 : {weather.weather[0].description}</p>
            </div>
      )}
    </>

  )
}

export default Weather