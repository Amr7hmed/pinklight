import React, { useState } from "react";
import Imglist from "./Imglist";
import ProudectContent from "./proudectcontent";



function Proudectitem(props) {
  const {product}=props;
  const [index, setindex] = useState(0);

  return (
    <section className="proudect__item">
      <Imglist Images={product.images} setindex={setindex} />
        <div className="proudect__cover">
           <img src={product.images[index].image} alt="" />
        </div>
      <ProudectContent
        Title={product.title}
        Price={product.price}
        colors={product.colors}
        brand={product.brand}
        status={product.product_status}
      />
    </section>
    
  );
}

export default Proudectitem;
