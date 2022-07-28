/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../api/index.js";
import Senmassge from "../../images/icon/massegrhet.svg";


function ModalMasseg(props) {
    const {  User } = props;
    const [valuemassge, setValuemassge]=useState("");
     
  const sendmessage = () => {
    const options = {
      method: "post",
      url: `${Api}send/message`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data : JSON.stringify({
        "to_user": User.id,
        "message": valuemassge
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response)
      setValuemassge("")
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
    <div className="modal fade" id="ModalMasseg" tabIndex="-1" aria-labelledby="ModalMassegLabel" aria-hidden="true">
    <div className="modal-dialog proudect__massages" >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="ModalMassegLabel">
            أرسال رساله
             </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            
    <div className="massages__content">
        <span className="user">
          <img src={User.image} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }}/>
          <span>{User.name}</span>
        </span>

      <div className="send">
        <input type="text" id="textmassge" value={valuemassge} onChange={(e)=>setValuemassge(e.target.value)}/>
        <button className="btn" onClick={()=>sendmessage()}>
          <img src={Senmassge} alt="" />
        </button>
      </div>
    </div>
    
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalMasseg;