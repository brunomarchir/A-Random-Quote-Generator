/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/


// definition of quotes and its properties
var quotes = [
   {
     quote: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
     source: 'John F. Kennedy',
     year: '1963',
     tag: 'history'
      },
   {
     quote: 'The future belongs to those who believe in the beauty of their dreams.',
     source: 'Eleanor Roosevelt',
     tag: 'history'
      },
   {
     quote: 'My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.',
     source: 'Charles Dickens',
     citation: 'David Copperfield',
     tag: 'productivity'

      },
    {
      quote: 'Don’t panic.',
      source: 'Douglas Adams',
      citation: 'The Hitchhiker’s Guide to the Galaxy',
      tag: 'adventure'
      },
    {
      quote: 'Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.',
      source: 'Oscar Wilde',
      citation: 'The Critic as Artist',
      tag: 'art'
      },
    {
      quote: 'Autonomy, complexity, and a connection between effort and reward are, most people will agree, the three qualities that work has to have if it is to be satisfying.',
      source: 'Malcolm Gladwell',
      citation: 'Outliers',
      year: '2008',
      tag: 'productivity'
      }

];




/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let i = Math.floor(Math.random()*quotes.length);  // round the number to lowest integer
  return quotes[i];
  };


/***
 * `printQuote` function
***/

function printQuote() {

  let randQ = getRandomQuote();
  let htmlString = `<p class = "quote">${randQ.quote}</p>
                    <p class = "source">${randQ.source}`;

// Check, add (if exists) and concatenate the respective properties

    if (randQ.citation) {
      htmlString += `<span class="citation">${randQ.citation}</span>`;
      }
    if (randQ.year) {
      htmlString += `<span class="year">${randQ.year}</span>`;
      }
    if (randQ.tag) {
      htmlString += `<span class="tag">${randQ.tag}</span>`;
      }

    htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;

  //change background color
  document.body.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

};

setInterval(printQuote, 5000); /* calls the 'printQuote' function every 5 seconds
                                  information extracted from
                                  source: https://www.w3schools.com/jsref/met_win_setinterval.asp



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
