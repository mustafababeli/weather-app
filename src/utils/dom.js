export function renderWeather(data) {
  const tempShowcase = document.querySelector(".temp-showcase");
  tempShowcase.textContent = `${data.temp} °C`;

  const conditionsShowcase = document.querySelector(".conditions-showcase");
  conditionsShowcase.textContent = data.conditions;
}
