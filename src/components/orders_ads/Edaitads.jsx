/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../api';
import Loading from '../../layout/loading/loading';
import Inputcolor from '../posts/forms/inputs/Inputcolor';
import InputImages from '../posts/forms/inputs/inputimages';
import { InputBrand, InputCity, InputDes, InputName, Inputprice, Inputstatus, InputSubType, InputType, SalesDetails } from '../posts/forms/inputs/Inputs';
import Inputsize from '../posts/forms/inputs/inputsize';

function Edaitads() {
    const {id}=useParams();
    const [type, setType] = useState("");
    const [subtype, setSubType] = useState("");
    const [selectedColors,setSelectedColors] =useState([]);
    const [sizes, setSizes] = useState([]);
    const [images, setImages] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
  
  
    const options = {
      method: "get",
      url: `${Api}filters`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
  
  
    useEffect(() => {
  
      axios(options).then(function (response) {
        console.log("handle success");
        // setPerpage(response.data.products.per_page);
        setData(response.data.categories)
        setLoading(true);
       console.log(response.data);
      })
        .catch(function (error) {
          console.log("handle error");
          console.log(error.response.data);
        });
  
    }, [loading]);

  
    const [state, setState] = useState({
      title: "",
      description: "",
      product_status: "",
      price: "",
      pricecase: "",
      brand: "",
      city: "",
      display_phone: "",
      display_name: "",
      display_location:"",
    });
  
  
  
    const handleChange = (e) => {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
    };
  
    const handleSubmit = () => {
        const options = {
          method: "put",
          url: `${Api}ads/${id}`,
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
          data: JSON.stringify({
            category_id:type,
            sub_category_id:subtype,
            images:images,
          colors:selectedColors,
          sizes:sizes,
            ...state,
          }),
        };
        axios(options).then(function (response) {
          console.log("handle success");
          console.log(response)
        })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              setMessage(error.response.data.message)
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
      };
    
   
    return (
        <section className="profile__myads">
            <div className="container">

                <div className="post__form">
        
          {loading === false ? (
            <Loading />
          ) : (
            <> 
            <form>
              <InputType type={type} setType={setType}  Data={data}  handleChange={handleChange}/>
      
              <InputSubType subtype={subtype} setSubType={setSubType} Data={data}/>
              <div className="post__details">
      
                <div className="details__form">
                  <InputName handleChange={handleChange} />
      
                  <InputDes handleChange={handleChange} />
      
                  <Inputstatus handleChange={handleChange} />
      
                  <Inputprice handleChange={handleChange} />
      
                  <Inputcolor selectedColors={selectedColors} setSelectedColors={setSelectedColors}/>
                   <Inputsize sizes={sizes} setSizes={setSizes} />
      
                  <InputBrand handleChange={handleChange} />
      
                  <InputCity handleChange={handleChange} />
      
                  <InputImages images={images} setImages={setImages} />
                </div>
              </div>
              <SalesDetails handleChange={handleChange} />
                    <span className="errorfiled">{message}</span>
              <button className="btn"  type="button"  onClick={handleSubmit}>نشر الاعلان</button>
            </form>
            
            </>)
          }
                 
                </div>
            </div>
        </section>
    )
}

export default Edaitads;