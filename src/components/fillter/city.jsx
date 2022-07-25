import React from "react";
import { FilterDataCity } from "../../api/actions.js";

function City(props) {
  const { Datafilter, setProducts, setPerpage } = props;

  const handleChange = (e) => {
    const value = e.target.id;
    FilterDataCity(setPerpage, setProducts, value)
  };
  
  return (
    <div className='fillter__city'>
    <div className="title">
        <h4>المدينه/المنطقه</h4>
    </div>
        <ul>
          {Datafilter.cities.map((item,index) => 
          <li key={index}>
            <input type="radio" value={item.city} name="city" onChange={handleChange} id={item.city}/>
            <label htmlFor={item.city}>
            {item.city}
            </label>
          </li>
            )}
        </ul>
    </div>
  )
}

export default City