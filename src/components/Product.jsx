import React, { Component } from 'react';

export default class Product extends Component {
    addToCart() {
        const { id, addToCart } = this.props;
        addToCart(id);
    }
    render() {
        const { title, price, img, model } = this.props;
        return (
            <div className="product_item">
                <div className="product_item_top">
                    <div>{title}</div>
                    <div>{price}$</div>
                </div>
                <div className="product_item_center">
                    <div className="product_item_desc">
                        <div>{model}</div>
                        <button className="product_item_btn" onClick={this.addToCart.bind(this)}>Add To Cart</button>
                    </div>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}