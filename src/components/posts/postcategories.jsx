
import React, { useState } from "react";
import accessories from "../../images/categories/accessories.svg";
import bag from "../../images/categories/bag.svg";
import dress from "../../images/categories/dress.svg";
import other from "../../images/categories/other.png";

function PostCategories(props) {
  const { setShowformdress } = props;
  const [classshow , setClassshow] = useState("showbuttondrees");

  const ShowInputSize = (e) => {
    setShowformdress(true);
    setClassshow("showbuttondrees");
  };
  const HideInputSize = (e) => {
    const value = e.target.name;
    setShowformdress(false)
    setClassshow(value)
    console.log(value);
  };

  return (
    <section className="post__categories">
      <h5>اختر الفئه </h5>

      <div className="post__categories__items">
        <button className={classshow === "showbuttondrees" ?
        "showbuttondrees btn item" : "btn item"} 
        onClick={ShowInputSize}  id="3">
          <img src={dress} alt="accessories" />
          <span>فساتين</span>
        </button>
        <button onClick={HideInputSize} name="showbuttonbag" 
          className={classshow === "showbuttonbag" ?
        "showbuttonbag btn item" : "btn item"} id="2">
          <img src={bag} alt="accessories" />
          <span>حقائب</span>
        </button>
        <button onClick={HideInputSize} name="showbuttonaccessories"
          className={classshow === "showbuttonaccessories" ?
        "showbuttonaccessories btn item" : "btn item"} id="1">
          <img src={accessories} alt="accessories" />
          <span>أكسسوارات</span>
        </button>
        <button onClick={HideInputSize}  name="showbuttonother"
          className={classshow === "showbuttonother" ?
        "showbuttonother btn item" : "btn item"} id="4">
          <img src={other} alt="accessories" width={"60px"} height={"60px"}/>
          <span>أخرى</span>
        </button>
      </div>
    </section>
  );
}

export default PostCategories;
