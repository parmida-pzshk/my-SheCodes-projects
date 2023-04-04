console.log("parmida");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[now.getDay()];
let day = document.getElementById("day");
console.log(today);
day.innerHTML = today;
let hour = document.querySelector("#hour");
hour.innerHTML = now.getHours();
let minute = document.querySelector("#minute");
let currMinute = now.getMinutes();
if (currMinute < 10) {
  currMinute = `0${currMinute}`;
}
minute.innerHTML = currMinute;

let name = document.querySelector(".name");
let tempe = document.querySelector(".number");
let wind = document.querySelector(".wind");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let icon = document.querySelector(".icon");
let imgDiv = document.getElementById("img"); // access the image using id
let celsiusDeg = null;

function displayForecast() {
  let forecast = document.querySelector("#forecast");
  let forecastHtml = `<dive class="row">`;
  let days = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="col-2">
              <div class="weather-forecast-day">${day}</div>
              <img
              id="img"
              src="http://openweathermap.org/img/wn/01n@2x.png"
              width="45px"
            />
            <div class="weather-forecast-temperature">
              <span class="weather-forecast-temperature-max" >18</span>°
              <span class="weather-forecast-temperature-min">12</span>°
            </div>
            </div>
          </div>`;
  });
  forecastHtml = forecastHtml + `</div>`;
  forecast.innerHTML = forecastHtml;
}
function getForecast(name) {
  console.log(name);
  let apiKey = "o2b3t3ea0c2f4ee01156dffb489a3479";
  let apiRes = `https://api.shecodes.io/weather/v1/forecast?query=${name}&key=${apiKey}`;
  axios.get(apiRes).then(displayForecast);
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#inputCity");
  let editedInput = input.value.charAt(0).toUpperCase() + input.value.slice(1);
  name.innerHTML = editedInput;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiRes = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  function temp(response) {
    let currTemp = Math.round(response.data.main.temp);
    console.log(response.data);
    celsiusDeg = response.data.main.temp;
    let tempe = document.querySelector(".number");
    let wind = document.querySelector(".wind");
    tempe.innerHTML = currTemp;
    let currWind = Math.round(response.data.wind.speed);
    wind.innerHTML = currWind;
    let editedDescription =
      response.data.weather[0].description.charAt(0).toUpperCase() +
      response.data.weather[0].description.slice(1);
    description.innerHTML = editedDescription;
    let iconNew = response.data.weather[0].icon;
    console.log(iconNew);
    let imgDiv = document.getElementById("img"); // access the image using id
    imgDiv.src = `http://openweathermap.org/img/wn/${iconNew}@2x.png`;
    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = response.data.main.humidity;
    getForecast(response.data.name);
  }

  function getTemp() {
    axios.get(apiRes).then(temp);
  }

  getTemp();
}
function noFunc(eventr) {
  eventr.preventDefault();
}
function showFahren(event) {
  event.preventDefault();
  let tempe = document.querySelector(".number");
  tempe.innerHTML = Math.round(celsiusDeg * 1.8 + 32);
  document.getElementById("fahrenheit").style.color = "#272142";
  document.getElementById("cel").style.color = "#0d6efd";
}
function showCel(event) {
  event.preventDefault();
  let tempe = document.querySelector(".number");
  tempe.innerHTML = Math.round(celsiusDeg);
  document.getElementById("cel").style.color = "#272142";
  document.getElementById("fahrenheit").style.color = "#0d6efd";
}
let form = document.querySelector(".btn");
form.addEventListener("click", searchCity);
let formMain = document.querySelector(".form-control");
formMain.addEventListener("submit", noFunc);
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahren);
let celLink = document.querySelector("#cel");
celLink.addEventListener("click", showCel);
