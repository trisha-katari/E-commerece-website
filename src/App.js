import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Components/Login';
import Register from './Components/Register'
 import ProductDetails from './Pages/ProductDetails';
 import Cart from './Components/Cart';
 import Checkout from './Components/Checkout';
 import ErrorPage from './Pages/ErrorPage';
 import Footer from './Components/Footer';
 const App = () => {
   return (
     <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/checkout" element={<Checkout/>} />
         <Route path="*" element={<ErrorPage />} />
       </Routes>
       <Footer/>
     </Router>
   );
 };
 
 export default App;
 