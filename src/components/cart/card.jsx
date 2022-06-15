import React from "react";
import Clearimg from "../../images/icon/clear.png";

function CartCard(props) {
  const { Image, Title, Price ,Color , Size ,decrease,increase,counter} = props;

 
  
 


  return (
    <section className="cartpage__card">
      <div className="img">
        <img src={Image} alt="" />
      </div>
      <div className="content">
        <h4>{Title}</h4>
        <div className="price">SR {Price.toFixed(2)}</div>

        <div className="color">
          <p>اللون</p>
          <p>{Color}</p>
        </div>

        <div className="size">
          <p>المقاس</p>
          <p>{Size}</p>
        </div>
      </div>

      <div className="action">
        <button className="btn">
          <img src={Clearimg} alt="Clear" />
        </button>


        <div className="inputgroup">
          <button className="btn" onClick={decrease}>-</button>
          <span>{counter}</span>
          <button className="btn" onClick={increase}>+</button>
        </div>
      </div>
    </section>
  );
}

export default CartCard;
