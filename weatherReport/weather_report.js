function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const unit = document.getElementById('unit').value;
    console.log(unit);
    switch (unit) {
        case 'standard':
            unitText = 'K';
            break;
        case 'metric':
            unitText = '&degC';
            break;
        case 'imperial':
            unitText = '&degF';
            break;
        default:
            unitText = 'K';
    }
    console.log(unitText);
    const apiKey = 'b9468d056c9459d5790ea372e93e9ee3'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
    console.log(apiUrl)

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} ${unitText}</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

// Add event listener for form submit
document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails );