import React, {useState} from "react";
import './style.scss';
import $ from "jquery";
import { Link } from "react-router-dom";

import Slide1 from '../../assets/images/slide1.png';
import SliderArrowRight from '../../assets/images/slider-arrow-right.png';
import SliderArrowLeft from '../../assets/images/slider-arrow-left.png';

import ShopnftIcon from '../../assets/images/nft-black.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HomeSlider ({}) {
    const options = {
        margin: 88,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [`<img src='${SliderArrowLeft}' />`, `<img src='${SliderArrowRight}' />`],
        items: 1,
        center: true,
    };

  return (
      <>
        <section className="home-slider-sec">
            <div className="home-slider">
                <OwlCarousel className='owl-theme' {...options}>
                    <div class='item'>
                        <div className="m-slide-block">
                            <div className="m-slider-img">
                                <img src={Slide1} alt={Slide1} />
                            </div>
                            <div className="m-slider-info">
                                <h3>Renegedes Fire Battle Of Titanium</h3>
                                <div className="m-slider-btn">
                                    <span>$ 45.69</span>
                                    <Link to="#0" className="btn-with-img">
                                        <span><img src={ShopnftIcon} alt={ShopnftIcon} /></span>
                                        Buy NFT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="m-slide-block">
                            <div className="m-slider-img">
                                <img src={Slide1} alt={Slide1} />
                            </div>
                            <div className="m-slider-info">
                                <h3>Renegedes Fire Battle Of Titanium</h3>
                                <div className="m-slider-btn">
                                    <span>$ 45.69</span>
                                    <Link to="#0" className="btn-with-img">
                                        <span><img src={ShopnftIcon} alt={ShopnftIcon} /></span>
                                        Buy NFT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="m-slide-block">
                            <div className="m-slider-img">
                                <img src={Slide1} alt={Slide1} />
                            </div>
                            <div className="m-slider-info">
                                <h3>Renegedes Fire Battle Of Titanium</h3>
                                <div className="m-slider-btn">
                                    <span>$ 45.69</span>
                                    <Link to="#0" className="btn-with-img">
                                        <span><img src={ShopnftIcon} alt={ShopnftIcon} /></span>
                                        Buy NFT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="m-slide-block">
                            <div className="m-slider-img">
                                <img src={Slide1} alt={Slide1} />
                            </div>
                            <div className="m-slider-info">
                                <h3>Renegedes Fire Battle Of Titanium</h3>
                                <div className="m-slider-btn">
                                    <span>$ 45.69</span>
                                    <Link to="#0" className="btn-with-img">
                                        <span><img src={ShopnftIcon} alt={ShopnftIcon} /></span>
                                        Buy NFT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
      </>
  );
}

