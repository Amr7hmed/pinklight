import React from 'react';
import Imgslider from "../../images/bg/slider.png";

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

            <button className='btn'>
            تسوقى الان
            </button>
        </div>
        </section>
  )
}

export default Slider;