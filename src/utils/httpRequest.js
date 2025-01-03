const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "499c292d14a9aa09e8d2c2692d20561a";

export default async function req(cityName) {
  const URL = `${BASE_URL}?q=${cityName}&units=metric&lang=fa&appid=${API_KEY}`;
  const res = await fetch(URL);
  const result = await res.json();
  return result;
}
