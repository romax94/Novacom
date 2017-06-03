import React from 'react';

const CartItem = ({ title, price, img }) => {
    return (
        <div className="cart_item">
            <p>{title}</p>
            <p>{price}</p>
            <img src={img} alt=""/>
        </div>
    )
};

export default CartItem;