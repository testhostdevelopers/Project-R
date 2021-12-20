import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import FilterIcon from '../../assets/images/filtericon.png';
import Formcheckbox from '../../Components/Formcheckbox';
import Button from '../../Components/Button';

export default function Filter ({filterlist}) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const filteritem = filterlist.map(filter => {
    return (
              <li>
                  <Formcheckbox inputType="checkbox" title={filter.name} id={filter.name}/>
                  <span className="filter-no">{filter.data}</span>
              </li>
          );
        });
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
              {filteritem}
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

