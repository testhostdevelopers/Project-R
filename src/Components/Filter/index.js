import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import FilterIcon from '../../assets/images/filtericon.png';
import Formcheckbox from '../../Components/Formcheckbox';
import Button from '../../Components/Button';

export default function Filter ({placeholder}) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


  return (
    
    <div className="filter-box-block">
        <div className={isActive ? 'filter-box show-filter': 'filter-box'} onClick={toggleClass}>
          <Link to="#0">
            <img src={FilterIcon} />
            <span className="filter-text">Filter</span>
            <span className="filter-count">2</span>
          </Link>
          <div className="filter-dropdown">
              <ul>
                <li>
                    <Formcheckbox inputType="checkbox" title="Level" id="level"/>
                </li>
                <li>
                    <Formcheckbox inputType="checkbox" title="Rating" id="rating"/>
                </li>
                <li>
                    <Formcheckbox inputType="checkbox" title="For sale" id="forsale"/>
                </li>
                <li>
                    <Formcheckbox inputType="checkbox" title="Score" id="score"/>
                </li>
                <li>
                    <Formcheckbox inputType="checkbox" title="By Price" id="score"/>
                </li>
              </ul>
              <div className="filter-actions">
                  <Button title="Reset" btn="btn btn-outline-primary"/>
                  <Button title="Reset" btn="btn btn-primary"/>
              </div>
          </div>
        </div>
    </div>

  );
}

