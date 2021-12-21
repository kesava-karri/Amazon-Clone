import React from "react";
import "./App.css";
import Header from "./Header.js"; 
import Home from "./Home"; // We can either include js extension or leave it as such which means .js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  // App component
  return (
    <Router>
      <div className="app"> {/* Good to use lowercase classNames */}
      <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;