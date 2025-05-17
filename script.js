const apiKey = '79705611a8b7413f527fa00203551b55'; // Replace with your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const btn = document.getElementById('search-btn');
const select = document.getElementById('city-select');
const result = document.getElementById('weather-result');

// Fetch weather for the selected city on button click
btn.addEventListener('click', () => {
    const city = select.value;
    getWeather(city);
});

// Optionally, fetch weather immediately for the first city
window.addEventListener('DOMContentLoaded', () => {
    getWeather(select.value);
});

async function getWeather(city) {
    result.textContent = 'Loading...';
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        result.innerHTML = `
      <strong>${data.name}, ${data.sys.country}</strong><br>
      ${data.weather[0].main} - ${data.weather[0].description}<br>
      Temp: ${data.main.temp}&deg;C<br>
      Humidity: ${data.main.humidity}%
    `;
    } catch (err) {
        result.textContent = 'Could not get weather data. Please try again.';
    }
}