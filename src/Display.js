const Display = (function () {
  const displayToday = function (temperature, timeZone) {
    document.querySelector("#temp").textContent = temperature;
    document.querySelector("#location").textContent = timeZone;
  };
  const displayTmr = function (temperature, timeZone) {
    document.querySelector("#tmrTemp").textContent = temperature;
    document.querySelector("#tmrLocation").textContent = timeZone;
  };
  const displayWeek = function (dataArray) {
    const week = document.querySelector("#week");
    dataArray.forEach((day) => {
      const dayDiv = document.createElement("div");
      const desc = document.createElement("h2");
      desc.textContent = day.icon;
      const temp = document.createElement("h2");
      temp.textContent = day.temp;
      dayDiv.appendChild(desc);
      dayDiv.appendChild(temp);
      week.appendChild(dayDiv);
    });
  };
  return {
    displayToday,
    displayTmr,
    displayWeek,
  };
})();
export default Display;
