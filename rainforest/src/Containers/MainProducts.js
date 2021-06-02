import React from 'react';
import ProductCard from '../Components/ProductCard';

function MainProducts(props) {
    return (
        <div>
            {props.products.map(product => <ProductCard product={product}/>)}
        </div>
    )
}

export default MainProducts;