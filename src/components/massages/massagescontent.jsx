import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/index.js";
import Senmassge from "../../images/icon/send-icon-massge.svg";

function MassagesContent(props) {
  const { Imguser, Title } = props;
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valuemassge, setValuemassge]=useState("");

  useEffect(() => {
    const options = {
      method: "post",
      url: `${Api}user-messges`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response.data.messges);
      setData(response.data.messges)
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


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
        "to_user": 7,
        "message": {valuemassge}
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response)
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
        <input type="text" id="textmassge" value={valuemassge} onChange={(e)=>setValuemassge(e.target.value)}/>
        <button className="btn" onClick={()=>sendmessage()}>
          <img src={Senmassge} alt="" />
        </button>
      </div>
    </div>
  );
}

export default MassagesContent;
