import "./styles.css";
import Display from "./Display";
import { getWeather } from "./getWeather";

let celsius = true;
Display.toggleActive(celsius);

document.querySelector("#searchCountry").value = "Kenya";

getWeather(celsius);

document.querySelector("#celsius").addEventListener("click", () => {
  celsius = true;
  Display.toggleActive(celsius);
  getWeather(celsius);
}),
  { once: true };

document.querySelector("#faren").addEventListener("click", () => {
  celsius = false;
  Display.toggleActive(celsius);
  getWeather(celsius);
}),
  { once: true };

document
  .querySelector("#search")
  .addEventListener("click", () => getWeather(celsius));
