
import React from "react";
import CartContent from "../../components/cart/content";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Cart() {

  return (
    <section className="cartpage">
      <div className="container">
        <section className="cartpage__links">
          <NavLink to={`/cart`} className="active">
            حقيبة التسوق
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>تأكيد الطلب</NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>دفع</NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>تم الطلب</NavLink>
        </section>
        <CartContent />
      </div>
    </section>
  );
}

export default Cart;
