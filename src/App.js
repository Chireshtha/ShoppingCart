import React, { useState } from 'react'
import './App.css';
import shirt from './assests/dress.jpeg';
import chudi from './assests/image.jpg';
import phant from './assests/Phants.webp';
import shoe from './assests/Shoe.webp';
import sunclass from './assests/Sunclass.webp';

const productsData = [
  {
    id: 1,
    name: "Shirt",
    price: 900.99,
    image: shirt
  },
  {
    id: 2,
    name: "Chudi",
    price: 1200.99,
    image: chudi
  },
  {
    id: 3,
    name: "Phant",
    price: 600.99,
    image: phant
  },
  {
    id: 4,
    name: "Shoes",
    price: 2000.99,
    image: shoe
  },
  {
    id: 5,
    name: "SunClasses",
    price: 300.99,
    image: sunclass
  }
]
function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (produt) => {
    setCartItems([...cartItems, produt]);
  }
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)


  return (
    <div className="App">
      <header className='header'>
        <h1>E-Commerce Website</h1>
        <div className='cart-info'>
          🛒 cart : {cartItems.length} items
          {/*windows+.*/}

        </div>
      </header>
      <main className='main'>
        <div className='products'>
          {
            productsData.map((product) => (
              <div className='product' key={product.id}>
                <img src={product.image} alt='loading' />
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          }
        </div>

        {/*product 1*/}
        <div className='products'>
          {
            productsData.map((product) => (
              <div className='product' key={product.id}>
                <img src={product.image} alt='loading' />
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          }
        </div>
        {/* Product 2 */}
        <div className='products'>
          {
            productsData.map((product) => (
              <div className='product' key={product.id}>
                <img src={product.image} alt='loading' />
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          }
        </div>
        {/* cart */}
        <div className='cart'>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name}-${item.price.toFixed(2)} 
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </li>
                ))}
              </ul>
              <h3>Total:${totalPrice.toFixed(2)}</h3>
            </>
          )}
        </div>
      </main>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3>About Us</h3>
            <p>Welcome to our E-Commerce Website we offer the best products at low price</p>
          </div>
          <div className='footer-section'>
            <h3>Contact Us</h3>
            <p>Email:chire14vramirthy@gmail.com</p>
            <p>9626037486</p>
          </div>
          <div className='footer-section'>
            <h3>Follow Us</h3>
            <div className=''>
              <a href='#'>FaceBook</a>
              <a href='#'>Instagram</a>
              <a href='#'>Twitter</a>
            </div>
          </div>

        </div>
      </footer>





    </div>
  );
}

export default App;
