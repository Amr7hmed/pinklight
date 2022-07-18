import React from "react";

function Categories(props) {
  const { categories } = props;
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

            {categories.map(item =>

              <div className="item" key={item.id}>
                <img src={item.image} alt="dress" className="img-ouer" />
                <span>{item.name_ar}</span>
              </div>

            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
