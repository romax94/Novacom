import React, { Component } from 'react';

export default class Search extends Component {
    searchProduct() {
        const { onSearchProduct } = this.props;
        onSearchProduct(this.searchInput.value);
    }
    render() {
        return (
            <div className="app_search">
                <input
                    type="text"
                    placeholder="Search..."
                    ref={input => this.searchInput = input}
                    className="app_search_input"
                />
                <button className="app_search_btn" onClick={this.searchProduct.bind(this)}>Go</button>
            </div>
        )
    }
}