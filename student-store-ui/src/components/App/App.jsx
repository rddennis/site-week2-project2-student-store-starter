import * as React from "react"
import axios from 'axios';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {

  // Create state objects
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState({})

  const handleOnToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const handleAddItemToCart = ({target}) => {
    const prodId = target.value;
    const product = {itemId: prodId, quantity: 1}
    let cart = shoppingCart;

    let found = cart.findIndex(item => item.itemId == prodId);
    if (found == -1) {
      cart.push(product)
    }
    else {
      cart.filter(item => item.itemId == prodId).forEach(item => item.quantity++)
    }

    setShoppingCart(cart)
  
  }

  const handleRemoveItemFromCart = ({target}) => {
    const prodId = target.value;
    let cart = shoppingCart;

    let found = cart.findIndex(item => item.id == prodId)

    if (found != -1 ) {
        cart.filter(item => item.itemId == prodId).map(item => item.quantity--)
        cart = cart.filter(item => item.quantity != 0)
    }
    
    setShoppingCart(cart)
  }

  const handleOnCheckoutFormChange = () => {
    // TODO
  }

  const handleOnSubmitCheckoutForm = () => {
    // TODO
  }

  const fetchData = async () => {
    console.log("Calling fetchData....");
    setIsFetching(true); // fetching data from API
    
    try {
      const resData = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
      let prods = resData.data.products;
      console.log("Data fetched successfully.");
      setProducts(prods);
    } catch (err) {
      console.log(`Error: ${err}`);
      setError("There was an error obtaining product data from the API.")
    }
    setIsFetching(false); // data fetching is complete
  }

  // obtains content, then confirms that the App component has mounted
  useEffect (() => {
    fetchData();
  }, [])

  // outputs data
  return (
    <div className="app">
      <BrowserRouter>
      <main>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<Home 
                                    products={products}
                                    shoppingCart={shoppingCart}
                                    handleAddItemToCart={handleAddItemToCart}
                                    handleRemoveItemFromCart={handleRemoveItemFromCart}/>} ></Route>
          <Route path="/products/:productId" element={<ProductDetail
                                                        handleAddItemToCart={handleAddItemToCart}
                                                        handleRemoveItemFromCart={handleRemoveItemFromCart} />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
