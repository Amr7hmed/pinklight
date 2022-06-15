import React from "react";
import { NavLink } from "react-router-dom";

function CardProudect(props) {
  const { Title, Image, Price ,Id } = props;
  return (
    <>
      <NavLink  to={`/proudect/${Id}`} className="home__card">
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
