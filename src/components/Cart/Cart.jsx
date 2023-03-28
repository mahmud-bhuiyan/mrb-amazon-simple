import React from "react";
import "./Cart.css";

/*--------- option 4 ---------*/
// const Cart = (props) => {

/*--------- option 3 ---------*/
const Cart = ({ cart }) => {
  /*--------- option 1 ---------*/
  //   const cart = props.cart;

  /*--------- option 2 ---------*/
  //   const { cart } = props;

  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>

      {/* --------- option 4 --------- */}
      {/* <p>Selected Items: {props.cart.length} </p> */}

      <p>Selected Items: {cart.length} </p>
      <p>Total Price: ${totalPrice} </p>
      <p>Shipping: ${totalShipping} </p>
      <p>Tax: {tax.toFixed(2)} </p>
      <h6>Grand Total: {grandTotal.toFixed(2)} </h6>
    </div>
  );
};

export default Cart;
