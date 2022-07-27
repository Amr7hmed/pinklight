import React from "react";
import Confirmform from "../../components/checkout/Confirmform";
import Demand from "../../components/checkout/Demand";
import { NavLink, useParams } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Confirm() {
  const {id}=useParams();
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

          <span className="active">
            تأكيد الطلب
          </span>

          <img src={Iconleft} alt="" />

          <span>دفع</span>

          <img src={Iconleft} alt="" />

          <span >تم الطلب</span>
        </section>

        <section className="checkoutpage__content">
          <Confirmform Id={id}/>
          <Demand Price={Price} Shipping={Shipping} classbutton={"hide"}/>
        </section>
      </div>
    </section>
  );
}

export default Confirm;
