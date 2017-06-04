import React, { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    openCartList() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        const { items } = this.props;
        return (
            <div>
                <div className="header_cart_title" onClick={this.openCartList.bind(this)}>
                    Cart
                    <span className="header_cart_count">{items.length}</span>
                </div>
                <ul className={"header_cart_list" + (this.state.active ? " visible_list" : "")}>
                    {items.map(item =>
                        <li key={item.id}>
                            <CartItem { ...item } />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}