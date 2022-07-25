import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import removeIcon from "../../images/icon/icon_remove.svg"
import { FilterDataPrice } from "../../api/actions.js";


function Price(props) {
  const {setProducts, setPerpage } = props;

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000);

  const handleInput = async (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    FilterDataPrice(setPerpage,setProducts,e.minValue,e.maxValue);
  };

  const removevalue = ()=>{
    set_minValue(0);
    set_maxValue(1000);
  }
  return (
    <div className='fillter__price'>
      <div className="title">
        <h4>السعر</h4>
        <button className='btn' id="btn-removeall" onClick={()=> removevalue()}>

          <img src={removeIcon} alt="" />
        </button>
      </div>


      <div>
        <MultiRangeSlider
          min={0}
          max={1000}
          step={5}
          ruler={false}
          label={false}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />

        <div className="textinp">
          <span>{maxValue} sr</span>
          <span>{minValue} sr</span>
        </div>
      </div>
    </div>
  )
}

export default Price;
