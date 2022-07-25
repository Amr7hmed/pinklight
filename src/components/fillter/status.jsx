import React from "react";
import { FilterDataStatus } from "../../api/actions.js";

function Status(props) {
  const { Datafilter, setProducts, setPerpage } = props;

  const handleChange = (e) => {
    const value = e.target.id;
    FilterDataStatus(setPerpage, setProducts, value)
  };


  return (
    <div className='fillter__status'>
    <div className="title">
    <h4>الحاله</h4>
    </div>
        <ul>
          <li>
            <input type="radio" value={Datafilter.status.new} name="status" onChange={handleChange} 
             id="new"/>
            <label htmlFor={Datafilter.status.new}>
              {Datafilter.status.new}
              </label>
          </li>
          <li>
            <input type="radio" value={Datafilter.status.used} name="status" onChange={handleChange} 
             id="used"/>
            <label htmlFor={Datafilter.status.used}>
            {Datafilter.status.used}
          </label>
          </li>
          <li>
            <input type="radio" value={Datafilter.status.gift} name="status" onChange={handleChange} 
             id="gift"/>
            <label htmlFor={Datafilter.status.gift}>
            {Datafilter.status.gift}
            </label>
          </li>
        </ul>
    </div>
  )
}

export default Status