//weather func mosule.js
const API_KEY = "D2Q4BZW2X56JYN6VFYABLL67Q";

async function getWeather(userInput) {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput}?unitGroup=metric&key=${API_KEY}`,
  );

  const result = await data.json();

  const weather = {
    temp: result.currentConditions.temp,
    conditions: result.currentConditions.conditions,
  };
  return weather;
}

export async function init(userInput) {
  const data = await getWeather(userInput);
  return data;
}
