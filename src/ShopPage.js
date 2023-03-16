import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Watermelon from './images/watermelon.png';
import Apple from './images/apple.png';
import Orange from './images/orange.png';
import { useState, useEffect } from 'react';
import DragonFruit from './images/dragonfruit.png';
import Pear from './images/pear.png';
import Pineapple from './images/pineapple.png';

// fix url switching setState saving
function ShopContents() {
  let [toggleHeader, setToggleHeader] = useState(0);
  let [cartMelonItems, setCartMelonItems] = useState([]);
  let [cartAppleItems, setCartAppleItems] = useState([]);
  let [cartOrangeItems, setCartOrangeItems] = useState([]);
  let [cartDragonItems, setCartDragonItems] = useState([]);
  let [cartPearItems, setCartPearItems] = useState([]);
  let [cartPineappleItems, setCartPineappleItems] = useState([]);
  let [totalCartItems, setTotalCartItems] = useState(0);

  function sumTotal() {
    setTotalCartItems(prev => prev = cartMelonItems.length + cartAppleItems.length + cartOrangeItems.length + cartDragonItems.length + cartPearItems.length + cartPineappleItems.length);
  }

  useEffect(() => {
    const counterDiv = document.querySelector('.counter');
    console.log(totalCartItems);
    counterDiv.textContent = 'Total Items: ' + totalCartItems;
  }, [totalCartItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.melonImg');
    existingImages.forEach(melonDiv => {
      melonDiv.remove();
    })

      const cartDisplay = document.querySelector('.cart');
      const itemTag = document.createElement('img');
        itemTag.classList.add('melonImg');
        itemTag.id = 'cartImg';
        itemTag.src = Watermelon;
        cartDisplay.appendChild(itemTag);
        sumTotal();

      const amount = document.createElement('div');
      amount.textContent = cartMelonItems.length; // displays amount of each item
      amount.classList.add('itemAmount');
      cartDisplay.append(amount);
  }, [cartMelonItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.appleImg');
    existingImages.forEach(AppleDiv => {
      AppleDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
    const itemTag = document.createElement('img');
      itemTag.classList.add('appleImg');
      itemTag.id = 'cartImg';
      itemTag.src = Apple;
      cartDisplay.appendChild(itemTag);

      sumTotal();
      const amount = document.createElement('div');
      amount.textContent = cartAppleItems.length; // displays amount of each item
      amount.classList.add('itemAppleAmount');
      cartDisplay.append(amount);
  }, [cartAppleItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.orangeImg');
    existingImages.forEach(OrangeDiv => {
      OrangeDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
      const itemTag = document.createElement('img');
      itemTag.classList.add('orangeImg');
      itemTag.id = 'cartImg';
      itemTag.src = Orange;
      cartDisplay.appendChild(itemTag);
      sumTotal();

      const amount = document.createElement('div');
      amount.textContent = cartOrangeItems.length; // displays amount of each item
      amount.classList.add('itemOrangeAmount');
      cartDisplay.append(amount);

  }, [cartOrangeItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.dragonImg');
    existingImages.forEach(dragonDiv => {
      dragonDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
      const itemTag = document.createElement('img');
      itemTag.classList.add('dragonImg');
      itemTag.id = 'cartImg';
      itemTag.src = DragonFruit;
      cartDisplay.appendChild(itemTag);
      sumTotal();

      const amount = document.createElement('div');
      amount.textContent = cartDragonItems.length; // displays amount of each item
      amount.classList.add('itemDragonAmount');
      cartDisplay.append(amount);

  }, [cartDragonItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.pearImg');
    existingImages.forEach(pearDiv => {
      pearDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
      const itemTag = document.createElement('img');
      itemTag.classList.add('pearImg');
      itemTag.id = 'cartImg';
      itemTag.src = Pear;
      cartDisplay.appendChild(itemTag);
      sumTotal();

      const amount = document.createElement('div');
      amount.textContent = cartPearItems.length; // displays amount of each item
      amount.classList.add('itemPearAmount');
      cartDisplay.append(amount);

  }, [cartPearItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.pineappleImg');
    existingImages.forEach(pineappleDiv => {
      pineappleDiv.remove();
    })

    const cartDisplay = document.querySelector('.cart');
      const itemTag = document.createElement('img');
      itemTag.classList.add('pineappleImg');
      itemTag.id = 'cartImg';
      itemTag.src = Pineapple;
      cartDisplay.appendChild(itemTag);
      sumTotal();

      const amount = document.createElement('div');
      amount.textContent = cartPineappleItems.length; // displays amount of each item
      amount.classList.add('itemPineappleAmount');
      cartDisplay.append(amount);

  }, [cartPineappleItems]);



  function ShowCart() {
    const cartDisplay = document.querySelector('.cart');
    const checkoutBtn = document.querySelector('.checkout');
      if (toggleHeader === 0) {
        checkoutBtn.style.display = 'flex'
        cartDisplay.style.display = 'flex';
        setToggleHeader(prev => prev = 1);
      }
      else {
        setToggleHeader(prev => prev = 0);
        checkoutBtn.style.display = 'none';
        cartDisplay.style.display = 'none';
      }
  }

  function displayMelonCart() {
    const existingImages = document.querySelectorAll('.melonImg');
    existingImages.forEach(melonDiv => {
      melonDiv.remove();
    })
    const existingAmount = document.querySelectorAll('.itemAmount');
      existingAmount.forEach(amount => {
        amount.remove();
      })

    const cartDisplay = document.querySelector('.cart');
    const checkoutBtn = document.querySelector('.checkout');
    const melonBoxVal = document.querySelector('.melonBox').value;
    cartDisplay.style.display = 'flex';
    checkoutBtn.style.display = 'flex';
    let img = Watermelon;
    setToggleHeader(prev => prev = 1);
    console.log(melonBoxVal);
    if (melonBoxVal > 0 && melonBoxVal <= 10) {
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

    const existingAmount = document.querySelectorAll('.itemAppleAmount');
    existingAmount.forEach(amount => {
      amount.remove();
    })

    const appleBoxVal = document.querySelector('.appleBox').value;
    let img = Apple;
    setToggleHeader(prev => prev = 1);
    if (appleBoxVal > 0 && appleBoxVal <= 10) { // just put a number next to img, maybe inline onto the pic?
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

    const existingAmount = document.querySelectorAll('.itemOrangeAmount');
    existingAmount.forEach(amount => {
      amount.remove();
    })

    let orangeBoxVal = document.querySelector('.orangeBox').value;
    let img = Orange;
    setToggleHeader(prev => prev = 1);
    if (orangeBoxVal > 0 && orangeBoxVal <= 10) {
      for (let i = 0; i < orangeBoxVal; i++) {
        setCartOrangeItems(prev => prev.concat(img));
      }
    }
    displayDragonCart();
  }

  function displayDragonCart() {
    const existingImages = document.querySelectorAll('.dragonImg');
    existingImages.forEach(dragonDiv => {
      dragonDiv.remove();
    })

    const existingAmount = document.querySelectorAll('.itemDragonAmount');
    existingAmount.forEach(amount => {
      amount.remove();
    })

    let boxVal = document.querySelector('.dragonBox').value;
    let img = DragonFruit;
    setToggleHeader(prev => prev = 1);
    if (boxVal > 0 && boxVal <= 10) {
      for (let i = 0; i < boxVal; i++) {
        setCartDragonItems(prev => prev.concat(img));
      }
    }
    displayPearCart();
  }

  function displayPearCart() {
    const existingImages = document.querySelectorAll('.pearImg');
    existingImages.forEach(dragonDiv => {
      dragonDiv.remove();
    })

    const existingAmount = document.querySelectorAll('.itemPearAmount');
    existingAmount.forEach(amount => {
      amount.remove();
    })

    let boxVal = document.querySelector('.pearBox').value;
    let img = Pear;
    setToggleHeader(prev => prev = 1);
    if (boxVal > 0 && boxVal <= 10) {
      for (let i = 0; i < boxVal; i++) {
        setCartPearItems(prev => prev.concat(img));
      }
    }
    displayPineappleCart();
  }

  function displayPineappleCart() {
    const existingImages = document.querySelectorAll('.pineappleImg');
    existingImages.forEach(pineappleDiv => {
      pineappleDiv.remove();
    })

    const existingAmount = document.querySelectorAll('.itemPineappleAmount');
    existingAmount.forEach(amount => {
      amount.remove();
    })

    let boxVal = document.querySelector('.pineappleBox').value;
    let img = Pineapple;
    setToggleHeader(prev => prev = 1);
    if (boxVal > 0 && boxVal <= 10) {
      for (let i = 0; i < boxVal; i++) {
        setCartPineappleItems(prev => prev.concat(img));
      }
    }
  }


  // set props for home page with cart contents to be sent over when cart is display block on home page
    return (
        <div>
            <div className='cart'>
                <h3>Cart</h3>
            </div>
            <div className='checkout'>
                <h3 className='counter'></h3>
                <button onClick={ShowCart} className='checkoutBtn'>Checkout</button>
            </div>
            <div className='header'>
                <h3 style={{color: 'black'}}>Catalog</h3>
                <Link to='/shopping-cart' className='BackHome'><h3>Home</h3></Link>
                <h3 className='cartBtn' onClick={ShowCart}>Cart</h3>
            </div>
            <div className='cardContain'>
                <div className='card'>
                    <img className='fruitPics'src={Watermelon} alt=''></img>
                    <label htmlFor='numberBox'>Number of Watermelons
                      <input className='melonBox' type='number' min='1' max='10'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Apple} alt=''></img>
                    <label htmlFor='numberBox'>Number of Apples
                      <input className='appleBox' type='number' min='1' max='10'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Orange} alt=''></img>
                    <label htmlFor='numberBox'>Number of Oranges
                      <input className='orangeBox' type='number' min='1' max='10'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={DragonFruit} alt=''></img>
                    <label htmlFor='numberBox'>Number of Dragonfruits
                      <input className='dragonBox' type='number' min='1' max='10'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Pear} alt=''></img>
                    <label htmlFor='numberBox'>Number of Pears
                      <input className='pearBox' type='number' min='1' max='10'></input>
                    </label>
                </div>
                <div className='card'>
                    <img className='fruitPics' src={Pineapple} alt=''></img>
                    <label htmlFor='numberBox'>Number of Pineapples
                      <input className='pineappleBox' type='number' min='1' max='10'></input>
                    </label>
                </div>
            </div>
            <div className='addCartContain'>
                  <button onClick={displayMelonCart} className='addCart'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ShopContents;