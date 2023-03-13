import './App.css';
import Shelf from './images/shelf.jpg';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Watermelon from './images/watermelon.png';
// import { useEffect } from 'react';
import React from 'react';
// import ShopPage from './ShopPage.js';
// import ShowCart from './ShowCart';

export default function App() {
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

      </div>
      <div className='header'>
        <h3>Home</h3>
        <Link className='homeShop' to='/shop'> <h3>Shop</h3></Link>
        <h3 className='cartBtn' onClick={ShowCart}>Cart</h3>
      </div>
      <div className='info'>
        <img className='shelf' alt='' src={Shelf}></img>
        <div className='slogan'>Check out this wide assortment of fruits!</div>
        <Link to='/shop' className='shopBtn'>SHOP</Link>
      </div>
    </div>
  );
}

export function displayMelonCart(props) {
  const cartDisplay = document.querySelector('.cart');
  let img = Watermelon;
  let txt = 'Watermelon';

  const watermelonImg = document.createElement('img');
  const watermelonTxt = document.createElement('div');
  watermelonImg.src = img;
  watermelonTxt.textContent = txt;
  watermelonImg.classList.add('cartImg');
  // watermelonTxt.classList.add('fruitDescription');
  cartDisplay.appendChild(watermelonImg);
  // cartDisplay.appendChild(watermelonTxt);
  cartDisplay.style.display = 'flex';
}