import React from "react";
import offersimg from "../../images/bg/offers.png";

function Offers() {
  return (
    <section className="home__offers">
      <div className="img">
        <img src={offersimg} alt="offers img" />
      </div>
      <div className="content">
        لا تفوت هذا العرض خصم 25% على
        <br />
        جميع المنتجات
      </div>
    </section>
  );
}

export default Offers;
