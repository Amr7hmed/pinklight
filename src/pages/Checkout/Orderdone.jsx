import React from "react";
import { NavLink } from "react-router-dom";
import Demand from "../../components/checkout/Demand";
import Shippingsection from "../../components/checkout/Shipping";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Orderdone() {
  const Price = 76,
    Shipping = 10;
  return (
    <section className="checkoutpage">
      <div className="container">
        <section className="checkoutpage__links">
          <NavLink to={`/cart`} className="active">
            حقيبة التسوق
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/confirm`} className="active">
            تأكيد الطلب
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/payment`} className="active">
            دفع
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`} className="active">
            تم الطلب
          </NavLink>
        </section>

        <section className="checkoutpage__content">
          <Shippingsection />
          <Demand Price={Price} Shipping={Shipping} classbutton={"hide"} />
        </section>
      </div>
    </section>
  );
}

export default Orderdone;
