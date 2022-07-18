import React from "react";
import Iconshare from "../../images/icon/share.png";
import Iconwomen from "../../images/icon/women.svg";
import massegrhet from "../../images/icon/massegrhet.svg";
import phone from "../../images/icon/phone.svg";
import loction from "../../images/icon/loction.svg";
import cartimg from "../../images/icon/cart.svg";
import likeimg from "../../images/icon/love.svg";

function ProudectContent(props) {
  const { Title, Price ,colors, brand,status } = props;
  
  return (
    <section className="proudect__content">
      <div className="header">
        <h3>{Title}</h3>

        <span className="share">
          <button className="btn">
            <img src={Iconshare} alt="Icon share" />
          </button>

          <span className="share_content">تم نسخ الرابط</span>
        </span>
      </div>

      <div className="price">SR {Price}</div>

      <div className="color">
        <span> الألوان المتاحه </span>
        <span className="color-list">
          <span className="active">أحمر</span> - <span>أسود</span> -{" "}
          <span>رصاصي</span>
        </span>
      </div>

      <div className="sizes">
        <span>المقاسات المتاحه</span>
        <span className="sizes-list">
          <span> XL </span>
          <span> L </span>
          <span className="active"> M </span>
          <span> S </span>
        </span>
      </div>

      <div className="status">
        <div>
          <span> الحاله </span>
          <span className="item"> جديد </span>
        </div>

        <div>
          <span> الماركه </span>
          <span className="item"> شى إن </span>
        </div>
      </div>

      <div className="theseller">
        <div className="header">
          <div className="left">
            <img src={Iconwomen} alt="" />
            <span>ساره سعد</span>
          </div>

          <div className="righet">
            <img src={massegrhet} alt="" />
          </div>
        </div>

        <div className="footer">
          <div className="left">
            <img src={phone} alt="" />
            <span>+966 55 660 0910</span>
          </div>
          <div className="righ">
            <img src={loction} alt="" />
            <span>الرياض</span>
          </div>
        </div>
      </div>

      <div className="cart">
        <button className="btn buttoncart">
          <img src={cartimg} alt="Cart Icon" />
          <span>إضافه الى عربة التسوق</span>
        </button>

        <button className="btn buttonfaveort">
          <img src={likeimg} alt="Faveort Icon" />
        </button>
      </div>
    </section>
  );
}

export default ProudectContent;
