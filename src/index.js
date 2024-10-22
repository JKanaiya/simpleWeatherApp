import "./styles.css";
import { getWeather } from "./getWeather";

document.querySelector("button").addEventListener("click", () => getWeather());
