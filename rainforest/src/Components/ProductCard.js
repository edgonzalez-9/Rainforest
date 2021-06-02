import React from 'react';

function ProductCard(props){
    return (
        <div class="card" style={{width: `18rem;`}}>
            <img src={props.product.image} class="card-img-top" alt=""/>
            <div classe="card-body">
                <p class="card-title">{props.product.name}</p>
            </div>
        </div>
    )
}

export default ProductCard;