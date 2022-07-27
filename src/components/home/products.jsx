/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CardProudect from "./cardproudect.jsx";
import { NavLink } from "react-router-dom";
function SectionProducts(props) {
  const { products } = props;
  
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <div className="container">
        <div className="home__products">
          <div className="header">
            <h5>أحدث المنتجات</h5>
          </div>

          <div className="row">
            
          {products.map(item =>
            <div className="col-6 col-lg-4" key={item.id}>
              <CardProudect Image={item.image} Title={item.title} Price={item.price} Id={item.id} ClassCard={"home__card"}
              Item={item}/>
            </div>
            )}

            <div className="buttons">
              <NavLink to="/proudects" className="btn" onClick={scrollToTop}>رؤية الكل</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionProducts;
