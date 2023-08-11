import React, { useState } from 'react';

const Product = ({ id, name, description, addToCart, removeFromCart, isInCart }) => {
    return (
      <div className="product">
        <h3>{name}</h3>
        <p>{description}</p>
        {isInCart ? (
          <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
        ) : (
          <button onClick={() => addToCart(id)}>Add to Cart</button>
        )}
      </div>
    );
  };
  
  const ShoppingCart = ({ cartItems, removeFromCart }) => {
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const New = () => {
    const [products, setProducts] = useState([
      { id: 1, name: 'Fancy Products', description: '$40.00 - $80.00' },
      { id: 2, name: 'Special Products', description: '$10.00 - $50.00' },
      { id: 3, name: 'New Products', description: '$20.00 - $100.00' },
      { id: 4, name: 'Offer Products', description: '$5.00 - $10.00' },
      // Add more products here
    ]);
  
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = productId => {
      const productToAdd = products.find(product => product.id === productId);
      if (productToAdd) {
        setCartItems([...cartItems, productToAdd]);
      }
    };
  
    const removeFromCart = productId => {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
    };
  
    return (
      <div className="app">
        <div className="product-list">
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={cartItems.some(item => item.id === product.id)}
            />
          ))}
        </div>
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    );
  };
  
  export default New;
  