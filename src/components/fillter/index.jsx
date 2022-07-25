
import React from "react";
import Brands from './brands';
import Categories from './categories';
import City from './city';
import Price from './price';
import Status from './status';

function Fillter(props) {
  const { Datafilter ,setProducts ,setPerpage ,setLoading } = props;

  

    const removeData =  (e) => {
      e.preventDefault();
      setLoading(false)
    };

  return (
    <section className='fillter'>
      <form>
        <Categories 
        Datafilter={Datafilter}
        setProducts={setProducts}
        setPerpage={setPerpage}/>

        <Brands 
        Datafilter={Datafilter}
        setProducts={setProducts}
        setPerpage={setPerpage}/>

        <Price 
        Datafilter={Datafilter}
        setProducts={setProducts}
        setPerpage={setPerpage}/>

        <Status 
        Datafilter={Datafilter}
        setProducts={setProducts}
        setPerpage={setPerpage}/>

        <City 
        Datafilter={Datafilter}
        setProducts={setProducts}
        setPerpage={setPerpage}/>

        <button className="btn btn_removeall" type="submit" onClick={()=>removeData()}>
        مسح الكل
        </button>
      </form>

    </section>
  )
}

export default Fillter;