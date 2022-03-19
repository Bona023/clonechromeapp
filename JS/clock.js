const today = document.querySelector(".clock_today");
const clock = document.querySelector(".clock_now");

function getToday() {
    const now = new Date();
    const options = {
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    const todayMDD = new Intl.DateTimeFormat("en-UK", options).format(now);
    today.innerText = `${todayMDD}`;
}

getToday();
setInterval(getToday, 60000);

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
