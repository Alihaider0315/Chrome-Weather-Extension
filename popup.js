let key = "2feb6efb5a9e84164308dcc5732eb53a";
document.addEventListener('DOMContentLoaded', function() {
    let getWeatherBtn = document.getElementById('get-weather-btn');
    getWeatherBtn.addEventListener('click', fetchWeatherData);
  });

  function fetchWeatherData() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`);
        const data = await response.json();
  
        const resultDiv = document.getElementById("result");
        if (resultDiv) {
          const weatherInfo = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
            </div>
          `;
  
          resultDiv.innerHTML = weatherInfo;
        }
  
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });
  }
  
  
  