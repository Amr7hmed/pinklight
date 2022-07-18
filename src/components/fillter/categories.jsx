import React from 'react'

function Categories(props) {
  const { categories, setCategories } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    const categoriess = [...categories, value];
    setCategories([...categoriess]);
    console.log(categories);
  };

  return (
    <div className='fillter__categories'>
    <div className="title">
      <h4>الفئات</h4>
    </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

              <input type="checkbox" value="فساتين" name="categories" id="فساتين" />
              <label htmlFor="فساتين">فساتين</label>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <input type="checkbox" value="فستان1" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="فستان1" />
                  <label htmlFor="فستان1">
                    فستان1
                  </label>
                </li>
                <li>
                  <input type="checkbox" value="فستان2" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="فستان2" />
                  <label htmlFor="فستان2">
                    فستان2
                  </label>
                </li>
                <li>
                  <input type="checkbox" value="فستان3" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="فستان3" />
                  <label htmlFor="فستان3">
                    فستان3
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">

              <input type="checkbox" value="حقائب" name="categories" id="حقائب" />
              <label htmlFor="حقائب">حقائب</label>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <input type="checkbox" value="حقيبه1" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="حقيبه1" />
                  <label htmlFor="حقيبه1">
                    حقيبه1
                  </label>
                </li>
                <li>
                  <input type="checkbox" value="حقيبه2" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="حقيبه2" />
                  <label htmlFor="حقيبه2">
                    حقيبه2
                  </label>
                </li>
                <li>
                  <input type="checkbox" value="حقيبه3" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="حقيبه3" />
                  <label htmlFor="حقيبه3">
                    حقيبه3
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

              <input type="checkbox" value="أكسسوارات" name="categories" id="أكسسوارات" />
              <label htmlFor="أكسسوارات">أكسسوارات</label>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <input type="checkbox" value="عنصر1" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="عنصر1" />
                  <label htmlFor="عنصر1">
                    عنصر1
                  </label>
                </li>
                <li>
                  <input type="checkbox" value="عنصر2" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="عنصر2" />
                  <label htmlFor="عنصر2">
                    عنصر2
                  </label>
                </li>
                <li>
                  <input type="checkbox" value="عنصر3" name="categories" onChange={handleChange}
                    checked={categories === "" ? false : null} id="عنصر3" />
                  <label htmlFor="عنصر3">
                    عنصر3
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul>
          <li>
            <input type="checkbox" value="أخرى" name="categories" onChange={handleChange}
              checked={categories === "" ? false : null} id="أخرى" />
            <label htmlFor="أخرى">
              أخرى
            </label>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Categories;