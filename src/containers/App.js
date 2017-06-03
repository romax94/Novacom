import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';


export default class APP extends Component {
	render() {
		return (
			<div>
				<ProductList />
				<Cart />
			</div>
		)
	}
}