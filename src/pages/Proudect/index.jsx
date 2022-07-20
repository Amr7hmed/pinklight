/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Proudectdetals from "../../components/proudect/Proudectdetals";
import Proudectlist from "../../components/proudect/proudectlist";
import {useParams} from 'react-router-dom';
import axios from "axios";
import { Api } from "../../api/index.js";
import Loading from "../../layout/loading/loading";

function Proudect(props) {
  const {id}=useParams();
  const [product, setProduct] = useState("");
  const [similarproducts, setSimilarproducts] = useState("");
  
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    const  options = {
      method: "get",
      url: `${Api}product/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
      setLoading(true);
     console.log("handle success");
     console.log(response.data);
     setProduct(response.data.product)
     setSimilarproducts(response.data.similarproducts)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response);
    });
  };


  useEffect(() => {
    fetchPost();
  }, [loading]);

  return (
    <>

        {loading === false ? (
          <Loading/>
        ) : (
          <section className="proudect">
            <div className="container">
              <Proudectdetals product={product}/>
              <Proudectlist Similarproducts={similarproducts}/>
            </div>
          </section>

        )}
      
  </>
  )

}

export default Proudect;
