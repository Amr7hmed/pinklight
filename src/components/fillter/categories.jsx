import React from 'react'

function Categories(props) {
  const { categories, setCategories ,Datafilter } = props;
  const Inputs = document.querySelectorAll('input[name=categories]');
  let newCategories =[];

  const handleChange =  async (e) => {
   
   await Inputs.forEach( element => {
     if(element.checked === true){

       newCategories.push(element.value)
       setCategories(newCategories)

      }else if(element.checked === false){
        if(categories.length ===0){
          console.log("no data");
        }else{
          console.log(false);
        }
    }
  });
  };
  console.log(categories);

  return (
    <div className='fillter__categories'>
    <div className="title">
      <h4>الفئات</h4>
    </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">

              {Datafilter.categories.map(item =>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target={`#${item.name}`} aria-expanded="false" aria-controls={item.name}>

                            <input type="checkbox" value={item.name} name="categories" id={item.name_ar} onChange={handleChange}
                                  checked={categories === "" ? false : null} />
                            <label htmlFor={item.name_ar}>{item.name_ar}</label>
                          </button>
                        </h2>
                          {item.branches.map(elment =>
                          <div id={item.name} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                              <ul>
                                <li>
                                  <input type="checkbox" value={elment.name} name="categories" onChange={handleChange}
                                    checked={categories === "" ? false : null} id={elment.name_ar} />
                                  <label htmlFor={elment.name_ar}>
                                    {elment.name_ar}
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          )
                          }
                    </div> )}

        
      </div>
    </div>
  )
}

export default Categories;