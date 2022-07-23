import axios from "axios";
import React, { useState } from "react";
import { Api } from "../../../api";
import { InputCity, InputName, InputBrand, InputDes, Inputprice , Inputstatus, SalesDetails, InputType } from "./Inputs";
import Inputcolor  from "./inputs/Inputcolor.jsx";
import InputImages from "./inputs/inputimages.jsx";
import Inputsize from "./inputs/inputsize.jsx";

export default function Form(props) {
  const { showformdress ,categoryid } = props;
  const [type, setType] = useState("noselect");
  const selectedImages = [];
  const selectedSize =[];
  const [selectedColors,setSelectedColors] =useState([]);

  const [state, setState] = useState({
    category_id:categoryid,
    title: "",
    description: "",
    product_status: "",
    price: "",
    pricecase: "",
    brand: "",
    city: "",
    nameuser: "",
    phoneuser: "",
    signature: "",
  });
  const [message, setMessage] = useState("");



  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,

    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "post",
      url: `${Api}ads`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: JSON.stringify({
        sub_category_id:type,
      ...state,
      images:selectedImages,
      colors:selectedColors,
      sizes:selectedSize,
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response.data.message)
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.message)
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
    });
  };

  return (
    <section className="post__form">

      <form>
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

            <Inputcolor selectedColors={selectedColors} setSelectedColors={setSelectedColors}/>
            {showformdress === false ? " " : <Inputsize selectedSize={selectedSize} />}

            <InputBrand handleChange={handleChange} />

            <InputCity handleChange={handleChange} />

            <InputImages selectedImages={selectedImages}  />
          </div>
        </div>
        <SalesDetails handleChange={handleChange} />
              <span className="errorfiled">{message}</span>
        <button className="btn"  type="button"  onClick={handleSubmit}>نشر الاعلان</button>
      </form>
    </section>
  );
}

/*
  const onFileChange2 = (event) => {
    // let images = [];

    // Update the state

    setSelectedFiles(event.target.files);

    console.log("images3", selectedFiles);
  };


    for (let i = 0; i < selectedFiles.length; i++) {
      formDataa.append("images[]", selectedFiles[i]);
      console.log(selectedFiles[i]);
    }

    
    if (selectedFiles) {
      var images = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        images.push(selectedFiles[i]);
      }
*/