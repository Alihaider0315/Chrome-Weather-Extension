chrome.action.onClicked.addListener(() => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fetchWeatherData
    });
  });
  
  function fetchWeatherData() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`);
        const data = await response.json();
        
        // Process data and show it in the tab's content
  
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });
  }
  