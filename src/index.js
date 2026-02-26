// src/index.js
import "./styles.css";
import { init } from "./utils/weather-function.js";
import { renderWeather } from "./utils/dom.js";

const input = document.getElementById("location-input");

const submit = document.querySelector(".location-form");

submit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = input.value;
  if (!userInput) return console.log("please enter "); //must make a error popup when user dont input
  //must handle error from api

  const data = await init(userInput);
  renderWeather(data);
});
