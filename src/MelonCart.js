import React from "react";
import { useState } from "react";

export default function ShowCart() {
    let [cartItems, setCartItems] = useState([]);

    function displayMelonCart() {
        const existingImages = document.querySelectorAll('.melonImg');
        existingImages.forEach(melonDiv => {
          melonDiv.remove();
        })

        const cartDisplay = document.querySelector('.cart');
        cartDisplay.style.display = 'flex';
        let img = Watermelon;
        setToggleHeader(prev => prev = 1);
        setCartItems(prev => prev.concat(img));
        cartItems.forEach(item => {
            const itemTag = document.createElement('img');
            itemTag.classList.add('melonImg');
            itemTag.id = 'cartImg';
            itemTag.src = item;
            cartDisplay.appendChild(itemTag);
        })
      }

    return (
        <div className='cart'>
            <h3>Cart</h3>
        </div>
    )
}