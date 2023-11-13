import { useEffect, useState } from 'react';
import './App.css';

function Quote() {
    const [quote, setQuote] = useState([]);
    let API = 'https://api.quotable.io/random';
    
    // Method 2
    // const handleQuote = () => {
    // fetch(API)
    // .then(res => res.json())
    // .then(data => {
    //     setQuote(data);
    //     console.log(data);
    // })
    // }

    // useEffect(() => {
    //     handleQuote();
    // }, []);

    
    async function getData() {
        const response = await fetch(API);
        const data = await response.json();
        setQuote(data);
        }


    useEffect(() => {
        getData();
    }, []);

    return(
        <div className="container">
            <h1>Quote of the day</h1>
            <p className='quote-content'>{quote.content}</p>
            <p className='author'>{quote.author}</p>
            <div className='button-pos'><button onClick={getData}>New Quote</button></div>
        </div>
    )
}

export default Quote;