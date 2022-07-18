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
      <img src={Iconleft} alt="" />
      <span>
        فستان برباط أمامى
      </span>
    </section>
  );
}

export default Links;
