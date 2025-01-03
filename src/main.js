import applyDayNightTheme from "./utils/helper.js";
import req from "./utils/httpRequest.js";

const cityNode = document.querySelector("#loacation");
const tempertureNode = document.querySelector("#temperture");
const maxTempNode = document.querySelector("#max-temp");
const minTempNode = document.querySelector("#min-temp");
const humidityNode = document.querySelector("#humidity");
const imgNode = document.querySelector("#weather-icon");

const handle = async (cityName) => {
  const res = await req(cityName);

  cityNode.innerText = `${res.sys.country} / ${res.name}`;
  tempertureNode.innerText = Math.round(res.main.temp);
  maxTempNode.innerText = res.main.temp_max;
  minTempNode.innerText = res.main.temp_min;
  humidityNode.innerText = res.main.humidity;
  imgNode.src = `https://openweathermap.org/img/w/${res.weather[0].icon}.png`;
};

document.addEventListener("DOMContentLoaded", () => {
  applyDayNightTheme();
  handle("london");
});
