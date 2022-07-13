import React from 'react';
import Carditem from './Card';
import Imgcard from "../../images/product/img-7.png";

function Pendingads(props) {
  const Price = 100.00;
  const {ShowPendingitem} =props;
  return (<div className={ShowPendingitem}>

  <Carditem Image={Imgcard} 
    Title={"فستان برباط أمامى باكمام فانوس بعنق مربع"}
    Price={Price}
    Color={"متعدد الالوان"}
    Size={"M"}
      />
    </div>
  )
}

export default Pendingads;