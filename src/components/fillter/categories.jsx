import React from 'react'
import { FilterDataCategories } from '../../api/actions.js';

function Categories(props) {
  const { Datafilter, setProducts, setPerpage } = props;

  const handleChange = async (e) => {
    const value = e.target.id;
    FilterDataCategories(setPerpage, setProducts, value)
  };

  return (
    <div className='fillter__categories'>
      <div className="title">
        <h4>الفئات</h4>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">

        {Datafilter.categories.map(item =>
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target={`#${item.name}`} aria-expanded="false" aria-controls={item.name}>

                <input type="radio" value={item.name} name="categories" id={item.id} onChange={handleChange}
                />
                <label htmlFor={item.name_ar}>{item.name_ar}</label>
              </button>
            </h2>
            {item.branches.map(elment =>
              <div id={item.name} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample" key={elment.id}>
                <div className="accordion-body">
                  <ul>
                    <li>
                      <input type="radio" value={elment.name} name="sub_categories" onChange={handleChange}
                        id={elment.id} />
                      <label htmlFor={elment.name_ar}>
                        {elment.name_ar}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            )
            }
          </div>)}


      </div>
    </div>
  )
}

export default Categories;