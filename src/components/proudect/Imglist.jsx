import React from "react";

function Imglist(props) {
  const {Images ,setindex}=props;
  return (
    <div className="proudect__imglist">
      {Images.map((item,index)=>
      <img src={item} alt={`${item} ${index}`} key={index} onClick={()=>setindex(index)} />
      )}
    </div>
  );
}

export default Imglist;
