import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket[0]);

  return (
    <div className="checkout">
			<div className="checkout__left">
				<img 
					className="checkout__ad"
					src="https://m.media-amazon.com/images/I/716kWBue3fL._SX3000_.jpg"
					alt="ad"
				/>

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* <div>{basket[0]}</div> */}

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */} 
        </div>
			</div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
