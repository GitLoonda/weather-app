import { useState } from 'react'
import './App.css'
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState(''); // 검색어
  const [weather, setWeather] = useState(null); // 날씨 데이터 null 값이 비었음을 명시적 선언
  const [errFlg, setErrFlg] = useState(false);

  // 날씨 요청 함수
  const fetchWeather = () => {
    
    const apiKey = 'Put your API KEY here';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())  // json포맷으로 변환
      .then(data => {
        if(data.cod === '404') {
          setWeather(null);
          setErrFlg(true);
          return;
        }
        setWeather(data);
        setErrFlg(false);
        console.log(weather);
      })
      .catch(() => {
        console.log('error');
      })
  }

  const handleLocationOnChange = (e) => {
    setLocation(e.target.value);
  }

  const handleWeatherSearch = (e) => {
    // 전송 이벤트 취소(새로고침 방지)
    e.preventDefault();
    console.log(`${location} 검색어로 검색 : `);
    fetchWeather();
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
        <Search 
          handleWeatherSearch={handleWeatherSearch}
          handleLocationOnChange={handleLocationOnChange}
          location={location}
          errFlg={errFlg}
        />
        <Weather
          weather={weather}
        />  
     
    </div>
  )
}

export default App
