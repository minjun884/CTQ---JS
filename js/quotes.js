const quotes = [
  {
    quote: "There is no cure for birth and death, save to enjoy the interval",
    author: "George Santayana",
  },
  {
    quote: "Life is something that everyone should try at least once.",
    author: "Henry J. Tillman",
  },
  {
    quote: "We can draw lessons from the past, but we cannot live in it.",
    author: "Lyndon B. Johnson",
  },
  {
    quote: "There is no cure for birth and death, save to enjoy the interval.",
    author: "George Santayana",
  },
  {
    quote: "Life is something that everyone should try at least once.",
    author: "Henry J. Tillman",
  },
  {
    quote: "Self-respect is the cornerstone of all virtue.",
    author: "John Herschel",
  },
  {
    quote: "Keep your fears to yourself, but share your courage with others.",
    author: "Robert Louis Stevenson",
  },
  {
    quote: "Read much, but not many books.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Nothing is as far away as one minute ago.",
    author: "Jim Bishop",
  },
  {
    quote: "A single day is enough to make us a little larger.",
    author: "Paul Klee",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(MAth.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;