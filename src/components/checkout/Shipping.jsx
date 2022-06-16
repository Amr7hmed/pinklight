import React from "react";
import { NavLink } from "react-router-dom";

function Shippingsection() {
  return (
    <section className="shiping_content">
      <h3>عنوان الشحن</h3>

      <div className="shiping_form">
        <h6>احمد عبدالمعطى/يمنى</h6>
        <p>
          طريق الأمير محمد بن عبدالعزيز / العليا / الرياض بنايه 16 / الدور
          الثالت / شقه 6
        </p>
        <span>+966 5566 00910</span>

        <NavLink to={`/confirm`} className="btn">تعديل</NavLink>
        <div className="clearafix">

        </div>
      </div>
    </section>
  );
}

export default Shippingsection;
