import "./styles.css";
import { getWeather } from "./getWeather";

let celsius = true;

document.querySelector("#celsius").addEventListener("click", () => {
  celsius = true;
  getWeather(celsius);
});

document.querySelector("#faren").addEventListener("click", () => {
  celsius = false;
  getWeather(celsius);
});

document
  .querySelector("#search")
  .addEventListener("click", () => getWeather(celsius));
