console.log(`running script...`);
// require(`dotenv`).config();

//* =============== VARIABLES

// gets search button from the DOM
const searchBtn = document.querySelector('button');
// gets city input from the DOM 
const city = document.getElementById('city');
// gets loading div
const loading = document.getElementById('loading');
// ========= Weather Box 
// gets weather div
const weatherBox = document.getElementById('weather');
const weatherCity = weatherBox.firstElementChild;
const weatherDescription = document.getElementById('weatherDescription');
const weatherTemperature = weatherBox.lastElementChild;

loading.style.display = 'none';
weatherBox.style.display = 'none';



//* ================== FUNCTIONS
const searchWeather = () => {
    // display loading element
    loading.style.display = 'block';
    // hides weather box before fetching another city weather
    weatherBox.style.display = 'none';
    const cityName = city.value;

    // Check for city name
    if (cityName.trim().length === 0){
        return alert(`Please enter a city name!`)
    }
    // ================ HTTP Request
    const http = new XMLHttpRequest();
    // const apiKey =  process.env.OPEN_WEATHER_API_KEY;
    const apiKey =  OPEN_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const method = 'GET';
    // ========= connection
    http.open(method, url);
    http.onreadystatechange = () => {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
            const data = JSON.parse(http.responseText);

            // Create instance of Weather Object
            const weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            // Update UI
            updateWeather(weatherData);
            console.log(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE){
            alert(`error...`);
        }
    };
    http.send();
}

const updateWeather = weatherData => {
    weatherCity.textContent = weatherData.cityName.toUpperCase();
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    // UI
    loading.style.display = 'none';
    weatherBox.style.display = 'block';
};


//* ================== EVENT LISTENERS
// add event listener to  search button
searchBtn.addEventListener('click', searchWeather)

