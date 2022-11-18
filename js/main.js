// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
let cityName = 'Teresina'
let geo = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=1&appid=2bcb7be76a6327aeef106952bdf73c70`
let lat = ''
let long = ''

function start(){


fetch(geo)
.then((res)=>{
    console.log(res)
    return res.json()
})
.then((data)=>{
    console.log(data)
    let lat = data[0].lat
    let long = data[0].lon
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`

    console.log(url)

    fetch(url)
    .then((res2)=>{
        console.log(res2);
        return res2.json()
    })
    .then((data2)=> {
        console.log(data2)
        console.log(lat.toFixed(2))
        console.log(long.toFixed(2))
        console.log(data2.current_weather)
        console.log(data2.current_weather.temperature + ' °C')
        console.log(data2.current_weather.windspeed + ' kmh')
        console.log(data2.current_weather.weathercode)
        setLatitude(lat.toFixed(2))
        setLongitute(long.toFixed(2))
        setWindSpeed(data2.current_weather.windspeed)
        setWeather(data2.current_weather.weathercode)
        
        
    });
})


} // FUNCTION START


// SET DATA TO DOM FUNCTIONS
function setLatitude(lat){
        let latitude = document.getElementById('lat')
        latitude.innerText = lat
}
function setLongitute(long){
        let longitute = document.getElementById('long')
        longitute.innerText = long
}
function setWindSpeed(wspeed){
        let windspeed = document.getElementById('windspeed')
        windspeed.innerText = wspeed + ' kmh'
}
function setWeather(code){
  console.log('code in')
  let setimg = document.getElementById('wheatherCodeIMG')
  const ceuaberto = [1]
  const parcialnub = [1,2]
  const nublado = [3]
  const fog = [45,48]
  const chovisco = [51,53,55,56,57]
  const chuva = [61,63,65,66,67]
  const neve = [71,73,75,77,80,81,82,85,86]
  const tempestade = [95,96,99]
  if(ceuaberto.includes(code)){
    console.log('ceuaberto')
    setimg.innerHTML = '<img src="img/icons/sun.png" alt="">'
    
  }
  if(parcialnub.includes(code)){
    console.log('parcialnub')
    setimg.innerHTML = '<img src="img/icons/parcialnub.png" alt="">'
  }
  if(nublado.includes(code)){
    console.log('nublado')
    setimg.innerHTML = '<img src="img/icons/nublado.png" alt="">'
  }
  if(fog.includes(code)){
    chovisco.log('fog')
    setimg.innerHTML = '<img src="img/icons/fog.png" alt="">'
  }
  if(chuva.includes(code)){
    console.log('chuva')
    setimg.innerHTML = '<img src="img/icons/rain.png" alt="">'
  }
  if(neve.includes(code)){
    console.log('neve')
    setimg.innerHTML = '<img src="img/icons/snow.png" alt="">'
  }
  if(tempestade.includes(code)){
    console.log('tempestade')
    setimg.innerHTML = '<img src="img/icons/stormrain.png" alt="">'
  }
}

//ANIMATION FUNCTIONS

//setDataToDOM()


/*
WMO Weather interpretation codes (WW)
Code	Description
0	        Clear sky <i class="fa-light fa-sun"></i>

1, 2, 3	    Mainly clear, partly cloudy, and overcast <i class="fa-regular fa-sun-cloud"></i>

45, 48	    Fog and depositing rime fog <i class="fa-regular fa-smog"></i>

51, 53, 55	Drizzle: Light, moderate, and dense intensity <i class="fa-duotone fa-raindrops"></i> <i class="fa-solid fa-cloud-drizzle"></i>
56, 57	    Freezing Drizzle: Light and dense intensity <i class="fa-duotone fa-temperature-snow"></i>

61, 63, 65	Rain: Slight, moderate and heavy intensity <i class="fa-duotone fa-umbrella"></i>
66, 67	    Freezing Rain: Light and heavy intensity 

71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	        Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent <i class="fa-solid fa-cloud-showers-heavy"></i>
85, 86	    Snow showers slight and heavy <i class="fa-solid fa-face-icicles"></i>

95 *	    Thunderstorm: Slight or moderate <i class="fa-duotone fa-cloud-bolt"></i>
96, 99 *	Thunderstorm with slight and heavy hail <i class="fa-duotone fa-cloud-bolt"></i>
*/