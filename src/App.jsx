import { useState } from 'react'
import './App.css';
import Btn from './components/btn';
import QuoteBox from './components/QuoteBox';
import quotes from './components/quote.json';

function App() {


  const colors = ["#D65DB1", "#FF6F91", "#FF9671", "#845EC2", "#0089BA", "#008E9B", "#4D8076", "#B39CD0"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const randomQuote = Math.floor(Math.random() * quotes.length);

  const [color, setRandomColor] = useState(randomColor);
  const [quote, setRandomQuote] = useState(randomQuote);

  const changeAll = () => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    setRandomQuote(Math.floor(Math.random() * quotes.length));
  }

  document.body.style = `background: ${randomColor}`;


  return (
    <>
      <Btn changeAll={changeAll} randomColor={color} />
      <QuoteBox randomQuoteQuote={quotes[quote].quote} randomQuoteAuthor={quotes[quote].author} randomColor={color} />
    </>
  )
}

export default App
