import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function CardProudect(props) {
  const { Title, Image, Price ,Id } = props;
  

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
      <NavLink  to={`/proudect/${Id}`} className="home__card" onClick={scrollToTop}>
        <div className="img">
          <img src={Image} alt="Proudect" />
        </div>

        <div className="content">
          <p>{Title}</p>
          <span>SR {Price}</span>
        </div>
      </NavLink>
    </>
  );
}

export default CardProudect;
