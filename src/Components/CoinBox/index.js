import React from "react";
import PropTypes from "prop-types";
import './style.scss';

const CoinBox = ({Coindata}) => {
  
  let CoinItem = 
  Coindata.map(item => (
    <li>
      <div className="logo_name">
        <img src={item.img}/>
        <p>{item.label}</p>
      </div>
        <p className="price">{item.price}</p>
    </li>
  ));
  
  return (
    <ul className="coin-box d-flex">
        {CoinItem}
    </ul>
  )
};

CoinBox.propTypes = {
  selecteda: PropTypes.string
};

export default CoinBox;