import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/index.js";
import Empty from "../../components/empty/index.jsx";
import Carditem from '../../components/orders_ads/Card';
import Loading from "../../layout/loading/loading.jsx";
import Imagrempity from "../../images/empty/shoppingcart-empty.png";

function Myorders() {
  const HideEdite = "hidebtn";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderid , setOrderid]=useState("");
  const [iditem , setIdeitem]=useState("");

  useEffect(() => {
    const options = {
      method: "get",
      url: `${Api}order/all`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response);
      setOrderid(response.data.orders[0].id)
      setIdeitem(response.data.orders[0].orderProducts.id)
      setProducts(response.data.orders[0].orderProducts)
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  

  const deleteCart = () => {
    const options = {
      method: "delete",
      url: `${Api}order/${orderid}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: JSON.stringify({
        "id":iditem,
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
    <section className="profile__myorders">
      <div className="container">
        <div className="profile__header">
          <h3>
            ????????????
          </h3>
        </div>
        <div className="profile__content">
          <>
            {loading === false ? (
              <Loading />
            ) : products.length === 0 ? <>
              <Empty Image={Imagrempity} Description="???? ?????? ???????????? ???? ???????? ?????? ?????????? ???????????? ?????? ????????"
              />
            </>
              : (<>
                {products.map(item =>
                  <Carditem Image={item.image}
                    Title={item.title}
                    Price={item.price}
                    Color={item.colors}
                    Size={item.sizes}
                    HideEdite={HideEdite}
                    key={item.id}
                    Id={item.id}
                    DeleteItem={deleteCart}
                    setLoading={setLoading}
                  />
                )}
              </>
              )}
          </>
        </div>

      </div>
    </section>
  )
}

export default Myorders;

/*
return (<>
    {loading === false ? (
           <Loading/>
         ) : products.length === 0 ? <>
         <Empty Image={Imagrempity} Description="???? ?????? ???????????? ???? ???????? ?????? ?????????? ???????????? ?????? ????????"
         Title="?????????? ????????????"
         />
         </>
         :(
           <section className="cartpage__content">
             {products.map(item =>
             <CartCard
               Image={item.image}
               Title={item.title}
               Price={item.price}
               Color={item.colors}
               Size={item.sizes}
               counter={item.count}
               key={item.id}
               Cartid={cartid}
               Id={item.id}
               setLoading={setLoading}/>
             )}
             <Demand Products={products}/>
           </section>
         )}
  </>
  );
*/