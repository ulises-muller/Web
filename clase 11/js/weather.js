const apikey = '3863e52dc3c1e6359b91176be3eca46b'


// nos traemos las weas

const weatherLocationHTML = document.getElementById('weather-location')
const weatherTempHTML = document.querySelector('#weather-temp')
const weatherIconHTML = document.querySelector('#weather-icon')

const weatherDateTimeHTML = document.getElementById('weather-datetime-container')

const btnSaveHTML = document.getElementById('weather-save')
const inputSearch = document.getElementById('weather-search')

// fin de contenedores

function getWatherByCity(ciudad){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`
    fetch(URL)
        .then(respuesta=> respuesta.json())
            .then((respuestaJson)=>{
                console.log(respuestaJson)
                updateWeatherWidget(respuestaJson)

            })
            .catch((error)=>{
                console.log(error)
            })
}

function updateWeatherWidget(data){
    weatherLocationHTML.innerText = data.name //fijarse en la consola como se llama
    weatherTempHTML.innerText = data.main.temp + ' °c'
    const icon = data.weather[0].icon
    weatherIconHTML.innerHTML = `<img class="iconoo" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icono">`
}
inputSearch.addEventListener('keyup', (evento)=>{
    if (evento.key === "Enter"){
        const ciudad = evento.target.value
        getWatherByCity(ciudad)
    }
})

btnSaveHTML.addEventListener("click", ()=>{

    const cityName = weatherLocationHTML.innerText

    localStorage.setItem("weatherCity", JSON.stringify(cityName))

    
})
function getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(
        (posicion) => {
            console.log(posicion);
            const lat = posicion.coords.latitude
            const lon = posicion.coords.longitude
            getWatherByCoordinates(lat,lon)           
        },
        (error) => {

            console.log(error);
            const citySaved = JSON.parse(localStorage.getItem("weatherCity")) || "Buenos aires"
            getWatherByCity(citySaved)
        }
    )
}
function getWatherByCoordinates(latitude, longitude){
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
    fetch(URL)
        .then(respuesta => respuesta.json())
            .then((respuestaJson)=>{
                updateWeatherWidget(respuestaJson)
            })
            .catch(error=>{
                console.log(error);
            })
}
getCurrentLocation()
