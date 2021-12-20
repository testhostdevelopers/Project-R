import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import Formcheckbox from '../Formcheckbox';
import Button from '../Button';

import SliderArrowRight from '../../assets/images/slider-arrow-right.png';
import SliderArrowLeft from '../../assets/images/slider-arrow-left.png';

export default function Pagination ({}) {

        return (    
            <div className="pagination-sec">
                <div className="pagination-box">
                    <Link to="#0" className="circle-arrow-btn">
                        <img src={SliderArrowLeft} alt={SliderArrowLeft} />
                    </Link>
                    <div className="main-pagination-inner">
                        <ul className="pagination-count">
                            <li>
                                <Link to="#0" className="active">1</Link>
                            </li>
                            <li>
                                <Link to="#0">2</Link>
                            </li>
                            <li>
                                <Link to="#0">3</Link>
                            </li>
                            <li>
                                <Link to="#0">4</Link>
                            </li>
                            <li>
                                <Link to="#0">5</Link>
                            </li>
                        </ul>
                        <ul className="total-pagination-count">
                            <li>
                                <span>...</span>
                            </li>
                            <li>
                                <span>1.250</span>
                            </li>
                        </ul>
                    </div>
                    <Link to="#0" className="circle-arrow-btn">
                        <img src={SliderArrowRight} alt={SliderArrowRight} />
                    </Link>
                </div>
            </div>
        );

}

