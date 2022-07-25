import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api";
import Currentads from "../../components/orders_ads/currentads";
import Pendingads from "../../components/orders_ads/pendingads";
import Loading from "../../layout/loading/loading";

function MyAds() {
  const [Activebutton, setActivebutton] = useState("activebutton");
  const [notActivebutton, setnotActivebutton] = useState("notactivebutton");
  const [ShowCurrentadsitem, setShowCurrentadsitem] = useState("show");
  const [ShowPendingitem, setShowPendingitem] = useState("hide");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "get",
      url: `${Api}ads`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response.data);
      setProducts(response.data)
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const ShowCurrentads = () => {
    setnotActivebutton("notactivebutton");
    setActivebutton("activebutton");
    setShowCurrentadsitem("show");
    setShowPendingitem("hide");
  }

  const ShowPendingads = () => {
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
                <button className={"btn " + Activebutton} onClick={() => ShowCurrentads()}>إعلاناتى الحاليه</button>
              </li>
              <li>
                <button className={"btn " + notActivebutton} onClick={() => ShowPendingads()}>إعلاناتى المعلقه</button>
              </li>
            </ul>
          </div>

          <>
            {loading === false ? (
              <Loading />
            ) : (
              <div className="myads__items">
                <Currentads ShowCurrentadsitem={ShowCurrentadsitem} />
                <Pendingads ShowPendingitem={ShowPendingitem} />
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
}

export default MyAds;
