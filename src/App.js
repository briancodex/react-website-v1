import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
