import React from 'react'
import Categories from '../../components/home/categories.jsx';
import Slider from '../../components/home/slider.jsx';
import SectionProducts from "../../components/home/products.jsx"
import Offers from '../../components/home/offers.jsx';
import Ourpolicy from '../../components/home/ourpolicy.jsx';

function Home() {
  return (
    <main >
      <Slider/>
      <Categories/>
      <SectionProducts/>
      <Offers/>
      <Ourpolicy/>
      </main>
  )
}

export default Home;