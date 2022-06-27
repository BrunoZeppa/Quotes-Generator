import Btn from "./btn";


const QuoteBox = ({randomQuoteQuote, randomQuoteAuthor, randomColor, changeAll}) => {



    return (
        <section className='card' style={{ color: randomColor }}>
            <i className="fa-solid fa-quote-left"></i>
            <article>
            <p>{randomQuoteQuote}</p>
            <p>{randomQuoteAuthor}</p>
            <Btn changeAll={changeAll} randomColor={randomColor} />
            </article>
        </section>
    );
};

export default QuoteBox;
