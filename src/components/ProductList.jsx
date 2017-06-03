import React from 'react';
import Product from '../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <ul>
                {products.map(item =>
                    <li key={item.id}>
                        <Product {...item} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ProductList;
