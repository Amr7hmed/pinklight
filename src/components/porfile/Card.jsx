import React from "react";
import Clearimg from "../../images/icon/clear.png";
import Editeimg from "../../images/icon/edite.svg";

function Carditem(props) {
  const { Image, Title, Price, Color, Size ,HideEdite} = props;

  return (
    <section className="profile__card">
      <div className="img">
        <img src={Image} alt="" />
      </div>
      <div className="content">
        <div className="top">
          <h4>{Title}</h4>
          <span className="action">

          <button className={"btn " + HideEdite}>
            <img src={Editeimg} alt="Edite" />
          </button>
          <button className="btn">
            <img src={Clearimg} alt="Clear" />
          </button>
          </span>
        </div>
        
        <div className="price">SR {Price.toFixed(2)}</div>

        <div className="color">
          <span>اللون</span>
           {" "}
          <span>{Color}</span>
        </div>

        <div className="size">
          <span>المقاس </span>
           {" "}
          <span>{Size}</span>
        </div>
      </div>
    </section>
  );
}

export default Carditem;
