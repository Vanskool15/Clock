const apiKey = '555ce0686a2eced0bdb7103c51cad48b';
const city = 'Kidapawan'; // Replace with the desired city

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        const cityName =data.name;
        const temperature =Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        // Display weather information
        weatherDiv.innerHTML = `
            <h3>${cityName}</h3>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <img src="${icon}" alt="Weather Icon">
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });