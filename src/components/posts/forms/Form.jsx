import React, { useState } from "react";
import { InputCity, InputName, InputBrand, Inputcolor, InputDes, Inputprice, Inputsize, Inputstatus, InputImages, SalesDetails, InputType } from "./Inputs";

export default function Form(props) {
  const { showformdress } = props;
  const [type, setType] = useState("noselect");
  const [state, setState] = useState({
    name: "",
    description: "",
    stuties: "",
    price: "",
    pricecase: "",
    color: "",
    size: "",
    brand: "",
    city: "",
    nameuser: "",
    phoneuser: "",
    signature: "",
    fill_cover: null,
    fill_one: null,
    fill_two: null,
    fill_three: null,
    fill_four: null,
    fill_five: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,

    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log(type);
  };

  return (
    <section className="post__form">

      <form onSubmit={handleSubmit}>
        <InputType type={type} setType={setType} />
        <div className="post__details">
          <div className="header">
            <h2>تفاصيل الأعلان</h2>
          </div>

          <div className="details__form">
            <InputName handleChange={handleChange} />

            <InputDes handleChange={handleChange} />

            <Inputstatus handleChange={handleChange} />

            <Inputprice handleChange={handleChange} />

            <Inputcolor handleChange={handleChange} />
            {showformdress === false ? " " : <Inputsize handleChange={handleChange} />}

            <InputBrand handleChange={handleChange} />

            <InputCity handleChange={handleChange} />

            <InputImages handleChange={handleChange} />
          </div>
        </div>
        <SalesDetails handleChange={handleChange} />
        <button className="btn" type="submit">نشر الاعلان</button>
      </form>
    </section>
  );
}
