import React, { useState} from 'react';


import './scss/Cart.scss';


const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

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
      <ul >
        <span>Your Cart</span>
        <button style={{border: '1px solid black'}} onClick={()=> setCartOpen(false)}>x</button>
        <li className='navbar-items' >
            Plant 1
        </li>
      </ul>

    </div>



    </div>
  )
}

export default Cart
