import React from 'react'

function Search({ handleLocationOnChange, handleWeatherSearch, location, errFlg }) {
  return (
    <form onSubmit={handleWeatherSearch}>
        <div className="input-group">
          <input 
            type="search" 
            value={location} 
            placeholder='위치를 입력'
            required
            onChange={handleLocationOnChange} />
          <button className="btn" type='submit'>검색</button>
        </div>
        {errFlg && (
          <p style={{'color':'red'}}>올바른 지역명이 아닙니다.</p>
        )}
      </form>
  )
}

export default Search