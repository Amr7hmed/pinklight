import React from 'react';
import Imgslider from "../../images/bg/slider.png";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <section className='home__slider'>
        <div className="img">
            <img src={Imgslider} alt="Slider Img" />
        </div>
        
        <div className="content">
            <h3>
            خصومات25% على جميع انواع الفساتين 
            <br/>
            اختارى إطلالتك الان
            </h3>

            <p>
            تصاميم متعدده لموسم الربيع , ابتكرى 
            <br/>
            إطلالتك الخاصه مع القطع الرائجه
            </p>

              <NavLink to="/proudects" className="btn">
              تسوق الان
                </NavLink>
        </div>
        </section>
  )
}

export default Slider;