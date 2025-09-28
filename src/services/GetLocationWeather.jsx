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
    // console.log(locationCoordinates);

    if (
      !locationCoordinates.data.results ||
      locationCoordinates.data.results.length === 0
    ) {
      throw new Error("NOT_FOUND");
    }

    const { latitude, longitude, name, country } =
      locationCoordinates.data.results[0];

    // Getting weather data of the location;
    const locationWeather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation,relative_humidity_2m,cloudcover,weathercode`,
    );

    // console.log(locationWeather);
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
    };
  } catch (err) {
    if (err.message === "NOT_FOUND") {
      throw new Error("City or Country not found!");
    }
    throw new Error("check your internet connection!");
  }
};
