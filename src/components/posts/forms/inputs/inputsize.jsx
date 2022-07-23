import React from "react";

export default function Inputsize(props) {
    const { selectedSize } = props;
    
    const onFileChange = (event) => {
      // let images = [];
      // Update the state
      console.log(event.target.name);
      selectedSize.push(event.target.value)
      console.log("size", selectedSize);
      
    };
    return (
      <div className="form-group">
        <label> المقاسات المتاحه</label>
        <div className="size">
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio1"
              name="sizes"
              value="s"
              onChange={onFileChange} />
            <label className="form-check-label" htmlFor="inlineRadio1">
              S
            </label>
          </span>
  
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio2"
              name="sizes"
              value="m"
              onChange={onFileChange} />
            <label className="form-check-label" htmlFor="inlineRadio2">
              M
            </label>
          </span>
  
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio2"
              name="sizes"
              value="l"
              onChange={onFileChange} />
            <label className="form-check-label" htmlFor="inlineRadio2">
              L
            </label>
          </span>
  
          <span>
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineRadio2"
              name="sizes"
              value="x-l"
              onChange={onFileChange} />
            <label className="form-check-label" htmlFor="inlineRadio2">
              XL
            </label>
          </span>
        </div>
      </div>
  
    );
  }