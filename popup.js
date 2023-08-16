let key = "2feb6efb5a9e84164308dcc5732eb53a";

document.addEventListener('DOMContentLoaded', function() {
  let searchBtn = document.getElementById('search-btn');
  let getWeatherBtn = document.getElementById('get-weather-btn');
  
  searchBtn.addEventListener('click', searchWeather);
  getWeatherBtn.addEventListener('click', fetchWeatherData);
});

function searchWeather() {
  const searchInput = document.getElementById('search-input');
  const city = searchInput.value.trim();

  if (city === '') {
    return;
  }

  fetchWeather(city);
}

function fetchWeatherData() {
  fetch('http://ip-api.com/json')
    .then(response => response.json())
    .then(data => {
      const city = data.city;
      fetchWeather(city);
    })
    .catch(error => {
      console.error("An error occurred while fetching IP address information:", error);
    });
}

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(weatherData => {
      const result = document.getElementById("result");

      result.innerHTML = `
        <h2>${weatherData.name}</h2>
        <h4 class="weather">${weatherData.weather[0].main}</h4>
        <h4 class="desc">${weatherData.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
        <h1>${weatherData.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${weatherData.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${weatherData.main.temp_max}&#176;</h4>
            </div>
        </div>
      `;
    })
    .catch(error => {
      console.error("An error occurred while fetching weather data:", error);
    });
}



// Old Code 
// let key = "2feb6efb5a9e84164308dcc5732eb53a";
// document.addEventListener('DOMContentLoaded', function() {
//   let getWeatherBtn = document.getElementById('get-weather-btn');
//   if (getWeatherBtn) {
//     getWeatherBtn.addEventListener('click', fetchWeatherData);
//   }
// });

// async function fetchWeatherData() {
//   const city = prompt("Enter a city name:");
//   if (!city) {
//     return; // Do nothing if the user cancels the prompt
//   }

//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
//     const data = await response.json();

//     const resultDiv = document.getElementById("result");
//     if (resultDiv) {
//       const weatherInfo = `
//         <h2>${data.name}</h2>
//         <h4 class="weather">${data.weather[0].main}</h4>
//         <h4 class="desc">${data.weather[0].description}</h4>
//         <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
//         <h1>${data.main.temp} &#176;</h1>
//         <div class="temp-container">
//             <div>
//                 <h4 class="title">min</h4>
//                 <h4 class="temp">${data.main.temp_min}&#176;</h4>
//             </div>
//             <div>
//                 <h4 class="title">max</h4>
//                 <h4 class="temp">${data.main.temp_max}&#176;</h4>
//             </div>
//         </div>
//       `;

//       resultDiv.innerHTML = weatherInfo;
//     }

//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }