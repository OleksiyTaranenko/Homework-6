import React from 'react';
import './Basket.css'

function Basket() {
    let title = localStorage.getItem('title');
    let price = localStorage.getItem('price');
    let count = localStorage.getItem('count');

    return (
        <div className='basketPage'>
            <div className="basketField">
                <h3>Your order:</h3>
                <div>Title: {title}</div>
                <div>Price: {price}$</div>
                <div>Count: {count}</div>
            </div>
        </div>
    )
}

export default Basket;