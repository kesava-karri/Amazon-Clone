import { Html } from "@mui/icons-material";
import React from "react";
import "./App.css";
import Header from "./Header.js"; 
import Home from "./Home"; // We can either include js extension or leave it as such which means .js

function App() {
  // App component
  return (
    <div className="app"> {/* Good to use lowercase classNames */}
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;