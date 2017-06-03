import React, { Component } from 'react';

export default class Product extends Component {
    addToCart() {
        const { id, addToCart } = this.props;
        addToCart(id);
    }
    render() {
        const { title, price, img } = this.props;
        return (
            <div>
                <p>{title}</p>
                <p>{price}</p>
                <img src={img} alt=""/>
                <button onClick={this.addToCart.bind(this)}>Add To Cart</button>
            </div>
        )
    }
}