// Libraries;
import axios from "axios";
import { WeatherCodeToDescription } from "../utils/WeatherCodeToDescription";

export const GetLocationWeather = async (city) => {
  if (!city) return null;

  try {
    // Getting geoGraphic coordinates location;
    const locationCoordinates = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    
    if (
      !locationCoordinates.data.results ||
      locationCoordinates.data.results.length === 0
    ) {
      throw new Error("NOT_FOUND");
    }

    const { latitude, longitude, name, country } =
      locationCoordinates.data.results[0];


    const apiMinDate = new Date("2025-06-29");
    const apiMaxDate = new Date("2025-10-15");
    const todayDate = new Date();

    let startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);
    if (startDate < apiMinDate) startDate = apiMinDate;

    let endDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0);
    if (endDate > apiMaxDate) endDate = apiMaxDate;

    startDate = startDate.toISOString().split("T")[0];
    endDate = endDate.toISOString().split("T")[0];
    // Getting weather data of the location;
    const locationWeather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation,relative_humidity_2m,cloudcover,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&start_date=${startDate}&end_date=${endDate}`,
    );    
    const data = locationWeather.data;
    const currentWeather = data.current_weather;
    const windSpeed = currentWeather.windspeed;
    const weatherCode = currentWeather.weathercode;
    const temperature = currentWeather.temperature;

    const times = data.hourly.time;
    const humidities = data.hourly.relative_humidity_2m;
    const precipitations = data.hourly.precipitation;

    let closestIndex = 0;
    let minDiff = Infinity;
    const currentTime = new Date(currentWeather.time).getTime();

    times.forEach((t, i) => {
      const diff = Math.abs(new Date(t).getTime() - currentTime);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    });

    const humidity = humidities[closestIndex];
    const precipitation = precipitations[closestIndex];

    const weatherDescription = WeatherCodeToDescription(weatherCode);

    // -------- Daily forecast --------//
    const dailyTimes = data.daily.time;
    const dailyMaxTemp = data.daily.temperature_2m_max;
    const dailyMinTemp = data.daily.temperature_2m_min;
    const dailyWeatherCode = data.daily.weathercode;

    const dailyForecast = dailyTimes.map((date, i) => ({
      date,
      day: new Date(date).getDate(),
      dayName: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
      maxTemp: dailyMaxTemp[i],
      minTemp: dailyMinTemp[i],
      weatherCode: dailyWeatherCode[i],
      weatherDescription: WeatherCodeToDescription(dailyWeatherCode[i]),
    }));
    
    

    return {
      city: name,
      country,
      currentWeather,
      windSpeed,
      temperature,
      weatherCode,
      humidity,
      precipitation,
      weatherDescription,
      dailyForecast,
    };
  } catch (err) {
    if (err.message === "NOT_FOUND") {
      throw new Error("City or Country not found!");
    }
    throw new Error("check your internet connection!");
  }
};
