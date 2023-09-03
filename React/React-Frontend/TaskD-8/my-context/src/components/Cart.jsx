import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalAmount,
  } = useCart();

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div><img src={item.images[0]}/></div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)} className='item-quantity button'>+</button>
            <button onClick={() => decreaseQuantity(item.id)} className='item-quantity button'>-</button>
            <button onClick={() => removeFromCart(item.id)} className='remove-button'>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
