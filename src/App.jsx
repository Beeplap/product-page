import React from "react";
import Navbar from "./Navbar";
import Addform from "./components/Addform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";


import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/AddProducts" element={<Addform/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
