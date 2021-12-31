import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js"; 
import Home from "./Home"; // We can either include js extension or leave it as such which means .js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51KCZNFCeaw2FkqOCBw9tkvXxe1CzDqe3t4E9pgG4Ap26hbw2z2F3ZFDdvp9EJu3Ybsx2WEGWBDoIOBVDPUVrRied00j0z9UVhN');

function App() {
  // App component

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs once when app component loads as the [] is empty

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        // the user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user logged out

        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app"> {/* Good to use lowercase classNames */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}> 
                <Payment /> 
              </Elements>
            ]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;