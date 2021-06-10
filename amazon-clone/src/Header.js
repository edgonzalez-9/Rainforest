import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className="header">

            {/* Amazon Link */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""
                />
            </Link>

            {/* Search Box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 Links */}
            <div className="header__nav" >

                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Ed</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping Cart Icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
