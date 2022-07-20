import React from 'react';
import { NavLink } from "react-router-dom";
import CardProudect from '../home/cardproudect';
import Image1 from "../../images/products/img-2.png";
import Image2 from "../../images/products/img-7.png";
import Image3 from "../../images/products/img-8.png";
import Image4 from "../../images/products/img-9.png";
import Image5 from "../../images/products/img-10.png";
import Image6 from "../../images/products/img-11.png";

function Proudectlist(props) {
  const {Similarproducts}=props;
  return (
    <section className='proudect__list'>
        <h3>منتجات مشابهه</h3>

        <div className="row">
          {Similarproducts.map( item=>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <CardProudect Image={item.image} 
              Title={item.title} 
              Price={item.price} Id={item.id}  ClassCard={"proudects__card"}/>
            </div>
              )}
        </div>
        
        <div className="buttons">
              <NavLink to="/proudects" className="btn">رؤية الكل</NavLink>
            </div>
    </section>
  )
}

export default Proudectlist;