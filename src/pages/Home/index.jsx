import React from 'react';
import Categories from '../../components/home/categories.jsx';
import Slider from '../../components/home/slider.jsx';
import SectionProducts from "../../components/home/products.jsx"
import Offers from '../../components/home/offers.jsx';
import Ourpolicy from '../../components/home/ourpolicy.jsx';

function Home() {
  return (<>

    <main >
      <Slider/>
      <Categories/>
      <SectionProducts/>
      <Offers/>
      <Ourpolicy/>
      </main>
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