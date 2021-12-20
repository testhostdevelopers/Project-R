import React, {useState} from "react";
import './style.scss';
import SearchIcon from '../../assets/images/search.png';

export default function SearchBox ({placeholder, setSearchValue}) {
const handleChange = (e) => {
  setSearchValue(e.target.value)
}

  return (
    
    <div className="searchbox-block">
      <form className="searchbox">
        <input type="text" onChange={ (e) => handleChange(e)} placeholder={placeholder} className="search-input"/>
      </form>
    </div>

  );
}

