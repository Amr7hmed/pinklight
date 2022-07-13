import React, { useState } from "react";
import Currentads from "../../components/orders_ads/currentads";
import Pendingads from "../../components/orders_ads/pendingads";

function MyAds() {
  const [Activebutton , setActivebutton] = useState("activebutton");
  const [notActivebutton , setnotActivebutton] = useState("notactivebutton");
  const [ShowCurrentadsitem , setShowCurrentadsitem] = useState("show");
  const [ShowPendingitem, setShowPendingitem] = useState("hide");

  const ShowCurrentads=()=>{
    setnotActivebutton("notactivebutton");
    setActivebutton("activebutton");
    setShowCurrentadsitem("show");
    setShowPendingitem("hide");
  }

  const ShowPendingads=()=>{
    setnotActivebutton("activebutton");
    setActivebutton("notactivebutton");
    setShowCurrentadsitem("hide");
    setShowPendingitem("show");
  }


  return (
    <section className="profile__myads">
      <div className="container">
        <div className="profile__header">
          <h3>إعلاناتى</h3>
        </div>

        <div className="profile__content">
          <div className="myads__list">
            <ul>
              <li>
                <button className={"btn "+ Activebutton} onClick={()=> ShowCurrentads()}>إعلاناتى الحاليه</button>
              </li>
              <li>
                <button className={"btn "+ notActivebutton} onClick={()=> ShowPendingads()}>إعلاناتى المعلقه</button>
              </li>
            </ul>
          </div>

          <div className="myads__items">
            <Currentads ShowCurrentadsitem={ShowCurrentadsitem}/>
            <Pendingads ShowPendingitem={ShowPendingitem}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAds;
