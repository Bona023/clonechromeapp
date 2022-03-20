const quotes = [
    {
        quote: "You must not let anyone define your limits because of where you come from. Your only limit is your soul.",
        author: "Ratatouille",
    },
    {
        quote: "To be happy, we must not be too concerned with others.",
        author: "Albert Camus",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "You're braver than you believe, stronger than you seem, and smarter than you think.",
        author: "Winnie The Pooh",
    },
    {
        quote: "Today's special moments are tomorrow's memories.",
        author: "Aladdin",
    },
    {
        quote: "I fell for a while now, but I'm going to get up.",
        author: "Bambi",
    },
    {
        quote: "I decide my own feelings, It's going to be happiness today.",
        author: "Alice in Wonderland",
    },
    {
        quote: "Anyone can be anything.",
        author: "Zootopia",
    },
    {
        quote: "You can not be happy every day. But there are happy things every day.",
        author: "Winnie The Pooh",
    },
    {
        quote: "If you don't know where you want to go, then it doesn't matter which path you take.",
        author: "Alice in Wonderland",
    },
];

const quote = document.querySelector(".quotes_quote");
const author = document.querySelector(".quotes_author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;
