import React from 'react';
import Carditem from './Card';
import Imgcard from "../../images/product/img-7.webp";

function Currentads(props) {
  const Price = 76.00;
  const {ShowCurrentadsitem}=props;
  return (<div className={ShowCurrentadsitem}>

    <Carditem Image={Imgcard} 
      Title={"فستان برباط أمامى باكمام فانوس بعنق مربع"}
      Price={Price}
      Color={"متعدد الالوان"}
      Size={"M"}
        />
      </div>
  )
}

export default Currentads;