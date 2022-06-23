import React from "react";
import Senmassge from "../../images/icon/send-icon-massge.svg";

function MassagesContent(props) {
  const { Imguser, Title } = props;
  return (
    <div className="massages__content">
      <div>
        <span className="user">
          <img src={Imguser} alt="Imguser" />
          <span>{Title}</span>
        </span>

        <div className="chat">
          <div className="system">
            <span>هل سعر الفستان قابل للتفاوض؟</span>
          </div>
          <div className="user">
            <span>نعم قابل للتفاوض</span>
          </div>
        </div>
      </div>

      <div className="send">
        <input type="text" />
        <button className="btn">
          <img src={Senmassge} alt="" />
        </button>
      </div>
    </div>
  );
}

export default MassagesContent;
