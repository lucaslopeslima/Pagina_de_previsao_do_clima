// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m


function start(){
  let cityName = document.getElementById('city')
  console.log(cityName.value)
  let geo = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value},&limit=1&appid=2bcb7be76a6327aeef106952bdf73c70`
  if(cityName.value == ''){
    return
  }
  animateFront()
  console.log(cityName.value)

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
        setTemp(data2.current_weather.temperature)
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
function setTemp(temp){
        let tempetature = document.getElementById('temp')
        tempetature.innerText = temp.toFixed(0)
}
function setWindSpeed(wspeed){
        let windspeed = document.getElementById('windspeed')
        windspeed.innerText = wspeed //+ ' kmh'
}
function setWeather(code){
  console.log('code in')
  let setimg = document.getElementById('wheatherCodeIMG')
  let wheatherCodeTXT = document.getElementById('wheatherCodeTXT')
  console.log(wheatherCodeTXT)
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
    wheatherCodeTXT.innerText = 'Céu Limpo'
    
  }
  if(parcialnub.includes(code)){
    console.log('parcialnub')
    setimg.innerHTML = '<img src="img/icons/parcialnub.png" alt="">'
    wheatherCodeTXT.innerText = 'Parcial Nublado'
  }
  if(nublado.includes(code)){
    console.log('nublado')
    setimg.innerHTML = '<img src="img/icons/nublado.png" alt="">'
    wheatherCodeTXT.innerText = 'Nublado'
  }
  if(fog.includes(code)){
    chovisco.log('fog')
    setimg.innerHTML = '<img src="img/icons/fog.png" alt="">'
    wheatherCodeTXT.innerText = 'Neblina'
  }
  if(chuva.includes(code)){
    console.log('chuva')
    setimg.innerHTML = '<img src="img/icons/rain.png" alt="">'
    wheatherCodeTXT.innerText = 'Chuva'
  }
  if(neve.includes(code)){
    console.log('neve')
    setimg.innerHTML = '<img src="img/icons/snow.png" alt="">'
    wheatherCodeTXT.innerText = 'Neve'
  }
  if(tempestade.includes(code)){
    console.log('tempestade')
    setimg.innerHTML = '<img src="img/icons/stormrain.png" alt="">'
    wheatherCodeTXT.innerText = 'Tempestade'
  }
}

//ANIMATION FUNCTIONS

function animateFront(){
  let inputanim = document.querySelector('.input-wrap')
  inputanim.style.cssText = 'animation: inputSlide 1.5s ease-in-out .5s forwards;'
  let displayanim = document.querySelector('.display')
  displayanim.style.cssText = 'animation: displayOn 1.5s ease-in-out 2.5s forwards;'
  let svganim = document.querySelector('svg')
  svganim.style.cssText = 'animation: svgSlideUp .5s linear 4.5s forwards;'
  let pannelanim = document.querySelector('.pannel')
  pannelanim.style.cssText = 'animation: pannelUp 1.5s ease-out 2.5s forwards;'
  let latlonganim = document.querySelector('.lat-long')
  latlonganim.style.cssText = 'animation: latlong .5s linear 4.5s forwards;'
  let wspeedanim = document.querySelector('.windspeed')
  wspeedanim.style.cssText = 'animation: windspeed .5s linear 4.8s forwards;'
  let wcode = document.querySelector('.weathercode')
  wcode.style.cssText = 'animation: wheatercode .5s linear 5s forwards;'
}


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