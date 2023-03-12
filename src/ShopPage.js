import React from 'react';
import { Link } from 'react-router-dom';
import Watermelon from './images/watermelon.png';
import Apple from './images/apple.png';
import Orange from './images/orange.png';
import { useState } from 'react';
import App from './App';
//import App from './App';
// import ShowCart from './ShowCart';

function ShopContents() {
  let [toggleHeader, setToggleHeader] = useState(0);
  let [cartItems, setCartItems] = useState({});

  function ShowCart() {
    const cartDisplay = document.querySelector('.cart');
      if (toggleHeader === 0) {
        cartDisplay.style.display = 'flex';
        setToggleHeader(prev => prev = 1);
      }
      else {
        setToggleHeader(prev => prev = 0);
        cartDisplay.style.display = 'none';
      }
  }

  function displayCartWatermelon() {
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

  const appleInfo = {
    img: {Apple},
    txt: 'Apple'
  }

  const orangeInfo = {
    img: {Orange},
    txt: 'Orange'
  }


  // set props for home page with cart contents to be sent over when cart is display block on home page
    return (
        <div>
            <div className='cart'>

            </div>
            <div className='header'>
                <h3>Catalog</h3>
                <Link to='/shopping-cart' className='BackHome'><h3>Home</h3></Link>
                <h3 className='cartBtn' onClick={ShowCart}>Cart</h3>
            </div>
            <div className='cardContain'>
                <div className='card'>
                    <img onClick={displayCartWatermelon} className='fruitPics'src={Watermelon} alt=''></img>
                    <div className='fruitDescription'>Watermelon</div>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Apple} alt=''></img>
                    <div className='fruitDescription'>Apple</div>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Orange} alt=''></img>
                    <div className='fruitDescription'>Orange</div>
                </div>
            </div>
        </div>
    )
}

export default ShopContents;