import React from 'react';
import Product from '../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div className="app_product_list">
            <div className="row">
                {products.map(item =>
                    <div className="col-md-6" key={item.id}>
                        <Product {...item} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductList;
