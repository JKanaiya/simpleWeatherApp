import "./styles.css";

document.querySelector("button").addEventListener("click", () => getWeather());

async function getWeather() {
  const w = document.querySelector("input").value;

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${w}?key=XZKP4PWEN6XB5C6TE8QLW2Z3V`,
    { mode: "cors" }
  )
    .then((response) => {
      if (response.ok) {
        console.log(response.json());
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch(() => {
      console.log("error");
    });
}
