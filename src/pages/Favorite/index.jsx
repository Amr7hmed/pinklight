import React, { useState, useEffect } from "react";
import Cardfavorite from "../../components/favorite/index.jsx";
import Imgcardone from "../../images/favorite/img-1.png";
import Imgcardtwo from "../../images/favorite/img-2.png";
import axios from "axios";
import { Api } from "../../api/index.js";


function Favorite() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const  options = {
      method: "get",
      url: `${Api}favourites`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
      },
    };
     axios(options).then(function (response) {
       setLoading(true);
      console.log("handle success");
      console.log(response.data);
      //setProducts(response.data.cart_products)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__hader">
          <h4>مفضلتى</h4>
        </div>

        <div className="favorite__items">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Cardfavorite Image={Imgcardone} Title={"فستان برباط أمامى باكمام فانوس بعنق..."} Price={"76.00"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Cardfavorite Image={Imgcardtwo} Title={"فستان برباط أمامى باكمام فانوس بنق..."} Price={"76.00"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorite;
