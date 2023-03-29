import React from 'react';
import './Header.css';
import logo from '../../../public/kcafe_logo.png';
import user from '../../../public/R.jpg'

const Header = () => {
    return (
        <nav className='header '>
            <img src={logo} alt="" className='logoo' />
            <div className="anchor ">
            <a href="./shop">Shop</a>
            <a href="./buy">Buy</a>
            <a href="./inventory">Inventory</a>
            <a href="./login">Login</a>
            
            <img src={user} alt="" className='user'/>

            </div>
        </nav>
    );
};

export default Header;