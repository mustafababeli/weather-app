import "./styles.css";
import { init } from "./utils/weather-function.js";
import { renderWeather } from "./utils/dom.js";

const input = document.getElementById("location-input");
const submit = document.querySelector(".location-form");

const inputError = document.createElement("div");
inputError.classList.add("input-error-div");

const mainHeader = document.querySelector(".main-header");
mainHeader.appendChild(inputError);

const matchMsg = document.querySelector(".match-msg");

function clearWeather() {
  document.querySelector(".temp-showcase").textContent = "";
  document.querySelector(".conditions-showcase").textContent = "";
  const icon = document.querySelector(".icon-showcase");
  if (icon) icon.innerHTML = "";
}

function setMatchMessage(userInput, resolvedAddress) {
  const typed = userInput.trim().toLowerCase();
  const resolved = (resolvedAddress || "").toLowerCase();

  if (!resolvedAddress) {
    matchMsg.textContent = "";
    return;
  }

  if (resolved.includes(typed)) {
    matchMsg.textContent = `Showing weather for: ${resolvedAddress}`;
  } else {
    matchMsg.textContent = `Did you mean: ${resolvedAddress}?`;
  }
}

submit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userInput = input.value.trim();

  if (!userInput) {
    inputError.textContent = "Please enter a city name";
    matchMsg.textContent = "";
    clearWeather();
    return;
  }

  inputError.textContent = "";
  matchMsg.textContent = "";

  try {
    const data = await init(userInput);

    setMatchMessage(userInput, data.resolvedAddress);
    renderWeather(data);
  } catch (error) {
    inputError.textContent = error?.message || "Could not fetch weather";
    matchMsg.textContent = "";
    clearWeather();
    console.error(error);
  }
});
