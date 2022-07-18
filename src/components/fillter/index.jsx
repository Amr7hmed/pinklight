import React, { useState } from 'react';
import Brands from './brands';
import Categories from './categories';
import City from './city';
import Price from './price';
import Status from './status';

function Fillter(props) {
  const [city,setCity]=useState([]);
  const [status , setStatus]=useState([]);
  const [brands , setBrands]=useState([]);
  const [categories , setCategories]=useState([]);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000);
  const { setProducts ,setLoading} = props;
  

  
  const handleSubmit =  (e) => {
    e.preventDefault();
    setCity("")
    setStatus("")
    setBrands("")
    setCategories("")
    set_minValue(0);
    set_maxValue(1000);
    setLoading(false)


    
  };



  return (
    <section className='fillter'>
      <form onSubmit={handleSubmit}>
        <Categories categories={categories} setCategories={setCategories}/>

        <Brands brands={brands} setBrands={setBrands}/>

        <Price minValue={minValue} set_minValue={set_minValue} 
        maxValue={maxValue} set_maxValue={set_maxValue} setProducts={setProducts} setLoading={setLoading}/>

        <Status status={status} setStatus={setStatus}/>

        <City city={city} setCity={setCity} setProducts={setProducts}/>

        <button className="btn btn_removeall" type="submit">
        مسح الكل
        </button>
      </form>

    </section>
  )
}

export default Fillter;