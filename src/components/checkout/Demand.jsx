import React from "react";

function Demand(props) {
  const { Price, Shipping } = props;
  let Totle = Price + Shipping;
  return (
    <section className="checkoutpage__demand">
      <h4>موجز الطلب</h4>

      <div className="item">
        <span>إجمالي المبلغ</span>

        <span>SR {Price.toFixed(2)}</span>
      </div>



      <div className="item">
        <span> رسوم الشحن </span>

        <span>SR {Shipping.toFixed(2)}</span>
      </div>


      <div className="item">
        <span> المبلغ بالكامل </span>

        <span>SR {Totle.toFixed(2)}</span>
      </div>

    </section>
  );
}

export default Demand;
