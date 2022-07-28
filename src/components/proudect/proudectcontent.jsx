/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Iconshare from "../../images/icon/share.png";
import Iconwomen from "../../images/icon/women.svg";
import massegrhet from "../../images/icon/massegrhet.svg";
import phone from "../../images/icon/phone.svg";
import loction from "../../images/icon/loction.svg";
import cartimg from "../../images/icon/cart.svg";
import likeimg from "../../images/icon/love.svg";
import { Api } from "../../api";
import axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ModalMasseg from "./modalmasseg";

function ProudectContent(props) {
  const { Title, Price, colors, brand, status, Sizes, User, Id } = props;
  const [linkurl, setLinkurl] = useState(false);

  console.log(User);

  const addToCart = () => {
    const options = {
      method: "post",
      url: `${Api}order/product`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: JSON.stringify({
        "product_id": Id,
        "count": 1
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data);
    })
      .catch(function (error) {
        if (error.response) {
          console.log("error");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });


  };

  const addToFavourite = () => {
    const options = {
      method: "get",
      url: `${Api}favourite/${Id}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data);
    })
      .catch(function (error) {
        if (error.response) {
          console.log("error");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });


  };
  return (
    <section className="proudect__content">
      <div className="header">
        <h3>{Title}</h3>

        <span className="share">
          <CopyToClipboard text={window.location.href}
            onCopy={() => setLinkurl(true)} className="btn">
            <span>
              <img src={Iconshare} alt="Icon share" />
            </span>
          </CopyToClipboard>
          {linkurl === true ? <span className="share_content">تم نسخ الرابط</span> : ""}
        </span>
      </div>

      <div className="price">SR {Price}</div>

      <div className="color">
        <span> الألوان المتاحه </span>
        <span className="color-list">
          {colors.map((item, index) =>
            <span className="active" key={index}>{item}</span>
          )}
        </span>
      </div>

      <div className="sizes">
        <span>المقاسات المتاحه</span>
        <span className="sizes-list">
          {Sizes.map((item, index) =>
            <span className="active" key={index}>{item}</span>
          )}
        </span>
      </div>

      <div className="status">
        <div>
          <span> الحاله </span>
          <span className="item"> {status}</span>
        </div>

        <div>
          <span> الماركه </span>
          <span className="item">{brand}</span>
        </div>
      </div>

      <div className="theseller">
        <div className="header">
          <div className="left">
            <img src={User.image} alt="" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }} />
            <span>{User.name}</span>
          </div>

          <div className="righet">

            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#ModalMasseg">
              <img src={massegrhet} alt="" />
            </button>
            <ModalMasseg User={User}/>


          </div>
        </div>

        <div className="footer">
          <div className="left">
            <img src={phone} alt="" />
            <span>{User.phone}</span>
          </div>
          <div className="righ">
            <img src={loction} alt="" />
            <span>{User.loction === "" ? "الرياض" : User.loction}</span>
          </div>
        </div>
      </div>

      <div className="cart">

        {localStorage.getItem("token") === null ?
          <>
            <button className="btn buttoncart">
              <img src={cartimg} alt="Cart Icon" />
              <span>إضافه الى عربة التسوق</span>
            </button>

            <button className="btn buttonfaveort">
              <img src={likeimg} alt="Faveort Icon" />
            </button>
          </>
          : <>
            <button className="btn buttoncart" onClick={() => addToCart()}>
              <img src={cartimg} alt="Cart Icon" />
              <span>إضافه الى عربة التسوق</span>
            </button>

            <button className="btn buttonfaveort" onClick={() => addToFavourite()}>
              <img src={likeimg} alt="Faveort Icon" />
            </button>

          </>
        }
      </div>
    </section>
  );
}

export default ProudectContent;
