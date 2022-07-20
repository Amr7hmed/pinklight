import axios from "axios";
import React from "react";
import { Api } from "../../api";
import clearimg from "../../images/icon/clear.png";
import Likeimg from "../../images/icon/favorite_like.png";

export default function Cardfavorite(props) {
  const { Title, Image , Price , Id} = props;

  const addToCart = () => {
    const options = {
      method: "post",
      url: `${Api}order/product`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
      },
      data: JSON.stringify({
        "product_id":Id,
        "count": 1
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error");
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
  
  const removeToFavourite = () => {
    const options = {
      method: "get",
      url: `${Api}favourite/${Id}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
      },
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error");
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
  return (
    <section className="favorite__card">
      <div className="img">

        <button className="btn btnlike">

        <img src={Likeimg} alt="" />
        </button>

        <img src={Image} alt="favorite card Img" />
        <button className="btn addcart" onClick={()=>addToCart()}>
        إضافه الى حقيبه التسوق
        </button>
      </div>

      <div className="body">
        <h6>{Title}</h6>

        <div className="price">
          <span>SR {Price}</span>
          <button className="btn iconclear" onClick={()=>removeToFavourite()}>
            <img src={clearimg} alt="Clear Icon" />
          </button>
        </div>
      </div>
    </section>
  )
  };