import React from "react";
import { NavLink } from "react-router-dom";

function Demand(props) {
  const { Price, Shipping ,classbutton ,Active ,Id} = props;
  let Totle = Price + Shipping;
  return (
    <section className="checkoutpage__demand">
      <h4>موجز الطلب</h4>

      <div className="item">
        <span>إجمالي المبلغ</span>

        <span>SR {Price}</span>
      </div>



      <div className="item">
        <span> رسوم الشحن </span>

        <span>SR {Shipping}</span>
      </div>


      <div className="item">
        <span> المبلغ بالكامل </span>

        <span>SR {Totle}</span>
      </div>


      <div className={"buttons " + classbutton}>
        <NavLink to={`/orderdone/${Id}`} className={"btn "+ Active}>
        استمر
        </NavLink>
        
      </div>

    </section>
  );
}

export default Demand;
