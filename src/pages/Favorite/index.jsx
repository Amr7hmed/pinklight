import React, { useState, useEffect } from "react";
import Cardfavorite from "../../components/favorite/index.jsx";
import Imgcardone from "../../images/favorite/img-1.png";
import Imgcardtwo from "../../images/favorite/img-2.png";
import axios from "axios";
import { Api } from "../../api/index.js";


function Favorite() {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    const  options = {
      method: "get",
      url: `${Api}favourites`,
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
