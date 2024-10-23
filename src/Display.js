const Display = (function () {
  const displayToday = function (temperature, timeZone) {
    // (Fahrenheit - 32) / 1.8
    document.querySelector("#temp").textContent = temperature;
    document.querySelector("#location").textContent = timeZone;
  };
  const displayTmr = function (temperature, timeZone) {
    document.querySelector("#tmrTemp").textContent = temperature;
    document.querySelector("#tmrLocation").textContent = timeZone;
  };
  const displayWeek = function (dataArray) {
    for (
      let i = 0;
      i < [...document.querySelector("#week").children].length;
      i++
    ) {
      const temp = document.querySelector(`#week :nth-child(${i + 1}) h3`);
      temp.textContent = dataArray[i].temp;
    }
  };
  return {
    displayToday,
    displayTmr,
    displayWeek,
  };
})();
export default Display;
