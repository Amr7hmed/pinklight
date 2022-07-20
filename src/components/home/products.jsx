import React from "react";
import CardProudect from "./cardproudect.jsx";
import { NavLink } from "react-router-dom";
function SectionProducts(props) {
  const { products } = props;
  
  return (
    <>
      <div className="container">
        <div className="home__products">
          <div className="header">
            <h5>أحدث المنتجات</h5>
          </div>

          <div className="row">
            
          {products.map(item =>
            <div className="col-6 col-lg-4" key={item.id}>
              <CardProudect Image={item.image} Title={item.title} Price={item.price} Id={item.id} ClassCard={"home__card"}
              Item={item}/>
            </div>
            )}

            <div className="buttons">
              <NavLink to="/proudects" className="btn">رؤية الكل</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionProducts;
