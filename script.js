const apiKey = 'e8301ca7ae5c9f2e808b2d403c68a4fb';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

// Assuming you have defined 'searchButton', 'locationInput', and 'fetchWeather' elsewhere in your code

// Function to fetch weather data
function handleSearch() {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
}

// Add event listener for click event
searchButton.addEventListener('click', handleSearch);

// Add event listener for keypress event
locationInput.addEventListener('keypress', (event)=> {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === 'Enter') {
        handleSearch();
    }
});


function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}