import React from 'react';
import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import CartContextProvider from './contexts/CartContext';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <h1>Shopping Cart</h1>
    //   {/* <CartContextProvider>
    //     <ProductList />
    //     <Cart />
    //   </CartContextProvider> */}
  <div>
    <h1>Shopping Cart</h1>
  <Router>
    <nav>
      <ul>
      <li><Link to ="/" >Home</Link></li>
      <li><Link to ="/cart" >Cart</Link></li>
      </ul>
    </nav>
  
    <Routes>
      <Route path="/" element = {<CartContextProvider><ProductList/></CartContextProvider>}></Route>
      <Route path="/cart" element={<CartContextProvider><Cart/></CartContextProvider>}></Route>
    </Routes>
  </Router>
  </div>
  
    
  );
}

export default App;
