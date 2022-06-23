import React from 'react'
import Carditem from '../../components/porfile/Card';
import Imgcard from "../../images/product/img-7.webp";

function Myorders() {
  const Price = 76.00;
  const HideEdite = "hidebtn";
  return (
    <section className="profile__myorders">
      <div className="container">
        <div className="profile__header">
          <h3>
          طلباتى
          </h3>
      </div>
      <div className="profile__content">
      <Carditem Image={Imgcard} 
        Title={"فستان برباط أمامى باكمام فانوس بعنق مربع"}
        Price={Price}
        Color={"متعدد الالوان"}
        Size={"M"}
        HideEdite={HideEdite}
          />
      </div>

        </div>
      </section>
  )
}

export default Myorders;