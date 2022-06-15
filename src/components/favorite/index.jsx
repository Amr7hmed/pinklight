import React from "react";
import clearimg from "../../images/icon/clear.png";
import Likeimg from "../../images/icon/favorite_like.png";

export default function Cardfavorite(props) {
  const { Title, Image , Price} = props;

  return (
    <section className="favorite__card">
      <div className="img">

        <button className="btn btnlike">

        <img src={Likeimg} alt="" />
        </button>

        <img src={Image} alt="favorite card Img" />
        <button className="btn addcart">
        إضافه الى حقيبه التسوق
        </button>
      </div>

      <div className="body">
        <h6>{Title}</h6>

        <div className="price">
          <span>SR {Price}</span>
          <button className="btn iconclear">
            <img src={clearimg} alt="Clear Icon" />
          </button>
        </div>
      </div>
    </section>
  )
  };