import React, { useState, useEffect } from "react";
import CartContent from "../../components/cart/content";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";
import axios from "axios";
import { Api } from "../../api/index.js";

function Cart() {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    const  options = {
      method: "get",
      url: `${Api}order/products`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    await axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };


  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <section className="cartpage">
      <div className="container">
        <section className="cartpage__links">
          <NavLink to={`/cart`} className="active">
            حقيبة التسوق
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>تأكيد الطلب</NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>دفع</NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>تم الطلب</NavLink>
        </section>
        <CartContent />
      </div>
    </section>
  );
}

export default Cart;
