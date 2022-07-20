/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Fillter from '../../components/fillter/index.jsx';
import AllProudect from '../../components/proudects/allproudect';
import Proudectsnav from '../../components/proudects/proudectsnav';
import axios from "axios";
import { Api } from "../../api/index.js";
import Loading from "../../layout/loading/loading.jsx";

function Proudects() {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(1);
  const [perpage , setPerpage]=useState();

  const fetchPost = async () => {
    const  options = {
      method: "get",
      url: `${Api}products?page=${pageCount}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
      setLoading(true);
     console.log("handle success");
     console.log(response.data.products);
     console.log(response.data.products.data);
     setPerpage(response.data.products.per_page);
     setProducts(response.data.products.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };


  useEffect(() => {
    fetchPost();
  }, [loading,pageCount]);

  return (
    <>

        {loading === false ? (
          <Loading/>
        ) : (
          <main >
          <section className="proudects">
            <div className="container">
            <Proudectsnav/>
      
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <Fillter setProducts={setProducts} setLoading={setLoading}/>
              </div>
              <div className="col-lg-9 col-md-12">
                <AllProudect products={products} setpageCount={setpageCount} pageCount={pageCount} perpage={perpage}/>
              </div>
            </div>
            </div>
          </section>
            </main>
        )}
      
  </>
  )
}

export default Proudects;