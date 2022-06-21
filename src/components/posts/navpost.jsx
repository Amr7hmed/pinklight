import React from "react";
import { useState } from "react";
import Modelpost from "./modelpost";

function Navpost() {
  const [vispiltymodule , setvispiltymodule] = useState("hide");

  const Showmodule=()=>{
    setvispiltymodule("show")
  }


  const Hidemodule=()=>{
    setvispiltymodule("hide")
  }


  return (
    <>
      <button className="btn" onClick={()=> Showmodule()}>أنشر إعلانك</button>
      <Modelpost vispiltymodule={vispiltymodule} Hidemodule={Hidemodule}/>
    </>
  );
}

export default Navpost;
