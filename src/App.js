import React, { Component } from 'react';
import Header from './components/Header';
import Search from './containers/Search';
import ProductList from './containers/ProductList';
import Cart from './containers/Cart';
import Footer from './components/Footer';

export default class APP extends Component {
	render() {
		return (
			<div className="app_wrapper">
				<Header />
				<div className="container">
					<Search />
				</div>
				<div className="container">
					<main className="app_content">
						<div className="row">
							<div className="col-md-3">

							</div>
							<div className="col-md-9">
								<ProductList />
							</div>
						</div>
					</main>
				</div>
				<Footer />
				<Cart />
			</div>
		)
	}
}