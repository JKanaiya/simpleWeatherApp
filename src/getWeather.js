import Display from "./Display";

const getWeather = async function (celsius) {
  const w = document.querySelector("input").value;

  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${w}?key=XZKP4PWEN6XB5C6TE8QLW2Z3V`,
      { mode: "cors" }
    );

    const cData = await data.json();

    const { days, timezone } = cData;
    const subData = [];

    const toCelsius = function (target) {
      return ((target - 32) / 1.8).toFixed(1);
    };

    days.forEach((day) => {
      if (celsius) {
        day.temp = toCelsius(day.temp);
        day.feelslike = toCelsius(day.feelslike);
      }
      const { temp, icon, feelslike } = day;
      subData.push({ temp, icon, feelslike });
    });
    const dData = subData[0].icon;

    const setWFormat = function (dData) {
      if (dData.includes("rain")) {
        Display.setRain();
      } else if (dData.includes("partly")) {
        Display.setPartial();
      } else if (dData.includes("clear")) {
        Display.setSunny();
      } else {
        Display.setCloudy();
      }
    };

    setWFormat(dData);

    Display.displayToday(
      subData[0].temp,
      timezone,
      celsius,
      subData[0].feelslike
    );

    Display.displayTmr(subData[1].temp, timezone, celsius);

    Display.displayWeek(subData, celsius);

    console.log(subData[0].temp, timezone);
  } catch (err) {
    console.log(err);
    const dError = document.querySelector("#error");
    dError.style.display = "flex";
    document.querySelector("#eButton").addEventListener("click", () => {
      console.log("a");
      dError.style.display = "none";
    });
  }
};

export { getWeather };
