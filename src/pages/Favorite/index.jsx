import React from "react";
import Cardfavorite from "../../components/favorite/index.jsx";
import Imgcardone from "../../images/favorite/img-1.png";
import Imgcardtwo from "../../images/favorite/img-2.png";

function Favorite() {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__hader">
          <h4>مفضلتى</h4>
        </div>

        <div className="favorite__items">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Cardfavorite Image={Imgcardone} Title={"فستان برباط أمامى باكمام فانوس بعنق..."} Price={"76.00"}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Cardfavorite Image={Imgcardtwo} Title={"فستان برباط أمامى باكمام فانوس بنق..."} Price={"76.00"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorite;
