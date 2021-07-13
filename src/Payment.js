import React from "react";
import axios from "./axios";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [succeeded, setsucceeded] = useState(false);
  const [processing, setprocessing] = useState("");
  const [error, seterror] = useState(null);
  const [disbled, setdisbled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log(clientSecret);
  console.log(user);
  const hndleSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setsucceeded(true);
        seterror(null);
        setprocessing(false);
        dispatch({
          type: "EMPTY_THE_BASKET",
        });
        history.replace("/orders");
      });
  };
  const hndleChnge = (e) => {
    setdisbled(e.empty);
    seterror(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="pyment_continer">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length}items.</Link>)
        </h1>
        <div className="Pyment_section">
          <div className="pyment_title">
            <h3>Delivery Address:</h3>
          </div>
          <div className="Pyment_dress">
            <p>{user?.email}</p>
            <p>SilverLine Buildings</p>
            <p>New Delhi,India.</p>
          </div>
        </div>
        <div className="Pyment_section">
          <div className="pyment_title">
            <h3>Review Items & Delivery.</h3>
          </div>
          <div className="pyment_items">
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
        <div className="Pyment_section">
          <div className="pyment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="pyment_detils">
            {/*Stripe*/}
            <form onSubmit={hndleSubmit}>
              <CardElement onChange={hndleChnge} />
              <div className="pyment_price">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs"}
                />
                <button
                  className="Process_button"
                  disabled={processing || disbled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now."}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
