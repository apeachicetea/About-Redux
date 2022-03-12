import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Cart from "../routes/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
