import React from 'react';
import axios from "axios";
import { Api } from "../../api/index.js";

function City(props) {
  const {city , setCity ,Datafilter }=props;
  const Inputs = document.querySelectorAll('input[name=city]');
  let newCity =[];


  const handleChange =  async (e) => {
    
    await Inputs.forEach( element => {
      if(element.checked === true){
        newCity.push(element.value)
        setCity(newCity)
       }else if(element.checked === false){
       console.log(false);
     }
   });
 
   };
  return (
    <div className='fillter__city'>
    <div className="title">
        <h4>المدينه/المنطقه</h4>
    </div>
        <ul>
          {Datafilter.cities.map((item,index) => 
          <li key={index}>
            <input type="checkbox" value={item.city} name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id={item.city}/>
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