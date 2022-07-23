import React, { useState, useEffect } from "react";
import Cardfavorite from "../../components/favorite/index.jsx";
import axios from "axios";
import { Api } from "../../api/index.js";
import Loading from "../../layout/loading/loading.jsx";
import Empty from "../../components/empty/index.jsx";
import Imagrempity from "../../images/empty/wishlist_empty.png";

function Favorite() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const  options = {
      method: "get",
      url: `${Api}favourites`,
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
  }, [loading,products]);
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__hader">
          <h4>مفضلتى</h4>
        </div>

        <div className="favorite__items">
          <div className="row">

          {loading === false ? ( <Loading/>) :products.length === 0 ? <>
         <Empty Image={Imagrempity} Description="لم تقم بإضافة شيء الى المفضله حتى الان"
         
         />
         </>
         :
            <>
           {products.map(item=>
            <div className="col-sm-12 col-md-6 col-lg-4" key={item.product.id}>
            <Cardfavorite Image={item.product.image} Title={item.product.title} Price={item.product.price} Id={item.product.id}/>
            </div>
            
            )}
            </>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorite;
