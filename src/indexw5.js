import axios from "axios";
let name = document.querySelector(".name");
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#inputCity");
  name.innerHTML = input.value;
}
let form = document.querySelector(".form-inline");
form.addEventListener("submit", searchCity);

let now = new Date();
let day = document.querySelector(".day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.innerHTML = days[now.getDay()];
let hour = document.querySelector(".hour");
hour.innerHTML = now.getHours();
let minute = document.querySelector(".minute");
minute.innerHTML = now.getMinutes();
console.log(now.getHours());
console.log(now.getMinutes());
console.log(days[now.getDay()]);

let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
let inputCity = document.querySelector("#inputCity");
let city = inputCity.value;
let apiRes = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function temp(response) {
  console.log(response.data);
  let currTemp = Math.round(response.data.main.temp);
  let temp = document.querySelector(".number");
  temp.innerHTML = currTemp;
}
function getTemp() {
  axios.get(apiRes).then(temp);
}
