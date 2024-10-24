import sunny from "./images/pexels-jimbear-1117403.jpg";
import cloudy from "./images/pexels-joshsorenson-1154510.jpg";
import rain from "./images/pexels-hikaique-125510.jpg";
import partlyCloudy from "./images/pexels-pixabay-158827.jpg";

const Display = (function () {
  const clearIcons = function () {
    [...document.querySelector("#icons").children].forEach((child) => {
      child.classList.add("inactive");
    });
  };
  const displayToday = function (temperature, timeZone, celsius, feelsLike) {
    if (celsius) {
      document.querySelector("#temp").textContent = `${temperature} ℃`;
      document.querySelector(
        "#feels"
      ).textContent = `Feels like: ${feelsLike} ℃`;
    } else {
      document.querySelector("#temp").textContent = `${temperature} °F`;
      document.querySelector(
        "#feels"
      ).textContent = `Feels like: ${feelsLike} °F`;
    }
    document.querySelector("#locationTitle").textContent = timeZone;
  };

  const displayTmr = function (temperature, timeZone, celsius) {
    if (celsius) {
      document.querySelector("#tmrTemp").textContent = `${temperature} ℃`;
    } else {
      document.querySelector("#tmrTemp").textContent = `${temperature} °F`;
    }
  };

  const displayWeek = function (dataArray, celsius) {
    console.log(dataArray);
    for (
      let i = 0;
      i < [...document.querySelector("#week").children].length;
      i++
    ) {
      const temp = document.querySelector(`#week :nth-child(${i + 1}) h3`);
      if (celsius) {
        temp.textContent = `${dataArray[i].temp} ℃`;
      } else {
        temp.textContent = `${dataArray[i].temp} °F`;
      }
    }
  };
  const setRain = function () {
    clearIcons();
    document.querySelector("#bgImg").style.backgroundImage = `url(${rain})`;
    document.querySelector("#rain").classList.toggle("inactive");
  };
  const setSunny = function () {
    clearIcons();
    document.querySelector("#bgImg").style.backgroundImage = `url(${sunny})`;
    document.querySelector("#sunny").classList.toggle("inactive");
  };
  const setCloudy = function () {
    clearIcons();
    document.querySelector("#bgImg").style.backgroundImage = `url(${cloudy})`;
    document.querySelector("#cloudy").classList.toggle("inactive");
  };
  const setPartial = function () {
    clearIcons();
    document.querySelector(
      "#bgImg"
    ).style.backgroundImage = `url(${partlyCloudy})`;
    document.querySelector("#partly").classList.toggle("inactive");
  };
  const toggleActive = function (celsius) {
    const cel = document.querySelector("#celsius");
    const far = document.querySelector("#faren");
    if (celsius) {
      far.style.backgroundColor = "gray";
      cel.style.backgroundColor = "white";
    } else {
      far.style.backgroundColor = "white";
      cel.style.backgroundColor = "gray";
    }
  };
  return {
    setRain,
    displayToday,
    displayTmr,
    setPartial,
    setSunny,
    displayWeek,
    setCloudy,
    toggleActive,
  };
})();
export default Display;
