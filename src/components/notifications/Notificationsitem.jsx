import React from "react";
import Imgnotification from "../../images/icon/iconnotifications.png";
import CloseIcon from "../../images/icon/closeimg.png";
import { Api } from "../../api";
import axios from "axios";

function Notificationsitem(props) {
  const {Text , Id ,setLoading}=props;

  const deleteCart = () => {
    const options = {
      method: "delete",
      url: `${Api}notification/${Id}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data.messge)
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

  return (
    <div>

    
    <div className="profile__notificationsitem">
      <div>
      
      <img src={Imgnotification} alt="" className="logo" />

      <p>{Text}</p>
    </div>
      <button className="btn" onClick={()=>deleteCart()}>
        <img src={CloseIcon} alt="" />
      </button>
    </div>


    <span className="profile__line"></span>
    </div>
  );
}

export default Notificationsitem;
