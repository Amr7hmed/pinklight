import React from "react";
import accessories from "../../images/categories/accessories.svg";
import bag from "../../images/categories/bag.svg";
import dress from "../../images/categories/dress.svg";

function PostCategories() {
  return (
    <section className="post__categories">
      <h5>اختر الفئه </h5>

      <div className="post__categories__items">
            <div className="item">
              <img src={dress} alt="accessories" />
              <span>فساتين</span>
            </div>
            <div className="item">
              <img src={bag} alt="accessories" />
              <span>حقائب</span>
            </div>
            <div className="item">
              <img src={accessories} alt="accessories" />
              <span>أكسسوارات</span>
            </div>
            <div className="item">
              <img src={dress} alt="accessories" />
              <span>أخرى</span>
            </div>
      </div>
    </section>
  );
}

export default PostCategories;
