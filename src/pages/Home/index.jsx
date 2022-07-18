import React, { useState, useEffect } from "react";
import Categories from '../../components/home/categories.jsx';
import Slider from '../../components/home/slider.jsx';
import SectionProducts from "../../components/home/products.jsx"
import Offers from '../../components/home/offers.jsx';
import Ourpolicy from '../../components/home/ourpolicy.jsx';
import axios from "axios";
import { Api } from "../../api/index.js";
import Loading from "../../layout/loading/loading.jsx";



function Home() {
  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const  options = {
      method: "get",
      url: `${Api}home`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
     axios(options).then(function (response) {
       setLoading(true);
      console.log("handle success");
      setCategories(response.data.categories);
      setProducts(response.data.products)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (<>

        {loading === false ? (
          <Loading/>
        ) : (
          <main >
            <Slider/>
            <Categories categories={categories}/>
            <SectionProducts products={products}/>
            <Offers/>
            <Ourpolicy/>
            </main>
        )}
      
  </>
  )
}

export default Home;

/*
import { Helmet } from "react-helmet-async";


    <Helmet>
      <meta charSet="utf-8" />
      <title> PinkLight || Home </title>
      <meta name="description" content="EvoTech application" />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="/" />
    </Helmet>
*/