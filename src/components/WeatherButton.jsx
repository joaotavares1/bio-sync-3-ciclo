import React, { useState } from 'react';
import { Sun, Cloud, CloudRain, X } from 'lucide-react';
import { useWeather } from '../hooks/useWeather';

export default function WeatherButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { weather, loading, error } = useWeather('Matão'); 

  const getWeatherIcon = (weatherCode) => {
    if (weatherCode >= 200 && weatherCode < 600) return <CloudRain className="w-12 h-12 text-blue-2" />;
    if (weatherCode >= 600 && weatherCode < 700) return <Cloud className="w-12 h-12 text-gray-1" />;
    if (weatherCode === 800) return <Sun className="w-12 h-12 text-yellow-1" />;
    return <Cloud className="w-12 h-12 text-gray-1" />;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white-1 hover:text-yellow-300 transition-transform transform hover:scale-105 focus:outline-none"
        aria-label="Ver Previsão do Tempo"
      >
        <Sun size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black-1 opacity-95 rounded-lg p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white-1">Previsão do Tempo</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-1 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {loading && <p className="text-white-1">Carregando...</p>}
            {error && <p className="text-red-1">Erro ao carregar previsão: {error}</p>}
            {weather && (
              <div className="text-center">
                <h3 className="text-xl text-white-1 font-semibold mb-2">{weather.name}</h3>
                <div className="flex justify-center mb-4">
                  {getWeatherIcon(weather.weather[0].id)}
                </div>
                <p className="text-4xl text-white-1 font-bold mb-2">{Math.round(weather.main.temp)}°C</p>
                <p className="text-gray-600 text-white-1 capitalize">{weather.weather[0].description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
