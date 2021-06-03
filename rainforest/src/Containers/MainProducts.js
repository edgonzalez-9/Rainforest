import React from 'react';
import ProductCard from '../Components/ProductCard';

function MainProducts(props) {
    return (
        <div style={{display: `flex`, justifyContent: `space-around`, margin: `10px`}}>
            {props.products.map(product => <ProductCard product={product} key={product.name}/>)}
        </div>
    )
}

export default MainProducts;