import './App.css';
import Shelf from './images/shelf.jpg';
import { Link } from 'react-router-dom'
import React from 'react';

export default function App() {
  return (
    <div>
      <div className='cart'>

      </div>
      <div className='header'>
        <h3 style={{color: 'black'}}>Home</h3>
        <Link className='homeShop' to='/shop'> <h3>Shop</h3></Link>
      </div>
      <div className='info'>
        <img className='shelf' alt='' src={Shelf}></img>
        <div className='slogan'>Check out this wide assortment of fruits!</div>
        <Link to='/shop' className='shopBtn'>SHOP</Link>
      </div>
    </div>
  );
}
