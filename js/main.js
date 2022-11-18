// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
let cityName = 'London'
let geo = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=1&appid=2bcb7be76a6327aeef106952bdf73c70`

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
        
    });
})




/* let lat = -5.07
let long = -42.77

let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`

console.log(url)

fetch(url)
.then((res2)=>{
  console.log(res2);
  return res2.json()
})
.then((data2)=> {
  console.log(data2)
}); */



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