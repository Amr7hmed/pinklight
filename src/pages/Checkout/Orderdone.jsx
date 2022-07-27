import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Demand from "../../components/checkout/Demand";
import Shippingsection from "../../components/checkout/Shipping";
import Iconleft from "../../images/icon/chevron-left-solid.svg";
import { Api } from "../../api/index.js";
import { useParams } from "react-router-dom";

function Orderdone() {
  const {id}=useParams();
  const Price = 76,
    Shipping = 10;
    const [address, setAddress] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const  options = {
        method: "get",
        url: `${Api}address`,
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
        },
      };
       axios(options).then(function (response) {
         setLoading(true);
        console.log("handle success");
        console.log(response.data.address[0]);
        setAddress(response.data.address[0])
      })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
  return (
    <section className="checkoutpage">
      <div className="container">
        <section className="checkoutpage__links">
          <NavLink to={`/cart`} className="active">
            حقيبة التسوق
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/confirm/${id}`} className="active">
            تأكيد الطلب
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/payment/${id}`} className="active">
            دفع
          </NavLink>

          <img src={Iconleft} alt="" />


          <span className="active" >تم الطلب</span>
        </section>

        <section className="checkoutpage__content">
          <Shippingsection Address={address} Id={id}/>
          <Demand Price={Price} Shipping={Shipping} classbutton={"hide"} />
        </section>
      </div>
    </section>
  );
}

export default Orderdone;
