import React from "react";
import Imageone from "../../images/products/img-1.png";
import Imagetwo from "../../images/products/img-2.png";
import Imagethree from "../../images/products/img-3.png";
import Imagefour from "../../images/products/img-4.png";
import Imagefive from "../../images/products/img-5.png";
import Imagesix from "../../images/products/img-6.png";
import { NavLink } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="container">
        <div className="home__products">
          <div className="header">
            <h5>أحدث المنتجات</h5>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <NavLink to="/" className="card_item">
                <div className="img">
                  <img src={Imageone} alt="Proudect" />
                </div>

                <div className="content">
                  <p>حقيبه مربعه مبطن قلاب</p>
                  <span>SR 76.00</span>
                </div>
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <NavLink to="/" className="card_item">
                <div className="img">
                  <img src={Imagetwo} alt="Proudect" />
                </div>

                <div className="content">
                  <p>فستان برباط أمامى باكمام فانوس بعنق..</p>
                  <span>SR 76.00</span>
                </div>
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <NavLink to="/" className="card_item">
                <div className="img">
                  <img src={Imagethree} alt="Proudect" />
                </div>

                <div className="content">
                  <p>حقيبه نسائيه مربعه مبطن</p>
                  <span>SR 76.00</span>
                </div>
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <NavLink to="/" className="card_item">
                <div className="img">
                  <img src={Imagefour} alt="Proudect" />
                </div>

                <div className="content">
                  <p>فستان 2 في 1 بحزام غير متماثل باكمام ...</p>
                  <span>SR 76.00</span>
                </div>
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <NavLink to="/" className="card_item">
                <div className="img">
                  <img src={Imagefive} alt="Proudect" />
                </div>
                <div className="content">
                  <p>حزام بمشبك معدنى ثلاث قطع</p>
                  <span>SR 76.00</span>
                </div>
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <NavLink to="/" className="card_item">
                <div className="img">
                  <img src={Imagesix} alt="Proudect" />
                </div>
                <div className="content">
                  <p>عصابة شعر مع لؤلؤ اصطناعى مع ...</p>
                  <span>SR 76.00</span>
                </div>
              </NavLink>
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

export default Products;
