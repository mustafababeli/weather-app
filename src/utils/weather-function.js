// weather-function.js
const API_KEY = "D2Q4BZW2X56JYN6VFYABLL67Q";

async function getWeather(userInput) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
        userInput,
      )}?unitGroup=metric&key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const result = await response.json();

    if (!result.currentConditions) {
      throw new Error("Invalid weather data");
    }

    return {
      temp: result.currentConditions.temp,
      conditions: result.currentConditions.conditions,
      icon: result.currentConditions.icon,
      resolvedAddress: result.resolvedAddress || "",
    };
  } catch (error) {
    console.error("Weather fetch failed:", error);
    throw error;
  }
}

export function init(userInput) {
  return getWeather(userInput);
}
