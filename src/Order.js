import CurrencyFormat from "react-currency-format";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";
import moment from "moment";
function Order({ order }) {
  return (
    <div className="order">
      <h5>Order Processed</h5>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
    </div>
  );
}

export default Order;
