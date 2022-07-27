import React from "react";
import { NavLink } from "react-router-dom";

function Demand(props) {
  const { Products ,Cartid } = props;
  const newstate = [];

  Products.forEach((element) => {newstate.push(parseInt(element.count)* parseInt(element.price))});

  let Totleprice = newstate.reduce(function (previousValue, currentValue){return previousValue + currentValue});


  return (
    <section className="cartpage__demand">
      <h4>موجز الطلب</h4>

      <div className="price">
        <span>إجمالي المبلغ</span>

        <span>SR {Totleprice}</span>
      </div>

      <div className="buttons">
        <NavLink to={`/confirm/${Cartid}`} className="btn">
          إتمام الشراء
        </NavLink>
      </div>
    </section>
  );
}

export default Demand;
