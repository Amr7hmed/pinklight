import React, { useState } from "react";
import Clearimg from "../../images/icon/clear.png";
import { Api } from "../../api/index.js";
import axios from "axios";

function CartCard(props) {
  const { Image, Title, Price, Color, Size, counter, Id ,Cartid , setLoading} = props;

  const count = parseInt(counter);

  const [counternumber, setCounternumber] = useState(count);

  const handleSubmit = (action) => {
    const options = {
      method: "post",
      url: `${Api}order/update/${Cartid}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: JSON.stringify({
        "product_id": Id,
        "type": action
      })
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.message)
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


  const deleteCart = () => {
    const options = {
      method: "DELETE",
      url: `${Api}order/products/${Id}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response)
      setLoading(false)
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
  const increase = () => {
    setCounternumber(count => count + 1);
    handleSubmit("increase");
  };

  //decrease counter
  const decrease = () => {
    handleSubmit("decrease");
    if (counter <= 1) {
      setCounternumber(1);
    } else {
      setCounternumber(count => count - 1);
    }
  };



  return (
    <section className="cartpage__card">
      <div className="img">
        <img src={Image} alt="" />
      </div>
      <div className="content">
        <h4>{Title}</h4>
        <div className="price">SR {parseInt(Price) * counternumber}</div>

        <div className="color">
          <p>اللون</p>
          <p>{Color}</p>
        </div>

        <div className="size">
          <p>المقاس</p>
          <p>{Size}</p>
        </div>
      </div>

      <div className="action">
        <button className="btn">
          <img src={Clearimg} alt="Clear" onClick={()=>deleteCart()}/>
        </button>


        <div className="inputgroup">
          <button className="btn" onClick={decrease}>-</button>
          <span>{counternumber}</span>
          <button className="btn" onClick={increase}>+</button>
        </div>
      </div>
    </section>
  );
}

export default CartCard;
