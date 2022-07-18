import React from 'react';
import axios from "axios";
import { Api } from "../../api/index.js";

function City(props) {
  const {city , setCity ,setProducts}=props;

  const fetchPost = async (city) => {
    const  options = {
      method: "get",
      url: `${Api}products?city=${city}`,
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

  const handleChange =  (e) => {
    const value = e.target.value;
    const citys = [...city, value];
    setCity([...citys]);
    console.log(city);
    fetchPost(city);
  };

  return (
    <div className='fillter__city'>
    <div className="title">
        <h4>المدينه/المنطقه</h4>
    </div>
        <ul>
          <li>
            <input type="checkbox" value="الرياض" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="الرياض"/>
            <label htmlFor="الرياض">
              الرياض
              </label>
          </li>
          <li>
            <input type="checkbox" value="أبها" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="ابها"/>
            <label htmlFor="ابها">
            أبها
          </label>
          </li>
          <li>
            <input type="checkbox" value="جيزان" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="جيزان"/>
            <label htmlFor="جيزان">
            جيزان
          </label>
          </li>
          <li>
            <input type="checkbox" value="جده" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="جده"/>
          <label htmlFor="جده">
            جده
          </label>
          </li>
        </ul>
    </div>
  )
}

export default City