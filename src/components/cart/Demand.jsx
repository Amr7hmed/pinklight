import React from "react";
import { NavLink } from "react-router-dom";

function Demand(props) {
  const { Price, counter } = props;
  let Totle = Price * counter;
  return (
    <section className="cartpage__demand">
      <h4>موجز الطلب</h4>

      <div className="price">
        <span>إجمالي المبلغ</span>

        <span>SR {Totle.toFixed(2)}</span>
      </div>

      <div className="buttons">
        <NavLink to={`/confirm`} className="btn">
          إتمام الشراء
        </NavLink>
      </div>
    </section>
  );
}

export default Demand;
