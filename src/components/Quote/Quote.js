import React from "react";
import { useState } from "react";
import "./Quote.css";
import { Button } from "react-bootstrap";

const quotes = [
  '"We are running the most dangerous experiment in history right now, which is to see how much carbon dioxide the atmosphere can handle before there is an environmental catastrophe." - Elon Musk',
  '"We have a choice: Do we want to invest in a clean, green, sustainable future or do we want to face the consequences of climate change?"- Al Gore',
  '"The earth is what we all have in common." - Wendell Berry',
  '"Climate change is the single biggest thing that humans have ever done on this planet. The one thing that needs to be bigger is our movement to stop it." - Bill McKibben',
  '"The climate crisis is not just about the environment. It is a crisis of human rights, of justice, and of political will. Colonial, racist, and patriarchal systems of oppression have created and fueled it. We need to dismantle them all." - Greta Thunberg',
  "\"It's not about tomorrow, it's not about centuries from now, it's about what we do today.\" - Prince Charles",
  '"We can\'t afford to be bystanders in a world that needs our help. We must all do our part to reduce our carbon footprint." - Leonardo DiCaprio',
  '"Climate change is no longer some far-off problem; it is happening here, it is happening now." - Barack Obama',
  '"The fight against climate change is a moral obligation, but it is also an economic opportunity." - John Kerry',
  '"The greatest threat to our planet is the belief that someone else will save it." - Robert Swan',
];

const Quote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleClick = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(index);
  };

  return (

    <div className="wood-texture ">
    

      <div className="centre  my-5">
        <div className="my-4"></div>
      <p className="quote-text">{quotes[quoteIndex]}</p>
        <Button className="btn-danger" onClick={handleClick}>Another Quote</Button>
      </div>
    </div>
  );
};

export default Quote;
