import React, { useState, useEffect } from "react";
import axios from "axios";
import { Api } from "../../api/index.js";

function Status(props) {
  const {status,setStatus,Datafilter }=props;
  const Inputs = document.querySelectorAll('input[name=status]');
  let newStatus =[];

  const handleChange =  async (e) => {
   
   await Inputs.forEach( element => {
     if(element.checked === true){

       newStatus.push(element.value)
       setStatus(newStatus)

      }else if(element.checked === false){
        if(newStatus.length ===0){
          console.log("no data");
        }else{
          console.log(false);
        }
    }
  });
  };


  return (
    <div className='fillter__status'>
    <div className="title">
    <h4>الحاله</h4>
    </div>
        <ul>
          <li>
            <input type="checkbox" value={Datafilter.status.new} name="status" onChange={handleChange} 
            checked = {status === "" ? false :  null} id={Datafilter.status.new}/>
            <label htmlFor={Datafilter.status.new}>
              {Datafilter.status.new}
              </label>
          </li>
          <li>
            <input type="checkbox" value={Datafilter.status.used} name="status" onChange={handleChange} 
            checked = {status === "" ? false :  null} id={Datafilter.status.used}/>
            <label htmlFor={Datafilter.status.used}>
            {Datafilter.status.used}
          </label>
          </li>
          <li>
            <input type="checkbox" value={Datafilter.status.gift} name="status" onChange={handleChange} 
            checked = {status === "" ? false :  null} id={Datafilter.status.gift}/>
            <label htmlFor={Datafilter.status.gift}>
            {Datafilter.status.gift}
            </label>
          </li>
        </ul>
    </div>
  )
}

export default Status