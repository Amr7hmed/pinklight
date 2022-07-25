/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Fillter from '../../components/fillter/index.jsx';
import AllProudect from '../../components/proudects/allproudect';
import Proudectsnav from '../../components/proudects/proudectsnav';
import Loading from "../../layout/loading/loading.jsx";
import { Api } from "../../api/index.js";
import axios from "axios";

function Proudects() {
  // Git All Proudects Data Items
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(1);
  const [perpage, setPerpage] = useState();
  // Git Filter Data Items
  const [datafilter, setDatafilter] = useState([]);

  const  options = {
    method: "get",
    url: `${Api}products?page=${pageCount}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const filterData = async () => {
    const  options = {
      method: "get",
      url: `${Api}filters`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    await axios(options).then(function (response) {
     console.log("handle success");
     console.log(response.data);
     setDatafilter(response.data)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  };


  useEffect(() => {

    filterData();

    axios(options).then(function (response) {
      console.log("handle success");
     setPerpage(response.data.products.per_page);
     setProducts(response.data.products.data)
     setLoading(true);
     console.log(response);
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });

  }, [loading, pageCount]);





  return (
    <>

      {loading === false ? (
        <Loading />
      ) : (
        <main >
          <section className="proudects">
            <div className="container">
              <Proudectsnav />

              <div className="proudects_row row">
                <div className="col-md-12 col-lg-3 fillter_control">
                  <Fillter
                    Datafilter={datafilter}
                    setProducts={setProducts}
                    setPerpage={setPerpage}
                    pageCount={pageCount}
                    setLoading={setLoading}
                  />
                  <button className="btn btn-filter">Filter</button>
                </div>
                <div className="col-md-12 col-lg-9">
                  <AllProudect products={products} setpageCount={setpageCount}
                    pageCount={pageCount} perpage={perpage} />
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