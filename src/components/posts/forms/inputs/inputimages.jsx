import React from "react";
import InputImgUpload from "../../../../images/icon/img-upload.svg";

export default function InputImages(props) {
  const { selectedImages } = props;
  
  const onFileChange = (event) => {
    // let images = [];
    // Update the state
    console.log(event.target.name);
    selectedImages.push(event.target.value)
    console.log("images3", selectedImages);
    
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
                onChange={onFileChange} value=""/>
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_two"
                onChange={onFileChange} />
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_three"
                onChange={onFileChange} />
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_four"
                onChange={onFileChange} />
            </span>
          </div>
          <div className="item">
            <span><img src={InputImgUpload} alt="" />
              <input type="file"
                name="fill_five"
                onChange={onFileChange} />
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
              onChange={onFileChange} />
          </div>
        </div>
      </div>
    </div>
  );
}