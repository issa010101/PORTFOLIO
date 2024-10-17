import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sun, Cloud, CloudRain, Wind, Droplet, Thermometer } from 'lucide-react';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
  name: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'abcddcc7f28b0b3f68bc2137d3f6db83'; 

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value); // Accessing value correctly
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('Please enter a city name.'); // Input validation
      return;
    }
    fetchWeather();
  };

  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="w-16 h-16 text-gray-400" />;
      case 'rain':
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      default:
        return <Sun className="w-16 h-16 text-yellow-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Weather App</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex">
            <input
              type="text"
              value={city}
              onChange={handleInputChange} // Using the separate handler
              placeholder="Enter city name"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-red-300 text-center">{error}</p>}

        {weatherData && (
          <div className="text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold">{weatherData.name}</h2>
              {getWeatherIcon(weatherData.weather[0].main)}
            </div>
            <p className="text-5xl font-bold mb-4">{Math.round(weatherData.main.temp)}°C</p>
            <p className="mb-2">{weatherData.weather[0].description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                <span>Feels like: {Math.round(weatherData.main.feels_like)}°C</span>
              </div>
              <div className="flex items-center">
                <Wind className="w-5 h-5 mr-2" />
                <span>Wind: {weatherData.wind.speed} m/s</span>
              </div>
              <div className="flex items-center">
                <Droplet className="w-5 h-5 mr-2" />
                <span>Humidity: {weatherData.main.humidity}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
