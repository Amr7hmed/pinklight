import React from 'react';
import { NavLink } from "react-router-dom";
import CardProudect from '../home/cardproudect';

function Proudectlist(props) {
  const {Similarproducts}=props;
  return (
    <section className='proudect__list'>
        <h3>منتجات مشابهه</h3>

        <div className="row">
          {Similarproducts.map( item=>
            <div className="col-sm-6 col-md-6 col-lg-3" key={item.id}>
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