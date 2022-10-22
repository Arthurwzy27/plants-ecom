import React, { useState} from 'react';
import ficus from './assets/ficus.jpg';


import './scss/Cart.scss';


const Cart = () => {
  const [cartOpen, setCartOpen] = useState(true);

  const handleToggle = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className='cart-container'>
    <button className='menu-button' onClick={handleToggle}>
      {cartOpen ? (
        ''
      ) : (
        <img className='cart-icon'
          src='https://cdn-icons-png.flaticon.com/512/2543/2543378.png'
          alt='cart-icon'
        />
      )}
    </button>
    <div className={`menuNav ${cartOpen ? " showMenu" : ''}`}>
      <button style={{border: '1px solid black'}} onClick={()=> setCartOpen(false)}>x</button>
      <span>Your Cart</span>
      <ul className='items-cart'>
        <li className='item-cart'>
          <img className='item-cart-img' src={ficus} alt='ficus' />
          <div className="item-cart-details">
            <span className="item-cart-details-title">Plant 1</span>
            <span className="item-cart-details-option">Small // Brick</span>
            <span className="item-cart-details-price">$ 84</span>
          </div>
        </li>
        <li className='item-cart'>
          <img className='item-cart-img' src={ficus} alt='ficus' />
          <div className="item-cart-details">
            <span className="item-cart-details-title">Plant 2</span>
            <span className="item-cart-details-option">Medium</span>
            <span className="item-cart-details-price">$ 32</span>
          </div>
        </li>
      </ul>

    </div>



    </div>
  )
}

export default Cart
