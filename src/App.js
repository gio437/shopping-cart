import './App.css';
import Shelf from './images/shelf.jpg';
import { Link } from 'react-router-dom'
//import ShopPage from './ShopPage.js';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>Fruits</h1>
        <h2>Shop</h2>
        <h2>Cart</h2>
      </div>
      <div className='info'>
        <div className='slogan'>Check out this wide assortment of fruits! <img class='shelf' alt='' src={Shelf}></img></div>
        <Link to='/shop' className='shopBtn'>SHOP</Link>
      </div>
    </div>
  );
}

export default App;
