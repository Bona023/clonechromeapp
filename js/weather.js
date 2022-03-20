const API_KEY = "dff2d9352e6009b5a8e6f8d6bc217053";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const wIcon = document.querySelector("#weather_icon");
            const icon = document.createElement("i");
            const weatherId = data.weather[0].id;
            if (weatherId >= 200 && weatherId < 300) {
                icon.setAttribute("class", "fa-solid fa-cloud-bolt fa-3x");
            } else if (weatherId >= 300 && weatherId < 400) {
                icon.setAttribute("class", "fa-solid fa-cloud-rain fa-3x");
            } else if (weatherId >= 500 && weatherId < 600) {
                icon.setAttribute("class", "fa-solid fa-umbrella fa-3x");
            } else if (weatherId >= 600 && weatherId < 700) {
                icon.setAttribute("class", "fa-regular fa-snowflake fa-3x");
            } else if (weatherId >= 700 && weatherId < 800) {
                icon.setAttribute("class", "fa-solid fa-smog fa-3x");
            } else if (weatherId == 800) {
                icon.setAttribute("class", "fa-solid fa-sun fa-3x");
            } else if (weatherId >= 801) {
                icon.setAttribute("class", "fa-solid fa-cloud fa-3x");
            }
            wIcon.appendChild(icon);
            const city = document.querySelector(".weather_city");
            const disc = document.querySelector(".weather_disc");
            const temp = document.querySelector(".weather_temp");
            city.innerText = data.name;
            disc.innerText = data.weather[0].main;
            temp.innerText = data.main.temp.toFixed(0) + " ℃";
        });
}

function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
