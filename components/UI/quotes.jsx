import '../../styles/QuoteCarousel.css';
import React, { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Creativity without strategy is called 'art.' Creativity with strategy is called 'advertising.'",
    author: "Jef I. Richards",
  },
  {
    text: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
    author: "Seth Godin",
  },
  {
    text: "The best marketing doesn’t feel like marketing.",
    author: "Tom Fishburne",
  },
  {
    text: "Content is fire. Social media is gasoline.",
    author: "Jay Baer",
  }
];

const FancyQuoteCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fancy-carousel">
      <div className="quote-card">
        <div className="quote-content fade">
          <p className="quote-text">“{quotes[index].text}”</p>
          <p className="quote-author">– {quotes[index].author}</p>
        </div>
      </div>

      <div className="quote-dots">
        {quotes.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FancyQuoteCarousel;
