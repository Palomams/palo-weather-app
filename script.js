let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];
let months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `Sepetmber`,
  `October`,
  `November`,
  `December`,
];
let month = months[now.getMonth()];

h2.innerHTML = `${day}, ${month} ${date}, ${year}, ${hours}: ${minutes}`;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function Weather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h4").innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let endPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${endPoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(Weather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
