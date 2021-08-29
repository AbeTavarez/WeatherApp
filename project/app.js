console.log(`running script...`);

//* =============== VARIABLES

// gets search button from the DOM
const searchBtn = document.querySelector('button');
// gets city input from the DOM 
const city = document.getElementById('city')





//* ================== FUNCTIONS
const searchWeather = () => {
    const cityName = city.value;

    // Check for city name
    if (cityName.trim().length === 0){
        return alert(`Please enter a city name!`)
    }
    // ================ HTTP Request
    const http = new XMLHttpRequest();
    const apiKey = '';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const method = 'GET';
    // ========= connection
    http.open(method, url);
    http.onreadystatechange = () => {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
            const data = JSON.parse(http.responseText);
            console.log(data);
        } else if (http.readyState === XMLHttpRequest.DONE){
            alert(`error...`);
        }
    }
}




//* ================== EVENT LISTENERS
// add event listener to  
searchBtn.addEventListener('click', searchWeather)

