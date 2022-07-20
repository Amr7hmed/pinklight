import React, { useState, useEffect } from "react";
import CartCard from "./card.jsx";
import Demand from "./Demand.jsx";
import axios from "axios";
import { Api } from "../../api/index.js";
import Loading from "../../layout/loading/loading.jsx";
import Empty from "../empty/index.jsx";
import Imagrempity from "../../images/empty/shoppingcart-empty.png";

function CartContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartid, setCartid] = useState();

  useEffect(() => {
    const  options = {
      method: "get",
      url: `${Api}order/products`,
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
      setCartid(response.data.cart.id);
      setProducts(response.data.cart_products)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

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
}

export default CartContent;