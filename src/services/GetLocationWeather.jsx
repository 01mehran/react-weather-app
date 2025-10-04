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
    // console.log(locationCoordinates)

    const { latitude, longitude, name, country } =
      locationCoordinates.data.results[0];

    const locationWeather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation,relative_humidity_2m,cloudcover,weathercode,temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=16`,
    );

    const data = locationWeather.data;
    const currentWeather = data.current_weather;
    const windSpeed = currentWeather.windspeed;
    const weatherCode = currentWeather.weathercode;
    const temperature = currentWeather.temperature;

    // ------- Humidiy & precipitation;
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

    const feelsLike = data.hourly.apparent_temperature;
    const feelsNow = Math.round(feelsLike[closestIndex]);

    // ------ Hourly foreCast ---------
    const today = new Date().getDate();

    const hourlyWeather = times
      .map((t, i) => {
        const todayDate = new Date(t);
        return {
          time: todayDate.getHours(),
          day: todayDate.getDate(),
          temperature: Math.round(data.hourly.temperature_2m[i]),
          weatherCode: data.hourly.weathercode[i],
        };
      })
      .filter((t) => t.day === today && t.time >= 12 && t.time <= 24);

      
    const specificTime = times
      .map((t, i) => {
        const todayDate = new Date(t);

        return {
          time: todayDate.getHours(),
          day: todayDate.getDate(),
          temperature: Math.round(data.hourly.temperature_2m[i]),
          weatherCode: data.hourly.weathercode[i],
        };
      })
      .filter(
        (t) => t.day === today && [7, 8, 11, 12, 13, 14].includes(t.time),
      );

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
      hourlyWeather,
      feelsNow,
      specificTime,
    };
  } catch (err) {
    if (err.message === "NOT_FOUND") {
      throw new Error("City or Country not found!");
    }
    throw new Error("check your internet connection!");
  }
};
