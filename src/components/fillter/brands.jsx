import React, { useState, useEffect } from "react";
import axios from "axios";
import { Api } from "../../api/index.js";


function Brands(props) {
  const {brands , setBrands ,Datafilter  }=props;
  const Inputs = document.querySelectorAll('input[name=brands]');
  let newBrands =[];

  const handleChange =  async (e) => {
   
   await Inputs.forEach( element => {
     if(element.checked === true){

       newBrands.push(element.value)
       setBrands(newBrands)

      }else if(element.checked === false){
        if(newBrands.length ===0){
          console.log("no data");
        }else{
          console.log(false);
        }
    }
  });
  };


  return (
    <div className='fillter__brands'>
    <div className="title">
        <h4>الماركه</h4>
    </div>
        <ul>
          {Datafilter.brands.map((item,index) => 
          <li key={index}>
            <input type="checkbox" value={item.brand} name="brands" onChange={handleChange} 
            checked = {brands === "" ? false :  null} id={item.brand}/>
            <label htmlFor={item.brand}>
            {item.brand}
            </label>
          </li>
            )}
        </ul>
    </div>
  )
}

export default Brands;
