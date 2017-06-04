import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onRemoveItem } from '../actions';

class CartItem extends Component {
    removeItem() {
        const { id } = this.props;
        this.props.onRemoveItem(id)
    }
    render() {
        const { title, price, img } = this.props;
        return (
            <div className="cart_item">
                <div>
                    <div className="cart_item_img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="cart_item_title">{title}</div>
                </div>
                <div className="cart_item_price">
                    <div>{price}$</div>
                </div>
                <div className="cart_remove" onClick={this.removeItem.bind(this)}></div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItem: productId => dispatch(onRemoveItem(productId))
    }
};

export default connect(null, mapDispatchToProps)(CartItem);