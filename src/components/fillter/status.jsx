import React from 'react';

function Status(props) {
  const {status , setStatus }=props;
  
  const handleChange =  (e) => {
    const value = e.target.value;
    const statusarry = new Set([...status]);
    setStatus([...statusarry, value])
    console.log(status);
  };

  return (
    <div className='fillter__status'>
    <div className="title">
    <h4>الحاله</h4>
    </div>
        <ul>
          <li>
            <input type="checkbox" value="جديد" name="status" onChange={handleChange} 
            checked = {status === "" ? false :  null} id="جديد"/>
            <label htmlFor="جديد">
              جديد
              </label>
          </li>
          <li>
            <input type="checkbox" value="مستعمل" name="status" onChange={handleChange} 
            checked = {status === "" ? false :  null} id="مستعمل"/>
            <label htmlFor="مستعمل">
            مستعمل
          </label>
          </li>
          <li>
            <input type="checkbox" value="تبرع / هديه" name="status" onChange={handleChange} 
            checked = {status === "" ? false :  null} id="تبرع / هديه"/>
            <label htmlFor="تبرع / هديه">
            تبرع / هديه
          </label>
          </li>
        </ul>
    </div>
  )
}

export default Status