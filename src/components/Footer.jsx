import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <p className="footer_list_title">About the store</p>
                        <ul className="footer_list">
                            <li><a href="">Who we are</a></li>
                            <li><a href="">Contacts</a></li>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms of use</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className="footer_list_title">Order support</p>
                        <ul className="footer_list">
                            <li><a href="">Order status</a></li>
                            <li><a href="">Shopping</a></li>
                            <li><a href="">Return</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className="footer_list_title">Phones</p>
                        <ul className="footer_list">
                            <li><a href="">Pay as you go</a></li>
                            <li><a href="">Plans</a></li>
                            <li><a href="">Contacts</a></li>
                            <li><a href="">Businnes</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className="footer_list_title">Accesories</p>
                        <ul className="footer_list">
                            <li><a href="">Memorias</a></li>
                            <li><a href="">Car charger</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className="footer_list_title">My Store</p>
                        <ul className="footer_list">
                            <li><a href="">Register</a></li>
                            <li><a href="">Forgotten Pin</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className="footer_list_title">Community</p>
                        <ul className="footer_list">
                            <li><a href="">Blog</a></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;