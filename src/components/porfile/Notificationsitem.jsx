import React, { useState } from "react";
import Imgnotification from "../../images/icon/iconnotifications.png";
import CloseIcon from "../../images/icon/closeimg.png";

function Notificationsitem() {
  const [vispiltymodule , setvispiltymodule] = useState("show");




  const Hidemodule=()=>{
    setvispiltymodule("hide")
  }

  return (
    <div className={vispiltymodule}>

    
    <div className="profile__notificationsitem">
      <div>
      
      <img src={Imgnotification} alt="" className="logo" />

      <p>لقد وافقت إدارة الموقع على نشر إعلانك </p>
    </div>
      <button className="btn" onClick={()=> Hidemodule()}>
        <img src={CloseIcon} alt="" />
      </button>
    </div>


    <span className="profile__line"></span>
    </div>
  );
}

export default Notificationsitem;
