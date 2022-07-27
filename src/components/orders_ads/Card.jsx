import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Clearimg from "../../images/icon/clear.png";
import Editeimg from "../../images/icon/edite.svg";

function Carditem(props) {
  const { Image, Title, Price, Color, Size ,HideEdite  ,DeleteItem ,Status , Id} = props;

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
    <section className="profile__card">
      <div className="img">
        <img src={Image} alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }} />
      </div>
      <div className="content">
        <div className="top">
          <h4>{Title}</h4>
          <span className="action">

          <NavLink to={`/edaitads/${Id}`} onClick={scrollToTop}  className={"btn " + HideEdite}>
            <img src={Editeimg} alt="Edite" />
          </NavLink>
          <button className="btn"  onClick={DeleteItem}>
            <img src={Clearimg} alt="Clear" />
          </button>
          </span>
        </div>
        
        <div className="price">SR {Price}</div>

        <div className={"color" + HideEdite}>
          <span>الحاله</span>
           {" "}
          <span>{Status}</span>
        </div>

        <div className="color">
          <span>اللون</span>
           {" "}
          <span>{Color}</span>
        </div>

        <div className="size">
          <span>المقاس </span>
           {" "}
          <span>{Size}</span>
        </div>
      </div>
    </section>
  );
}

export default Carditem;
