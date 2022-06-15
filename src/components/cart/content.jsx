import React, { useState } from "react";
import CartCard from "./card.jsx";
import Imgproudect from "../../images/product/img-7.webp";
import Demand from "./Demand.jsx";

function CartContent() {
  const [counter, setCounter] = useState(1);
  const Price = 76.00;
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    if(counter <= 1){
      setCounter(1);
    }else{
      setCounter(count => count - 1);
    }
  };

  return (
    <section className="cartpage__content">
      <CartCard
        Image={Imgproudect}
        Title={"فستان برباط أمامى باكمام فانوس بعنق مربع"}
        Price={Price}
        Color={"متعدد الالوان"}
        Size={"M"}
        increase={increase}
        decrease={decrease}
        counter={counter}
      />
      <Demand 
        Price={Price}
        counter={counter}/>
    </section>
  );
}

export default CartContent;
