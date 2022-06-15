import React from "react";
import CartContent from "../../components/cart/content";
import Links from "../../components/cart/links";

function Cart() {
  return (
    <section className="cartpage">
      <div className="container">
        <Links />
        <CartContent/>
      </div>
    </section>
  );
}

export default Cart;
