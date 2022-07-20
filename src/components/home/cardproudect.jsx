/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Api } from "../../api/index.js";
import HeartIcon from "../../images/icon/heart_icon.svg";
import ShoppinIcon from "../../images/icon/shopping-bag_icon.svg";

function CardProudect(props) {
  const { Title, Image, Price, Id, ClassCard } = props;


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

const addToFavourite = () => {
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

  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className={ClassCard} >
        <div className="img">
          <NavLink to={`/proudect/${Id}`} onClick={scrollToTop}>
          <img src={Image} alt="Proudect" />
          </NavLink>
          <div className="card_hover">
            <button className="btn btn-heart" onClick={()=>addToFavourite()}>
              <img src={HeartIcon} alt="" />
            </button>
            <button className="btn btn-shopping" onClick={() => addToCart()}>
              <img src={ShoppinIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="content">
          <p>{Title}</p>
          <span>SR {Price}</span>
        </div>
      </div>
    </>
  );
}

export default CardProudect;
