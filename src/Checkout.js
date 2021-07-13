import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_bnner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/CurrencyConverter/ACCB-Banner-Desktop-EN.png"
        />
        <div>
          <h3>Hello,{user ? user.email : "Guest"}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right"></div>
      <Subtotal />
    </div>
  );
}

export default Checkout;
