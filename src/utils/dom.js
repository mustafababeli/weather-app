export function renderWeather(data) {
  const tempShowcase = document.querySelector(".temp-showcase");
  const conditionsShowcase = document.querySelector(".conditions-showcase");
  const iconShowcase = document.querySelector(".icon-showcase");

  conditionsShowcase.textContent = data.conditions;

  iconShowcase.innerHTML = `
    <img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${data.icon}.png"
         alt="${data.conditions}"
         width="80" />
  `;

  tempShowcase.textContent = `${data.temp} °C`;
}
