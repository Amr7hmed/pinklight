import React from "react";
import accessories from "../../images/categories/accessories.svg";
import bag from "../../images/categories/bag.svg";
import dress from "../../images/categories/dress.svg";
import other from "../../images/categories/other.png";

function PostCategories(props) {
  const {
    showformdress,
    setShowformdress,
    showformbag,
    setShowformbag,
    showformaccessories,
    setShowformaccessories,
    showformouter,
    setShowformouter,
  } = props;

  const ShowItem = (setDateone, setDateTwo , setDateThree , setDateFour) => {
    setDateone("show");
    setDateTwo("hide");
    setDateThree("hide");
    setDateFour("hide");
  };

  return (
    <section className="post__categories">
      <h5>اختر الفئه </h5>

      <div className="post__categories__items">
        <button
          className={"btn item " + showformdress}
          onClick={() => ShowItem(setShowformdress,setShowformbag,setShowformaccessories,setShowformouter)}
        >
          <img src={dress} alt="accessories" />
          <span>فساتين</span>
        </button>
        <button
          className={"btn item " + showformbag}
          onClick={() => ShowItem(setShowformbag,setShowformdress,setShowformaccessories,setShowformouter)}
        >
          <img src={bag} alt="accessories" />
          <span>حقائب</span>
        </button>
        <button
          className={"btn item " + showformaccessories}
          onClick={() => ShowItem(setShowformaccessories,setShowformbag,setShowformdress,setShowformouter)}
        >
          <img src={accessories} alt="accessories" />
          <span>أكسسوارات</span>
        </button>
        <button
          className={"btn item " + showformouter}
          onClick={() => ShowItem(setShowformouter,setShowformaccessories,setShowformbag,setShowformdress)}
        >
          <img src={other} alt="accessories" width={"60px"} height={"60px"}/>
          <span>أخرى</span>
        </button>
      </div>
    </section>
  );
}

export default PostCategories;
