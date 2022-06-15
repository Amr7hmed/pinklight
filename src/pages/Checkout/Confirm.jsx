import React from "react";
import Confirmform from "../../components/checkout/Confirmform";
import Demand from "../../components/checkout/Demand";
import Links from "../../components/checkout/links";

function Confirm() {
  const Price = 76,
  Shipping = 10;

  return (
    <section className="checkoutpage">
      <div className="container">
        <Links />

        <section className="checkoutpage__content">
          <Confirmform/>
          <Demand Price={Price} Shipping={Shipping} />
        </section>
      </div>
    </section>
  );
}

export default Confirm;
