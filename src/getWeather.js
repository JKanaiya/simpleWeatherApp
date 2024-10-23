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
        let { temp, icon } = day;
        temp = ((temp - 32) / 1.8).toFixed(1);
        subData.push({ temp, icon });
      });
    }
    console.log(subData, timezone);

    Display.displayToday(subData[0].temp, timezone, celsius);

    Display.displayTmr(subData[1].temp, timezone, celsius);

    Display.displayWeek(subData, celsius);

    console.log(subData[0].temp, timezone);
  } catch (err) {
    console.log(err);
  }
};

export { getWeather };
