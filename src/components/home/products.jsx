import React from "react";
import Imageone from "../../images/products/img-1.png";
import Imagetwo from "../../images/products/img-2.png";
import Imagethree from "../../images/products/img-3.png";
import Imagefour from "../../images/products/img-4.png";
import Imagefive from "../../images/products/img-5.png";
import Imagesix from "../../images/products/img-6.png";
import CardProudect from "./cardproudect.jsx";
import { NavLink } from "react-router-dom";
function SectionProducts() {
  return (
    <>
      <div className="container">
        <div className="home__products">
          <div className="header">
            <h5>أحدث المنتجات</h5>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardProudect Image={Imageone} Title={"حقيبه مربعه مبطن قلاب"} Price={"76.00"} Id={"1"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardProudect Image={Imagetwo} Title={"فستان برباط أمامى باكمام فانوس بعنق.."} Price={"76.00"} Id={"2"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardProudect Image={Imagethree} Title={"حقيبه نسائيه مربعه مبطن"} Price={"76.00"} Id={"3"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardProudect Image={Imagefour} Title={"فستان 2 في 1 بحزام غير متماثل باكمام ..."} Price={"76.00"}  Id={"4"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardProudect Image={Imagefive} Title={"حزام بمشبك معدنى ثلاث قطع"} Price={"76.00"} Id={"5"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardProudect Image={Imagesix} Title={"عصابة شعر مع لؤلؤ اصطناعى مع ..."} Price={"76.00"} Id={"6"}/>
            </div>

            <div className="buttons">
              <NavLink to="/" className="btn">رؤية الكل</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionProducts;
