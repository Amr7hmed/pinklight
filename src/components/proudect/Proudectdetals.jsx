import React from "react";
import Links from "./links";
import Proudectitem from "./Proudectitem";

function Proudectdetals(props) {
  const {product}=props;
  return (
    <section className="proudect__detals">
      <Links />
      <Proudectitem product={product} />
    </section>
  );
}

export default Proudectdetals;
