import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import New from "./pages/New";
import Tops from "./pages/Tops";
import Bottoms from "./pages/Bottoms";
import Hoodies from "./pages/Hoodies";

import CartContent from "./components/CartContent/CartContent";



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<New addToCart={addToCart} />} />
        <Route path="/tops" element={<Tops addToCart={addToCart} />} />
        <Route path="/bottoms" element={<Bottoms addToCart={addToCart} />} />
        <Route path="/hoodies" element={<Hoodies addToCart={addToCart} />} />
        <Route path="/cartcontent" element={<CartContent/>} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;


