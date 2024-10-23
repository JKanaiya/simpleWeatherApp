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
  return {
    displayToday,
    displayTmr,
    displayWeek,
  };
})();
export default Display;
