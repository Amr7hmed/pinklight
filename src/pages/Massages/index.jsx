import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/index.js";
import MassagesContent from '../../components/massages/massagescontent';
import MassagesUsers from '../../components/massages/massagesusers';
import Imguser from "../../images/icon/user.svg";

function Massages() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderid , setOrderid]=useState("");
  const [iditem , setIdeitem]=useState("");

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
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className="profile__massages">
      <div className="container">
        <div className="profile__header">
          <h3>رسائلى</h3>
        </div>

        <div className="profile__content">
          <div className="massages__container">
            <MassagesUsers Imguser={Imguser} Title={"ساره ابراهيم"}/>
            <MassagesContent Imguser={Imguser} Title={"ساره ابراهيم"}/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Massages;


