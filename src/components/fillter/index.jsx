
import React, { useState, useEffect } from "react";
import Brands from './brands';
import Categories from './categories';
import City from './city';
import Price from './price';
import Status from './status';
import axios from "axios";
import { Api } from "../../api/index.js";

function Fillter(props) {
  const {sendData ,Datafilter ,setProducts ,setPerpage ,pageCount} = props;
    const [status , setStatus]=useState([]);
    const [brands , setBrands]=useState([]);
    const [city,setCity]=useState([]);
    const [categories , setCategories]=useState([]);
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(1000);
 

    const fetchFilterData = async () => {
      const  options = {
        method: "get",
        url: `${Api}products?min_price=${minValue}&max_price=${maxValue}&brand=${brands}&status=${status}&city=${city}&category=${categories}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      await axios(options).then(function (response) {
       console.log("handle success");
       setPerpage(response.data.products.per_page);
       console.log(response.data.products);
       setProducts(response.data.products.data)
      })
      .catch(function (error) {
        console.log("handle error");
        console.log(error.response.data);
      });
    };
  

    const removeData =  (e) => {
      e.preventDefault();
      setCity([])
      setBrands([])
      setCategories([])
      setStatus("")
      set_minValue(0);
      set_maxValue(1000);
    };

  return (
    <section className='fillter'>
      <form>
        <Categories categories={categories} setCategories={setCategories}  Datafilter={Datafilter}/>

        <Brands brands={brands} setBrands={setBrands} 
        Datafilter={Datafilter}/>

        <Price minValue={minValue} set_minValue={set_minValue} 
        maxValue={maxValue} set_maxValue={set_maxValue} />

        <Status status={status} setStatus={setStatus} Datafilter={Datafilter} 
        setProducts={setProducts} setPerpage={setPerpage}/>

        <City city={city} setCity={setCity} Datafilter={Datafilter}/>

          <button className="btn btn_removeall" type="button" onClick={()=> fetchFilterData() }>
          البحث
          </button>

        <button className="btn btn_removeall" type="submit" onClick={()=>removeData()}>
        مسح الكل
        </button>
      </form>

    </section>
  )
}

export default Fillter;