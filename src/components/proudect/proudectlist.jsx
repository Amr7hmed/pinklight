import React from 'react';
import { NavLink } from "react-router-dom";
import CardProudect from '../home/cardproudect';
import Image1 from "../../images/products/img-2.png";
import Image2 from "../../images/products/img-7.png";
import Image3 from "../../images/products/img-8.png";
import Image4 from "../../images/products/img-9.png";
import Image5 from "../../images/products/img-10.png";
import Image6 from "../../images/products/img-11.png";

function Proudectlist() {
  return (
    <section className='proudect__list'>
        <h3>منتجات مشابهه</h3>

        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <CardProudect Image={Image1} Title={"فستان برباط أمامى باكمام فانوس بعنق.."} Price={"76.00"} Id={"1"}  ClassCard={"proudects__card"} />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <CardProudect Image={Image2} Title={"فستان 2 في 1 بحزام غير متماثل باكمام .."} Price={"104.00"} Id={"1"}  ClassCard={"proudects__card"} />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <CardProudect Image={Image3} Title={"فستان طباعة الازهار رباط امامى اكمام ..."} Price={"71.00"} Id={"1"}  ClassCard={"proudects__card"} />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <CardProudect Image={Image4} Title={"فستان برباط أمامى باكمام فانوس بعنق.."} Price={"76.00"} Id={"1"}  ClassCard={"proudects__card"} />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <CardProudect Image={Image5} Title={"فستان 2 في 1 بحزام غير متماثل باكمام .."} Price={"102.00"} Id={"1"}  ClassCard={"proudects__card"} />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <CardProudect Image={Image6} Title={"فستان 2 في 1 بحزام غير متماثل باكمام .."} Price={"76.00"} Id={"1"}  ClassCard={"proudects__card"} />

            </div>
        </div>
        
        <div className="buttons">
              <NavLink to="/proudects" className="btn">رؤية الكل</NavLink>
            </div>
    </section>
  )
}

export default Proudectlist;