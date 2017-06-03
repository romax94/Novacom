import React from 'react';
import CartItem from './CartItem';


const Cart = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map(item =>
                    <li key={item.id}>
                        <CartItem { ...item } />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Cart;