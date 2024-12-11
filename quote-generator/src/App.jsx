function App() {
  const colors = [
    '#36454F',
    '#5D8AA8',
    '#2E8B57',
    '#CC5500',
    '#800020',
    '#654321',
    '#708090',
    '#7851A9',
    '#008080',
    '#DAA520'
  ]

  const seriesQuotes = [
    {
      author: "Silco (Arcane)",
      quote: "Power doesn't come to those who are born strongest; it comes to those who will do anything to achieve it."
    },
    {
      author: "Eren Yeager (Attack on Titan)",
      quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win."
    },
    {
      author: "Claudia Tiedemann (Dark)",
      quote: "The end is the beginning, and the beginning is the end."
    },
    {
      author: "Maura Franklin (1899)",
      quote: "Sometimes the only way to understand is to forget what you know."
    },
    {
      author: "J. Robert Oppenheimer",
      quote: "Now I am become Death, the destroyer of worlds."
    },
    {
      author: "Sung Jin-Woo (Solo Leveling)",
      quote: "If I can't protect them, I don't deserve their respect."
    },
    {
      author: "Goku (Dragon Ball Super)",
      quote: "Power comes in response to a need, not a desire. You have to create that need."
    },
    {
      author: "Vi (Arcane)",
      quote: "A leader doesn't choose to run. A leader chooses to fight."
    },
    {
      author: "Levi Ackerman (Attack on Titan)",
      quote: "The only thing we're allowed to do is to believe we won't regret the choice we made."
    },
    {
      author: "Jonas Kahnwald (Dark)",
      quote: "We're not free in what we do, because we're not free in what we want."
    },
    {
      author: "Eyk Larsen (1899)",
      quote: "The truth is hidden in the depths, but only the brave seek it."
    },
    {
      author: "Dr. Oppenheimer",
      quote: "In the face of destruction, we must seek understanding."
    },
    {
      author: "Beru (Solo Leveling)",
      quote: "Loyalty isn't a choice. It's what defines us."
    },
    {
      author: "Vegeta (Dragon Ball Super)",
      quote: "Even if I fail, I'll keep getting stronger until I succeed."
    },
    {
      author: "Jinx (Arcane)",
      quote: "They think I'm crazy. But maybe I'm just ahead of the curve."
    },
    {
      author: "Armin Arlert (Attack on Titan)",
      quote: "People who can't throw something important away can never hope to change anything."
    },
    {
      author: "Noah (Dark)",
      quote: "Pain is the vessel that moves us forward."
    },
    {
      author: "Henry Singleton (1899)",
      quote: "Reality is a lie we've all agreed to believe."
    },
    {
      author: "J. Robert Oppenheimer",
      quote: "Science isn't about answers; it's about asking better questions."
    },
    {
      author: "Sung Jin-Woo (Solo Leveling)",
      quote: "In this world, strength is everything."
    },
    {
      author: "Beerus (Dragon Ball Super)",
      quote: "Destruction is not the end; it is the beginning of something new."
    },
    {
      author: "Caitlyn (Arcane)",
      quote: "Justice needs balance, but it starts with trust."
    },
    {
      author: "Erwin Smith (Attack on Titan)",
      quote: "To surpass monsters, you must be willing to abandon your humanity."
    },
    {
      author: "Adam (Dark)",
      quote: "Time isn't a straight line; it's a circle we can never escape."
    },
    {
      author: "Maura Franklin (1899)",
      quote: "Your memories are your prison, and your escape."
    },
    {
      author: "J. Robert Oppenheimer",
      quote: "The question isn't what we create, but how it changes the world."
    },
    {
      author: "Igris (Solo Leveling)",
      quote: "Every battle is a chance to prove your worth."
    },
    {
      author: "Whis (Dragon Ball Super)",
      quote: "True strength lies in mastering yourself, not defeating others."
    },
    {
      author: "Jayce (Arcane)",
      quote: "The future isn't built on dreams alone; it needs action."
    },
    {
      author: "Mikasa Ackerman (Attack on Titan)",
      quote: "As long as we're together, we can face anything."
    },
    {
      author: "Claudia Tiedemann (Dark)",
      quote: "The only way to win the game is to understand all the pieces."
    },
    {
      author: "Eyk Larsen (1899)",
      quote: "The sea holds all the secrets, but it demands sacrifices."
    },
    {
      author: "Dr. Oppenheimer",
      quote: "Our greatest achievements come with the heaviest burdens."
    },
    {
      author: "Sung Jin-Woo (Solo Leveling)",
      quote: "The only limit is the one you impose on yourself."
    },
    {
      author: "Goku (Dragon Ball Super)",
      quote: "Limits exist only in the mind. Break them."
    },
    {
      author: "Jinx (Arcane)",
      quote: "A little bit of chaos is the best cure for control."
    },
    {
      author: "Eren Yeager (Attack on Titan)",
      quote: "The world is cruel, but it's also beautiful."
    },
    {
      author: "Noah (Dark)",
      quote: "Every action has a ripple, and every ripple shapes the future."
    },
    {
      author: "Maura Franklin (1899)",
      quote: "The answers we seek lie within us, not out there."
    },
    {
      author: "J. Robert Oppenheimer",
      quote: "We've unlocked the atom, but we've yet to unlock ourselves."
    },
    {
      author: "Beru (Solo Leveling)",
      quote: "Serve with honor, or don't serve at all."
    },
    {
      author: "Vegeta (Dragon Ball Super)",
      quote: "Every loss is a lesson, every victory a chance to grow."
    },
    {
      author: "Vi (Arcane)",
      quote: "Strength isn't just physical; it's what's in here too."
    },
    {
      author: "Armin Arlert (Attack on Titan)",
      quote: "We only fail when we stop trying."
    },
    {
      author: "Adam (Dark)",
      quote: "Control the past, and you control the future."
    },
    {
      author: "Eyk Larsen (1899)",
      quote: "The horizon isn't the end; it's the beginning of a new mystery."
    }
  ]
  const randomIndexQuote = Math.floor(Math.random() * seriesQuotes.length);
  const randomQuote = seriesQuotes[randomIndexQuote];

  function fetchQuotes() {

    const quotes = document.getElementById('quotes');
    const author = document.getElementById('author');
    const body = document.querySelector('body');
    const advice = document.querySelector('h6')

    const randomIndexColor = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndexColor];

    body.style.backgroundColor = randomColor;
    quotes.style.color = randomColor;
    author.style.color = randomColor;
    try{
      const randomIndexQuote = Math.floor(Math.random() * seriesQuotes.length);
      const randomQuote = seriesQuotes[randomIndexQuote];
      advice.textContent = `Advice: ${randomIndexQuote}`;
      quotes.textContent = `"${randomQuote.quote}"`;
      author.textContent = `-${randomQuote.author}`
    }
    catch(error){
      quotes.textContent = "error";
      author.textContent = "-error"
    }
  }

  const shareToFacebook = () => {
    const facebookContent = randomQuote.quote;
  }

  const shareToTwitter = () => {
    const twitterContent = randomQuote.quote;
  }
  return(
    <>
      <div className="card"  id="quote-box">
        <h6>ADVICE: #{randomIndexQuote}</h6>
        <div className="box" id="text">
          <p id="quotes">"{ randomQuote.quote }"</p>
          <p id="author">-{ randomQuote.author }</p>
        </div>
        <svg className="pattern-divider-desktop pattern-divider" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <svg className="pattern-divider-mobile pattern-divider" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <div className="sm">
          <a href={`https://www.facebook.com/sharer/sharer.php?text={encodeURIComponent(facebookContent)}`} target="_blank" onClick={shareToFacebook}><i class='bx bxl-facebook'></i></a>
          <a id="tweet-quote" target="_blank" href="{`https://twitter.com/intent/tweet?text={encodeURIComponent(twitterContent)}`}"><i class='bx bxl-twitter'></i></a>
        </div>
        <div className="dice" id="new-quote" onClick={fetchQuotes}>
          <svg id="icon-dice" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </div>
      </div>
    </>
  );
}

export default App
