import Display from "./Display";

const getWeather = async function () {
  const w = document.querySelector("input").value;

  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${w}?key=XZKP4PWEN6XB5C6TE8QLW2Z3V`,
      { mode: "cors" }
    );

    const cData = await data.json();

    const { days, timezone } = cData;
    const subData = [];
    days.forEach((e) => {
      const { temp, icon } = e;
      subData.push({ temp, icon });
    });
    console.log(subData, timezone);

    Display.displayToday(subData[0].temp, timezone);

    Display.displayTmr(subData[1].temp, timezone);

    Display.displayWeek(subData);

    console.log(subData[0].temp, timezone);
  } catch {
    console.log("error");
  }
};

export { getWeather };
