import sunny from "./images/pexels-jimbear-1117403.jpg";
import cloudy from "./images/pexels-pixabay-414659.jpg";
import rain from "./images/pexels-hikaique-125510.jpg";
import partlyCloudy from "./images/pexels-tugba-19754770.jpg";

const Display = (function () {
  const displayToday = function (temperature, timeZone, celsius) {
    if (celsius) {
      document.querySelector("#temp").textContent = `${temperature} ℃`;
    } else {
      document.querySelector("#temp").textContent = `${temperature} °F`;
    }
    document.querySelector("#locationTitle").textContent = timeZone;
  };

  const displayTmr = function (temperature, timeZone, celsius) {
    if (celsius) {
      document.querySelector("#tmrTemp").textContent = `${temperature} ℃`;
    } else {
      document.querySelector("#tmrTemp").textContent = `${temperature} °F`;
    }
    document.querySelector("#tmrLocation").textContent = timeZone;
  };

  const displayWeek = function (dataArray, celsius) {
    for (
      let i = 0;
      i < [...document.querySelector("#week").children].length;
      i++
    ) {
      const temp = document.querySelector(`#week :nth-child(${i + 1}) h3`);
      console.log(celsius);
      if (celsius) {
        temp.textContent = `${dataArray[i].temp} ℃`;
      } else {
        temp.textContent = `${dataArray[i].temp} °F`;
      }
    }
  };
  const setRain = function () {
    document.querySelector("#today").style.backgroundImage = `url(${rain})`;
  };
  const setSunny = function () {
    document.querySelector("#today").style.backgroundImage = `url(${sunny})`;
  };
  const setCloudy = function () {
    document.querySelector("#today").style.backgroundImage = `url(${cloudy})`;
  };
  const setPartial = function () {
    document.querySelector(
      "#today"
    ).style.backgroundImage = `url(${partlyCloudy})`;
  };
  return {
    setRain,
    displayToday,
    displayTmr,
    setPartial,
    setSunny,
    displayWeek,
    setCloudy,
  };
})();
export default Display;
