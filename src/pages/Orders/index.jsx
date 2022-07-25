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
      setProducts(response.data.orders[0].orderProducts)
    })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  return (
    <section className="profile__myorders">
      <div className="container">
        <div className="profile__header">
          <h3>
            طلباتى
          </h3>
        </div>
        <div className="profile__content">
          <>
            {loading === false ? (
              <Loading />
            ) : products.length === 0 ? <>
              <Empty Image={Imagrempity} Description="لم تقم بإضافة اى منتج الى حقيبة التسوق حتى الان"
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
                    Orderid={orderid}
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
         <Empty Image={Imagrempity} Description="لم تقم بإضافة اى منتج الى حقيبة التسوق حتى الان"
         Title="حقيبة التسوق"
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