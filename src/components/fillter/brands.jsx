import React from 'react'

function Brands(props) {
  const {brands , setBrands }=props;
  
  const handleChange =  (e) => {
    const value = e.target.value;
    const brandsarry = new Set([...brands]);
    setBrands([...brandsarry, value])
    console.log(brands);
  };

  return (
    <div className='fillter__brands'>
    <div className="title">
        <h4>الماركه</h4>
    </div>
        <ul>
          <li>
            <input type="checkbox" value="اتش اند ام" name="brands" onChange={handleChange} 
            checked = {brands === "" ? false :  null} id="اتش اند ام"/>
            <label htmlFor="اتش اند ام">
              اتش اند ام
              </label>
          </li>
          <li>
            <input type="checkbox" value="زارا" name="brands" onChange={handleChange} 
            checked = {brands === "" ? false :  null} id="زارا"/>
            <label htmlFor="زارا">
            زارا
          </label>
          </li>
          <li>
            <input type="checkbox" value="شى إن" name="brands" onChange={handleChange} 
            checked = {brands === "" ? false :  null} id="شى إن"/>
            <label htmlFor="شى إن">
            شى إن
          </label>
          </li>
        </ul>
    </div>
  )
}

export default Brands;