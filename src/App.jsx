import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OrderSuccess from "./components/OrderSuccess";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-placed" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
