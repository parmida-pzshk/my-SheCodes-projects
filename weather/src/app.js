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
let icon = document.querySelector(".icon");
let imgDiv = document.getElementById("img"); // access the image using id

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
    let tempe = document.querySelector(".number");
    let wind = document.querySelector(".wind");
    tempe.innerHTML = currTemp;
    let currWind = Math.round(response.data.wind.speed);
    wind.innerHTML = currWind;
    description.innerHTML = response.data.weather[0].description;
    let iconNew = response.data.weather[0].icon;

    console.log(iconNew);
    let imgDiv = document.getElementById("img"); // access the image using id
    imgDiv.src = `http://openweathermap.org/img/wn/${iconNew}@2x.png`;
  }

  function getTemp() {
    axios.get(apiRes).then(temp);
  }

  getTemp();
}
function noFunc(eventr) {
  eventr.preventDefault();
}
let form = document.querySelector(".btn");
form.addEventListener("click", searchCity);
let formMain = document.querySelector(".form-inline");
formMain.addEventListener("submit", noFunc);
