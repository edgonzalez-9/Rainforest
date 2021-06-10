import React from 'react'
import Product from "./Product.js"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NTYxZWIwNDMt/NTYxZWIwNDMt-ZjA5YjMyNmIt-w3000._CB668766246_.jpg" 
                alt=""
            />
            <div className="home__row">
                <Product
                    id="123456789"
                    title="Way of Kings"
                    price={19.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91KzZWpgmyL.jpg"
                />
                <Product
                    id="123456789"
                    title="Mario Kart 8 Deluxe"
                    price={49.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71zMv5%2Brx5S._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="123456789"
                    title="KitchenAid KSMMGA Metal Food Grinder Attachment, 2.5 lb, Silver"
                    price={79.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81cPC8tWkpL._AC_SL1500_.jpg"
                />
                <Product
                    id="123456789"
                    title="Ring Video Doorbell Wired"
                    price={59.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/518CV1NgeZL._SL1000_.jpg"
                />
                <Product
                    id="123456789"
                    title="Sauder North Avenue Cart, Smoked Oak finish"
                    price={89.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/714dbcEit9L._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="123456789"
                    title="Greenies Feline Natural Dental Care Cat Treats, Chicken Flavor, All Bag Sizes"
                    price={19.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/8126aXqeFyL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
