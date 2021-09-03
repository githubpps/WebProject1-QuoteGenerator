//Get quotes from API
let apiQuotes =[];
const quoteContainer = document.getElementById("quotecontainer");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const twitter = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote(){
    //Random pick from quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    if (!quote.author)
    {
        authorName.textContent = "Unknown"
    }
    else
    {
        authorName.textContent = quote.author;
    }
    //If quote length more
    if (quote.text.length > 50)
    {
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
} 

//Function used to get quotes from a URL
async function getQuotes(){
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    }
    catch(error){  //If error log here   
        console.log(error);
    }
}

//Tweet
function tweet(){
    const twitter = `https://twitter.com/intent/tweet?text= ${quoteText.textContent}-${authorName.textContent}`;
    window.open(twitter, '_blank');
}

//Event listners
newQuoteBtn.addEventListener('click', newQuote);
twitter.addEventListener('click', tweet);

//Run getQuotes
getQuotes();