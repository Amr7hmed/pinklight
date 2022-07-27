import React from "react";
import InputImgUpload from "../../../../images/icon/img-upload.svg";

export default function InputImages(props) {
  const { images, setImages } = props;
  
 

  const CheckHandler = (e) => {
    const value = e.target.value;
    setImages((prev) =>
      images.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
  };

  return (
    <div className="form-proudect">
      <h6>تحميل صور المنتج </h6>
      <div className="form-proudect_imgs">
        <div className="left">
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_one"
                onClick={CheckHandler} value=""/>
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_two"
                onClick={CheckHandler} />
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_three"
                onClick={CheckHandler} />
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_four"
                onClick={CheckHandler} />
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_five"
                onClick={CheckHandler} />
            </span>
          </div>
        </div>
        <div className="righet">
          <div className="righet-img">
            <img src={InputImgUpload} alt="" />

            <span>
              يمكنك تحميل واجهة الإعلان هنا
            </span>
            <input
              type="file"
              name="fill_cover"
              onClick={CheckHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}