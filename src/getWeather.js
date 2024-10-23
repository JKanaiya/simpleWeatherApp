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

    if (!celsius) {
      days.forEach((day) => {
        const { temp, icon } = day;
        subData.push({ temp, icon });
      });
    } else {
      days.forEach((day) => {
        day.temp = ((day.temp - 32) / 1.8).toFixed(1);
        const { temp, icon } = day;
        subData.push({ temp, icon });
      });
    }
    console.log(subData, timezone);

    console.log(subData[0].icon);

    console.log(subData[0].icon.includes("cloudy"));

    const dData = subData[0].icon;

    if (dData.includes("rain")) {
      Display.setRain();
    }
    if (dData.includes("cloudy")) {
      Display.setCloudy();
    }
    if (dData.includes("clear")) {
      Display.setSunny();
    }
    if (dData.includes("partly")) {
      Display.setPartial();
    }

    Display.displayToday(subData[0].temp, timezone, celsius);

    Display.displayTmr(subData[1].temp, timezone, celsius);

    Display.displayWeek(subData, celsius);

    console.log(subData[0].temp, timezone);
  } catch (err) {
    console.log(err);
  }
};

export { getWeather };
