import React from "react";

import Slider from "react-slick";
function Categories(props) {
  const { categories } = props;

  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="home__categories">
          <div className="header">
            <span>
              الفئات
            </span>
          </div>

          <div className="home__categories__items">

          <Slider {...settings}>
            {categories.map(item =>

              <div className="item" key={item.id}>
                <img src={item.image} alt="dress" className="img-ouer" />
                <span>{item.name_ar}</span>
              </div>

            )}
            </Slider>

          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
