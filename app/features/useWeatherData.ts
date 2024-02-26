import { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherType } from '../config/weatherType';
import { useAtom } from 'jotai';
import { weatherDataAtom } from '../config/url';



const useWeatherData = (url: string) => {
  const [weatherData, setWeatherData]:any = useAtom(weatherDataAtom);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (url != "") {
        try {
          setLoading(true);
          const response = await axios.get<WeatherType>(url);
          setWeatherData(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { weatherData, loading };
};

export default useWeatherData;
