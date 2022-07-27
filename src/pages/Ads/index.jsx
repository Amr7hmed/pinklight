import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api";
import Currentads from "../../components/orders_ads/currentads";
import Loading from "../../layout/loading/loading";

function MyAds() {
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
      console.log(response.data.adses);
      setProducts(response.data.adses)
    })
      .catch(function (error) {
        setLoading(true);
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);



  return (
    <section className="profile__myads">
      <div className="container">
        <div className="profile__header">
          <h3>إعلاناتى</h3>
        </div>

        <div className="profile__content">

          <>
            {loading === false ? (
              <Loading />
            ) : (
              <div className="myads__items">
                <Currentads Products={products}/>
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
}

export default MyAds;
