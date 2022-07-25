import React from "react";
import { FilterDataBrands } from "../../api/actions.js";


function Brands(props) {
  const { Datafilter, setProducts, setPerpage } = props;

  const handleChange = async (e) => {
    const value = e.target.id;
    FilterDataBrands(setPerpage, setProducts, value)
  };


  return (
    <div className='fillter__brands'>
    <div className="title">
        <h4>الماركه</h4>
    </div>
        <ul>
          {Datafilter.brands.map((item,index) => 
          <li key={index}>
            <input type="radio" value={item.brand} name="filter" onChange={handleChange}  id={item.brand}/>
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
