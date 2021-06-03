import React from 'react';

function ProductCard(props){
    return (
        <div className="card" style={{width: `20vw`, margin: `10px`}} onClick={() => console.log("Hello")}>
            <img src={props.product.image} className="card-img-top" alt=""/>
            <div className="card-body">
                <p className="card-title">{props.product.name}</p>
            </div>
        </div>
    )
}

export default ProductCard;