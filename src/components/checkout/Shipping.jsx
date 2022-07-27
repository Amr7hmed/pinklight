import React from "react";
import { NavLink } from "react-router-dom";

function Shippingsection(props) {
  const {Address ,Id} =props;
  console.log(Address);
  return (
    <section className="shiping_content">
      <h3>عنوان الشحن</h3>

      <div className="shiping_form">
        <h6> 
          
        {Address.name}{" "}{Address.family_name}
        </h6>
        <p>
          {Address.address}
        </p>
        <span>{Address.phone}</span>

        <NavLink to={`/confirm/${Id}`} className="btn">تعديل</NavLink>
        <div className="clearafix">

        </div>
      </div>
    </section>
  );
}

export default Shippingsection;
