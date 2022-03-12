import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Cart from "../routes/Cart";
import Cart2 from "../routes/Cart2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cart/:id' element={<Cart2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
