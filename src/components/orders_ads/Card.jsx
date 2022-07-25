import axios from "axios";
import React from "react";
import { Api } from "../../api";
import Clearimg from "../../images/icon/clear.png";
import Editeimg from "../../images/icon/edite.svg";

function Carditem(props) {
  const { Image, Title, Price, Color, Size ,HideEdite ,Id , setLoading ,Orderid} = props;

  const deleteCart = () => {
    const options = {
      method: "delete",
      url: `${Api}order/${Orderid}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: JSON.stringify({
        "id":Id,
      }),
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
          <button className="btn" onClick={()=>deleteCart()}>
            <img src={Clearimg} alt="Clear" />
          </button>
          </span>
        </div>
        
        <div className="price">SR {Price}</div>

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
