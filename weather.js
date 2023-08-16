chrome.storage.local.get("weatherData", (result) => {
    const weatherData = result.weatherData;
  
    if (weatherData) {
      const resultDiv = document.getElementById("result");
  
      const weatherInfo = `
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
  
      resultDiv.innerHTML = weatherInfo;
    } else {
      console.log("No weather data found.");
    }
  });
  