import React from 'react';
import axios from "axios";
import { Api } from "../../api/index.js";
import MultiRangeSlider from "multi-range-slider-react";
import removeIcon from "../../images/icon/icon_remove.svg"


function Price(props) {
  const {minValue, set_minValue,maxValue, set_maxValue , setProducts } = props;

  const fetchPost = async (minValue,maxValue) => {
    const  options = {
      method: "get",
      url: `${Api}products?min_price=${minValue}&max_price=${maxValue}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options).then(function (response) {
     console.log("handle success");
     //console.log(response.data.products);
     setProducts(response.data.products)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };


  const handleInput = async (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    fetchPost(minValue,maxValue);

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
