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

function showCel() {
  //alert("hi");
  let temp = document.querySelector(".number");
  temp.innerHTML = 23;
}

let element = document.querySelector("#celsius");
element.addEventListener("click", showCel);

function showFar() {
  //alert("hi");
  let temp = document.querySelector(".number");
  temp.innerHTML = 73.4;
}

let elementTwo = document.querySelector("#faren");
elementTwo.addEventListener("click", showFar);
