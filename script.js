const api = "https://dummyjson.com/quotes/random";
const quote = document.querySelector(".quote-js");
const author = document.querySelector(".author-js");
const quoteBtn = document.querySelector(".quote-button-js");
const tweetBtn = document.querySelector(".tweet-button-js");


async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author
}
getQuote(api);


quoteBtn.addEventListener("click",() => {
    getQuote(api);
});


tweetBtn.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ~ by " + author.innerHTML, "Tweet Window", "width=600, height=300");
});