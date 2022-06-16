import React, { useState } from 'react';
import Demand from "../../components/checkout/Demand";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";
import Paymentform from '../../components/checkout/Paymentform';

function Payment() {
  const Price = 76,
  Shipping = 10;

  const [isCash, setIsCash] = useState(false);
  const [isVisa, setIsVisa] = useState(false);
  const [Active , setActive]=useState("noactive");
  const [ActiveCash , setActiveCash]=useState("noactive");
  const [ActiveCVisa , setActiveCVisa]=useState("noactive");

  const handleCash = () => {
    setIsCash(!isCash);
    setIsVisa(false);
    setActive("active");
    setActiveCash("active")
    setActiveCVisa("noactive")
  };

  const handleVisa = () => {
    setIsVisa(!isVisa);
    setIsCash(false);
    setActive("active");
    setActiveCash("noactive")
    setActiveCVisa("active")
  };

  return (
    <section className="checkoutpage">
      <div className="container">
    <section className="checkoutpage__links">
      <NavLink to={`/cart`} className="active">حقيبة التسوق</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/confirm`} className="active">تأكيد الطلب</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/payment`} className="active">دفع</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/`}>تم الطلب</NavLink>
    </section>

        <section className="checkoutpage__content">
          <Paymentform handleCash={handleCash} isCash={isCash} ActiveCash={ActiveCash} ActiveCVisa={ActiveCVisa} handleVisa={handleVisa} isVisa={isVisa}/>
          <Demand Price={Price} Shipping={Shipping} classbutton={"show"} Active={Active}/>
        </section>
      </div>
    </section>
  )
}

export default Payment;