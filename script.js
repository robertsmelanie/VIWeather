const apiKey = 'your_api_key_here'; // Replace with your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        console.log(`Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Example usage
getWeather('London');