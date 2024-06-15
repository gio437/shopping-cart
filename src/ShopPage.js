import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Watermelon from './images/watermelon.png';
import Apple from './images/apple.png';
import Orange from './images/orange.png';
import DragonFruit from './images/dragonfruit.png';
import Pear from './images/pear.png';
import Pineapple from './images/pineapple.png';

function ShopPage() {
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
    window.scrollTo(0, 0);
  }, [totalCartItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.melonImg');
    existingImages.forEach(melonDiv => {
      melonDiv.remove();
    })

      if (cartMelonItems.length !== 0) {
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
        ClearableInput();
      }
  }, [cartMelonItems, cartAppleItems, cartOrangeItems, cartDragonItems, cartPearItems, cartPineappleItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.appleImg');
    existingImages.forEach(AppleDiv => {
      AppleDiv.remove();
    })

    if (cartAppleItems.length !== 0) {
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
      ClearableInput();
    }
  }, [cartMelonItems, cartAppleItems, cartOrangeItems, cartDragonItems, cartPearItems, cartPineappleItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.orangeImg');
    existingImages.forEach(OrangeDiv => {
      OrangeDiv.remove();
    })

    if (cartOrangeItems.length !== 0) {
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
        ClearableInput();
    }

  }, [cartMelonItems, cartAppleItems, cartOrangeItems, cartDragonItems, cartPearItems, cartPineappleItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.dragonImg');
    existingImages.forEach(dragonDiv => {
      dragonDiv.remove();
    })

    if (cartDragonItems.length !== 0) {
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
        ClearableInput();
    }

  }, [cartMelonItems, cartAppleItems, cartOrangeItems, cartDragonItems, cartPearItems, cartPineappleItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.pearImg');
    existingImages.forEach(pearDiv => {
      pearDiv.remove();
    })

    if (cartPearItems.length !== 0) {
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
        ClearableInput();
    }

  }, [cartMelonItems, cartAppleItems, cartOrangeItems, cartDragonItems, cartPearItems, cartPineappleItems]);

  useEffect(() => {
    const existingImages = document.querySelectorAll('.pineappleImg');
    existingImages.forEach(pineappleDiv => {
      pineappleDiv.remove();
    })

    if (cartPineappleItems.length !== 0) {
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
        ClearableInput();
    }

  }, [cartMelonItems, cartAppleItems, cartOrangeItems, cartDragonItems, cartPearItems, cartPineappleItems]);

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

  function displayMelonCart(e) {
    e.preventDefault();
    const existingImages = document.querySelectorAll('.melonImg');
    existingImages.forEach(melonDiv => {
      melonDiv.remove();
    });
    const existingAmount = document.querySelectorAll('.itemAmount');
      existingAmount.forEach(amount => {
      amount.remove();
    });

    const cartDisplay = document.querySelector('.cart');
    const checkoutBtn = document.querySelector('.checkout');
    const melonBoxVal = document.querySelector('.melonBox').value;
    cartDisplay.style.display = 'flex';
    checkoutBtn.style.display = 'flex';
    let img = Watermelon;
    setToggleHeader(prev => prev = 1);
    console.log(melonBoxVal);
    if (melonBoxVal > 0 && melonBoxVal <= 10000) {
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
    if (appleBoxVal > 0 && appleBoxVal <= 10000) { // just put a number next to img, maybe inline onto the pic?
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
    if (orangeBoxVal > 0 && orangeBoxVal <= 10000) {
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
    if (boxVal > 0 && boxVal <= 10000) {
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
    if (boxVal > 0 && boxVal <= 10000) {
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
    if (boxVal > 0 && boxVal <= 10000) {
      for (let i = 0; i < boxVal; i++) {
        setCartPineappleItems(prev => prev.concat(img));
      }
    }
  }

  function ClearCart() {
    setCartMelonItems(prev => prev = []);
    setCartAppleItems(prev => prev = []);
    setCartOrangeItems(prev => prev = []);
    setCartDragonItems(prev => prev = []);
    setCartPearItems(prev => prev = []);
    setCartPineappleItems(prev => prev = []);
    ShowCart();
  }

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        displayMelonCart(event);
      }
    };

    window.addEventListener('keyup', handleEnterPress);

    return () => {
      window.removeEventListener('keyup', handleEnterPress);
    };
  }, []);

  // will clear textboxes after submission =>
  const inputRef = useRef();
  const inputAppleRef = useRef();
  const inputOrangeRef = useRef();
  const inputDragonRef = useRef();
  const inputPearsRef = useRef();
  const inputPineappleRef = useRef();
  const ClearableInput = () => {
      inputRef.current.value = '';
      inputAppleRef.current.value = '';
      inputOrangeRef.current.value = '';
      inputDragonRef.current.value = '';
      inputPearsRef.current.value = '';
      inputPineappleRef.current.value = '';
  }

  // set props for home page with cart contents to be sent over when cart is display block on home page
    return (
        <div>
            <div className='cart'>
                <h3>Cart:</h3>
            </div>
            <div className='checkout'>
                <h3 className='counter'></h3>
                <button onClick={ClearCart} className='checkoutBtn'>Checkout (Clears Cart)</button>
            </div>
            <div className='header'>
            <Link to='/shopping-cart' className='BackHome'><h2>Home</h2></Link>
                <h2>Catalog</h2>
            </div>
            <div className="cardContainerWrapper">
              <div className='cardContain'>
                  <div className='card'>
                      <img className='fruitPics'src={Watermelon} alt=''></img>
                      <label htmlFor='numberBox'>Number of Watermelons
                        <input className='melonBox' type='number' min='1' ref={inputRef} onKeyPress={(event) => {
          if (!/[1-9]/.test(event.key)) {
            event.preventDefault();
          }}}></input>
                      </label>
                  </div>
                  <div className='card'>
                      <img className='fruitPics' src={Apple} alt=''></img>
                      <label htmlFor='numberBox'>Number of Apples
                        <input className='appleBox' type='number' min='1' ref={inputAppleRef} onKeyPress={(event) => {
          if (!/[1-9]/.test(event.key)) {
            event.preventDefault();
          }}}></input>
                      </label>
                  </div>
                  <div className='card'>
                      <img className='fruitPics' src={Orange} alt=''></img>
                      <label htmlFor='numberBox'>Number of Oranges
                        <input className='orangeBox' type='number' min='1' ref={inputOrangeRef} onKeyPress={(event) => {
          if (!/[1-9]/.test(event.key)) {
            event.preventDefault();
          }}}></input>
                      </label>
                  </div>
                  <div className='card'>
                      <img className='fruitPics' src={DragonFruit} alt=''></img>
                      <label htmlFor='numberBox'>Number of Dragonfruits
                        <input className='dragonBox' type='number' min='1' ref={inputDragonRef} onKeyPress={(event) => {
          if (!/[1-9]/.test(event.key)) {
            event.preventDefault();
          }}}></input>
                      </label>
                  </div>
                  <div className='card'>
                      <img className='fruitPics' src={Pear} alt=''></img>
                      <label htmlFor='numberBox'>Number of Pears
                        <input className='pearBox' type='number' min='1' ref={inputPearsRef} onKeyPress={(event) => {
          if (!/[1-9]/.test(event.key)) {
            event.preventDefault();
          }}}></input>
                      </label>
                      <form className='addCartContain' onSubmit={displayMelonCart}>
                        <input type='text' style={{ display: 'none' }} />
                        <input type='submit' className='addCart' value='Add To Cart'></input>
                      </form>
                  </div>
                  <div className='card'>
                      <img className='fruitPics' src={Pineapple} alt=''></img>
                      <label htmlFor='numberBox'>Number of Pineapples
                        <input className='pineappleBox' type='number' min='1' ref={inputPineappleRef} onKeyPress={(event) => {
          if (!/[1-9]/.test(event.key)) {
            event.preventDefault();
          }}}></input>
                      </label>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;