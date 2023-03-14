import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Watermelon from './images/watermelon.png';
import Apple from './images/apple.png';
import Orange from './images/orange.png';
import { useState, useEffect } from 'react';
import App from './App';

// fix url switching setState saving
function ShopContents() {
  let [toggleHeader, setToggleHeader] = useState(0);
  let [cartMelonItems, setCartMelonItems] = useState([]);
  let [cartAppleItems, setCartAppleItems] = useState([]);
  let [cartOrangeItems, setCartOrangeItems] = useState([]);
  let [totalCartItems, setTotalCartItems] = useState(0);


  function sumTotal() {
    setTotalCartItems(prev => prev = cartMelonItems.length + cartAppleItems.length + cartOrangeItems.length);
  }

  useEffect(() => {
    const counterDiv = document.querySelector('.counter');
    console.log(totalCartItems);
    counterDiv.textContent = 'Total Items: ' + totalCartItems;
  }, [totalCartItems]);

  useEffect(() => {
    const cartDisplay = document.querySelector('.cart');
    cartMelonItems.forEach(item => {
      const itemTag = document.createElement('img');
      itemTag.classList.add('melonImg');
      itemTag.id = 'cartImg';
      itemTag.src = item;
      cartDisplay.appendChild(itemTag);
      sumTotal();
  })
  }, [cartMelonItems]);

  useEffect(() => {
    const cartDisplay = document.querySelector('.cart');
    cartAppleItems.forEach(item => {
      const itemTag = document.createElement('img');
      itemTag.classList.add('appleImg');
      itemTag.id = 'cartImg';
      itemTag.src = item;
      cartDisplay.appendChild(itemTag);
      sumTotal();
  })
  }, [cartAppleItems]);

  useEffect(() => {
    const cartDisplay = document.querySelector('.cart');
    cartOrangeItems.forEach(item => {     // you need to allow user to select amount
      const itemTag = document.createElement('img');
      itemTag.classList.add('orangeImg');
      itemTag.id = 'cartImg';
      itemTag.src = item;
      cartDisplay.appendChild(itemTag);
  })
  sumTotal();
  }, [cartOrangeItems]);

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

  function displayMelonCart() {
    const existingImages = document.querySelectorAll('.melonImg');
    existingImages.forEach(melonDiv => {
      melonDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
    const melonBoxVal = document.querySelector('.melonBox').value;
    cartDisplay.style.display = 'flex';
    let img = Watermelon;
    setToggleHeader(prev => prev = 1);
    console.log(melonBoxVal);
    if (melonBoxVal > 0) {
        for (let i = 0; i < melonBoxVal; i++) {
          setCartMelonItems(prev => prev.concat(img));
      }
    }
    displayAppleCart();
  }

  function displayAppleCart() {
    const existingImages = document.querySelectorAll('.appleImg');
    existingImages.forEach(AppleDiv => {
      AppleDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
    const appleBoxVal = document.querySelector('.appleBox').value;
    cartDisplay.style.display = 'flex';
    let img = Apple;
    setToggleHeader(prev => prev = 1);
    if (appleBoxVal > 0) {
      for (let i = 0; i < appleBoxVal; i++) {
        setCartAppleItems(prev => prev.concat(img));
      }
    }
    displayOrangeCart();
  }

  function displayOrangeCart() {
    const existingImages = document.querySelectorAll('.orangeImg');
    existingImages.forEach(OrangeDiv => {
      OrangeDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
    const orangeBoxVal = document.querySelector('.orangeBox').value;
    cartDisplay.style.display = 'flex';
    let img = Orange;
    setToggleHeader(prev => prev = 1);
    if (orangeBoxVal > 0) {
      for (let i = 0; i < orangeBoxVal; i++) {
        setCartOrangeItems(prev => prev.concat(img));
      }
    }
  }


  // set props for home page with cart contents to be sent over when cart is display block on home page
    return (
        <div>
            <div className='cart'>
            <div className='counter'></div>
                <h3>Cart</h3>
            </div>
            <div className='header'>
                <h3>Catalog</h3>
                <Link to='/shopping-cart' className='BackHome'><h3>Home</h3></Link>
                <h3 className='cartBtn' onClick={ShowCart}>Cart</h3>
            </div>
            <div className='cardContain'>
                <div className='card'>
                    <img className='fruitPics'src={Watermelon} alt=''></img>
                    <label htmlFor='numberBox'>Number of Watermelons
                      <input className='melonBox' type='number'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Apple} alt=''></img>
                    <label htmlFor='numberBox'>Number of Apples
                      <input className='appleBox' type='number'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Orange} alt=''></img>
                    <label htmlFor='numberBox'>Number of Oranges
                      <input className='orangeBox' type='number'></input>
                    </label>
                </div>
            </div>
            <div class='addCartContain'>
                  <button onClick={displayMelonCart} className='addCart'>Add To Cart</button>
                </div>
        </div>
    )
}

export default ShopContents;