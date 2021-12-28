import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(basket);

  return (
    <div className="checkout">
			<div className="checkout__left">
				<img 
					className="checkout__ad"
					src="https://m.media-amazon.com/images/I/716kWBue3fL._SX3000_.jpg"
					alt="ad"
				/>

        <div>
          <h3>Hello, {user?.email} </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* <FlipMove> */}
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          {/* </FlipMove> */}
        </div>
			</div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
