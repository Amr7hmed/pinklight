import React from "react";
import accessories from "../../images/categories/accessories.svg";
import bag from "../../images/categories/bag.svg";
import dress from "../../images/categories/dress.svg";
import other from "../../images/categories/other.png";

function Categories() {
  return (
    <>
      <div className="container">
        <div className="home__categories">
          <div className="header">
            <span>
            الفئات
            </span>
          </div>

          <div className="home__categories__items">
              <div className="item">
                  <img src={dress} alt="dress"  className="img-ouer"/>
                  <span>فساتين</span>
              </div>

              <div className="item">
                  <img src={accessories} alt="dress" className="img-ouer"/>
                  <span>اكسسوارات</span>
              </div>
              <div className="item">
                  <img src={bag} alt="dress"  className="img-ouer"/>
                  <span>حقائب</span>
              </div>
              <div className="item">
                  <img src={other} alt="dress" className="img-ouer"/>
                  <span>أخرى</span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
