const apiKey = "b574613892522cac54eb96e3ccddbb6f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

searchBtn.addEventListener("click", () => {
  verificaClima(searchBox.value)
})

async function verificaClima(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  let data = await response.json()

  console.log(data)

  document.querySelector(".city").innerHTML = data.name
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
  document.querySelector(".wind").innerHTML = `${Math.round(data.wind.speed)} km/h`


  if(data.weather[0].main == 'Clouds') weatherIcon.src = 'images/clouds.png'
  if(data.weather[0].main == 'Clear') weatherIcon.src = 'images/clear.png'
  if(data.weather[0].main == 'Drizzle') weatherIcon.src = 'images/drizzle.png'
  if(data.weather[0].main == 'Rain') weatherIcon.src = 'images/rain.png'
  if(data.weather[0].main == 'Mist') weatherIcon.src = 'images/mist.png'
  
}
