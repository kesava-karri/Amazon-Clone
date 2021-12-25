import React from "react";
import "./App.css";
import Header from "./Header.js"; 
import Home from "./Home"; // We can either include js extension or leave it as such which means .js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  // App component
  return (
    <Router>
      <div className="app"> {/* Good to use lowercase classNames */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;