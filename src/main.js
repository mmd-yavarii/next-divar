import applyDayNightTheme from "./utils/helper.js";
import req from "./utils/httpRequest.js";

const cityNode = document.querySelector("#loacation");
const tempertureNode = document.querySelector("#temperture");
const maxTempNode = document.querySelector("#max-temp");
const minTempNode = document.querySelector("#min-temp");
const humidityNode = document.querySelector("#humidity");
const imgNode = document.querySelector("#weather-icon");
const inp = document.querySelector("#search-inp");

// render
const handle = async (cityName) => {
  const res = await req(cityName);
  cityNode.innerText = `${res.sys.country} / ${res.name}`;
  tempertureNode.innerText = Math.round(res.main.temp);
  maxTempNode.innerText = res.main.temp_max;
  minTempNode.innerText = res.main.temp_min;
  humidityNode.innerText = res.main.humidity;
  imgNode.src = `https://openweathermap.org/img/w/${res.weather[0].icon}.png`;
};

// search city ans set its weather immediatly
const inpHandler = async (event) => {
  try {
    const value = event.target.value; // دریافت مقدار ورودی
    await handle(value); // فراخوانی تابع handle با مقدار ورودی
  } catch (error) {
    console.error("Error occurred:", error); // نمایش خطا در کنسول
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyDayNightTheme();
  handle("london");
  inp.addEventListener("keyup", inpHandler);
});
