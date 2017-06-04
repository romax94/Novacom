import React from 'react';
import Cart from '../containers/Cart';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <a href="" className="header_logo">Online Store</a>
                    <div className="header_cart">
                        <Cart />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;