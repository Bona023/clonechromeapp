const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#login-greeting");
const hello = document.querySelector(".hello");
const helloUser = document.querySelector(".hello-user");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const now = new Date();
    const hours = parseInt(now.getHours());
    if (hours >= 6 && hours < 12) {
        hello.innerText = `Good morning!`;
    } else if (hours >= 12 && hours < 18) {
        hello.innerText = `Good afternoon!`;
    } else if (hours >= 18 && hours < 23) {
        hello.innerText = `Good evening!`;
    } else {
        hello.innerText = `Have a Good night~`;
    }
    helloUser.innerText = `${username}`;
}

const savesUsername = localStorage.getItem(USERNAME_KEY);

if (savesUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savesUsername);
}
