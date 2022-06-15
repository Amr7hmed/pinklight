import React from "react";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Links() {
  return (
    <section className="proudect__links">
      <NavLink to={`/`} >
        الصفحه الرئيسيه
      </NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/`} >
        كل المنتجات
      </NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/`} >
        فستان برباط أمامى
      </NavLink>
    </section>
  );
}

export default Links;
