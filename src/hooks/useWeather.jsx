import { useState, useEffect } from 'react';
import axios from 'axios';

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const apiKey = 'b2e583e3c9ab941c6983c1d3832c6c3b'; // Substitua por sua própria chave da API
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        setError('Não foi possível obter a previsão do tempo.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
}
