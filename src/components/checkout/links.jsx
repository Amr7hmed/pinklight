import React from "react";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Links() {
  return (
    <section className="checkoutpage__links">
      <NavLink to={`/cart`} className="active">حقيبة التسوق</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/confirm`} className="active">تأكيد الطلب</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/`}>دفع</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/`}>تم الطلب</NavLink>
    </section>
  );
}

export default Links;
