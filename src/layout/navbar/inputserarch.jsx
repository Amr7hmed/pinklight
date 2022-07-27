import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FilterSearch } from '../../api/actions';

function InputSerarch() {
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");


    const handleChange = (e) => {
        const value = e.target.value;

        setSearch(value);
        setMessage("")
      };
    
    
      const handleSearch = (e) => {
        e.preventDefault();
        FilterSearch(search)
      };


  return (
    <>
    <div className="navbar__input">
      <input type="text" placeholder="عن ماذا تبحث ؟" name="search" onChange={handleChange}/>
      <button className='btn btn-search' onClick={handleSearch}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
    
    </>
  )
}

export default InputSerarch