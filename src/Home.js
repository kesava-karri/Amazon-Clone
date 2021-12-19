import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_TVOD_LastNightInSoho_PVOD/9db297bf-a46e-4941-b711-3e101f8c82e5._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Power of Habit: Why We Do What We Do, and How to Change Paperback – International Edition, January 1, 2013" 
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41fQW9Q-L4L._SX324_BO1,204,203,200_.jpg"
          />
          <Product
            id="49525252"
            title="COOKLEE Stand Mixer, 9.5 Qt. 660W 10-Speed Electric Kitchen Mixer with Dishwasher-Safe Dough Hooks, Flat Beaters, Wire Whip & Pouring Shield Attachments for Most Home Cooks, SM-1551, Black" 
            price={149}
            rating={4}
            image="https://m.media-amazon.com/images/I/71MfCtvGs3L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
            id="49525253"
            title="Apple Watch Series 7 GPS, 41mm Blue Aluminum Case with Abyss Blue Sport Band - Regular" 
            price={349}
            rating={4}
            image="https://m.media-amazon.com/images/I/71GIYSZpW+L._AC_SL1500_.jpg"
          />
          <Product 
            id="49525254"
            title="Echo (4th Gen) | Spherical design with rich sound, smart home hub, and Alexa | Charcoal"
            price={59.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_SL1000_.jpg"
          />
          <Product 
            id="49525255"
            title="Dell 240Hz Gaming Monitor 24.5 Inch Full HD Monitor with IPS Technology, Antiglare Screen, Dark Metallic Grey - S2522HG" 
            price={229.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61+Izs+xjYL._AC_SL1280_.jpg"
          />                    
        </div>

        <div className="home__row">
        <Product 
            id="49525256"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model" 
            price={1301.30}
            rating={4}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
