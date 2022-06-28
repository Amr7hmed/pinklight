import React from "react";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Links() {
  return (
    <section className="proudect__links">
      <NavLink to={`/pinklight`} >
        الصفحه الرئيسيه
      </NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/proudects`} >
        كل المنتجات
      </NavLink>

    </section>
  );
}

export default Links;
