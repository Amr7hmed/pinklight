import React from "react";
import Proudectdetals from "../../components/proudect/Proudectdetals";
import Proudectlist from "../../components/proudect/proudectlist";

function Proudect() {
  return (
    <section className="proudect">
      <div className="container">
        <Proudectdetals/>
        <Proudectlist/>
      </div>
    </section>
  );
}

export default Proudect;
