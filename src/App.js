import './App.css';
import Shelf from './images/shelf.jpg';
import { Link } from 'react-router-dom'
import { useState } from 'react';
// import { useEffect } from 'react';
import React from 'react';
// import ShopPage from './ShopPage.js';
// import ShowCart from './ShowCart';

function App(props) {
  let [toggleHeader, setToggleHeader] = useState(0);

  function ShowCart() {
      const cartDisplay = document.querySelector('.cart');
      if (toggleHeader === 0) {
        cartDisplay.style.display = 'block';
        setToggleHeader(prev => prev = 1);
      }
      else {
        setToggleHeader(prev => prev = 0);
        cartDisplay.style.display = 'none';
      }
  }

  return (
    // {ShowCart},
    <div>
      <div className='cart'>
        <div>hello</div> {/* <= this will contain props */}
      </div>
      <div className='header'>
        <h3>Home</h3>
        <Link className='homeShop' to='/shop'> <h3>Shop</h3></Link>
        <h3 className='cartBtn' onClick={ShowCart}>Cart</h3>
      </div>
      <div className='info'>
        <div className='slogan'>Check out this wide assortment of fruits! <img className='shelf' alt='' src={Shelf}></img></div>
        <Link to='/shop' className='shopBtn'>SHOP</Link>
      </div>
    </div>
  );
}

export default App;
