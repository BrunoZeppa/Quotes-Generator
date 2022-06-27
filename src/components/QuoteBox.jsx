

const QuoteBox = ({randomQuoteQuote, randomQuoteAuthor, randomColor}) => {



    return (
        <section className='card' style={{ color: randomColor }}>
            <i className="fa-solid fa-quote-left"></i>
            <article>
            <p>{randomQuoteQuote}</p>
            <p>{randomQuoteAuthor}</p>
            </article>
        </section>
    );
};

export default QuoteBox;
