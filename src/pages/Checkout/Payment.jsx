import React, { useState } from 'react';
import Demand from "../../components/checkout/Demand";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";
import Paymentform from '../../components/checkout/Paymentform';
import axios from 'axios';
import { Api } from '../../api';
import { useParams } from "react-router-dom";

function Payment() {
  const {id}=useParams();
  const Price = 76,
  Shipping = 10;

  const handleSubmit = (data) => {
    const options = {
      method: "post",
      url: `${Api}order/payment/${id}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
      },
      data: JSON.stringify({
        "payment": data
      })
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.messge);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
    });
  };

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
    handleSubmit("cach")
  };

  const handleVisa = () => {
    setIsVisa(!isVisa);
    setIsCash(false);
    setActive("active");
    setActiveCash("noactive")
    setActiveCVisa("active")
    handleSubmit("visa")
  };

  return (
    <section className="checkoutpage">
      <div className="container">
    <section className="checkoutpage__links">
      <NavLink to={`/cart`} className="active">حقيبة التسوق</NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/confirm/${id}`} className="active">تأكيد الطلب</NavLink>

      <img src={Iconleft} alt="" />

<span>دفع</span>

      <img src={Iconleft} alt="" />


      <span >تم الطلب</span>
    </section>

        <section className="checkoutpage__content">
          <Paymentform handleCash={handleCash} isCash={isCash} 
          ActiveCash={ActiveCash} ActiveCVisa={ActiveCVisa} handleVisa={handleVisa} isVisa={isVisa} Id={id}/>
          <Demand Price={Price} Shipping={Shipping} 
          classbutton={"show"} Active={Active} Id={id}/>
        </section>
      </div>
    </section>
  )
}

export default Payment;