import React, {useState} from "react";
import './style.scss';
import $ from "jquery";

import { Link } from "react-router-dom";
import Players from '../Players';
import GameImg from '../../assets/images/gameimg.png';
import SmPlayIcon from '../../assets/images/sm-play.png';
import BattleRoyal from '../../assets/images/battleroyal-icon.png';
import LivePlayIcon from '../../assets/images/live-play-icon.png';
import EldersIcon from '../../assets/images/elders-icon.png';
import SliderArrowRight from '../../assets/images/slider-arrow-right.png';
import SliderArrowLeft from '../../assets/images/slider-arrow-left.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function OpenGames ({}) {
    const options = {
        margin: 5,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [`<img src='${SliderArrowLeft}' />`, `<img src='${SliderArrowRight}' />`],
        items: 1
    };

  return (
      <>
      
        <div className="open-games-full-box open-games-slider-box">
            <div className="sm-title">
                <h2>Open Games</h2>
            </div>
            <div className="open-games-slider slider-control-top">
                <OwlCarousel className='owl-theme' {...options}>
                    <div class='item'>
                        <div className="open-games-box">
                            <div className="open-games-play-img">
                                <img src={GameImg} alt={GameImg} />
                                <Link to="#0" className="play-teaser-btn play-game-btn">
                                    <span><img src={SmPlayIcon} alt={SmPlayIcon} /></span>
                                    Play Game
                                </Link>
                            </div>
                            <div className="open-games-play-info">
                                <div className="open-games-play-info-btns">
                                    <Link tp="#0" className="sm-icon-btn">
                                        <span><img src={BattleRoyal} alt={BattleRoyal} /></span>
                                        Battle Royal
                                    </Link>
                                    <Link tp="#0" className="sm-icon-btn">
                                        <span><img src={LivePlayIcon} alt={LivePlayIcon} /></span>
                                        Live Play
                                    </Link>
                                </div>
                                <div className="dark-box relam-box">
                                    <h3>
                                        <span>
                                            <img src={EldersIcon} src={EldersIcon} />
                                        </span>
                                        Elders of The Realm
                                    </h3>
                                    <ul className="relam-box-nm-ln">
                                        <li>
                                            <p>Ms Doge</p>
                                        </li>
                                        <li>
                                            <p>English</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dark-box relam-box-info">
                                    <table className="table no-border">
                                        <tr>
                                            <th>
                                                <p>Ammount to win</p>
                                            </th>
                                            <td>
                                                $500K ETH
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>$500K ETH</p>
                                            </th>
                                            <td>
                                                9,999   
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>Game Length</p>
                                            </th>
                                            <td>
                                                2 Days
                                            </td>
                                        </tr>
                                    </table>
                                    <Link to="#0" className="btn btn-lightdark d-block">
                                        More detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="open-games-box">
                            <div className="open-games-play-img">
                                <img src={GameImg} alt={GameImg} />
                                <Link to="#0" className="play-teaser-btn play-game-btn">
                                    <span><img src={SmPlayIcon} alt={SmPlayIcon} /></span>
                                    Play Game
                                </Link>
                            </div>
                            <div className="open-games-play-info">
                                <div className="open-games-play-info-btns">
                                    <Link tp="#0" className="sm-icon-btn">
                                        <span><img src={BattleRoyal} alt={BattleRoyal} /></span>
                                        Battle Royal
                                    </Link>
                                    <Link tp="#0" className="sm-icon-btn">
                                        <span><img src={LivePlayIcon} alt={LivePlayIcon} /></span>
                                        Live Play
                                    </Link>
                                </div>
                                <div className="dark-box relam-box">
                                    <h3>
                                        <span>
                                            <img src={EldersIcon} src={EldersIcon} />
                                        </span>
                                        Elders of The Realm
                                    </h3>
                                    <ul className="relam-box-nm-ln">
                                        <li>
                                            <p>Ms Doge</p>
                                        </li>
                                        <li>
                                            <p>English</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dark-box relam-box-info">
                                    <table className="table no-border">
                                        <tr>
                                            <th>
                                                <p>Ammount to win</p>
                                            </th>
                                            <td>
                                                $500K ETH
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>$500K ETH</p>
                                            </th>
                                            <td>
                                                9,999   
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>Game Length</p>
                                            </th>
                                            <td>
                                                2 Days
                                            </td>
                                        </tr>
                                    </table>
                                    <Link to="#0" className="btn btn-lightdark d-block">
                                        More detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="open-games-box">
                            <div className="open-games-play-img">
                                <img src={GameImg} alt={GameImg} />
                                <Link to="#0" className="play-teaser-btn play-game-btn">
                                    <span><img src={SmPlayIcon} alt={SmPlayIcon} /></span>
                                    Play Game
                                </Link>
                            </div>
                            <div className="open-games-play-info">
                                <div className="open-games-play-info-btns">
                                    <Link tp="#0" className="sm-icon-btn">
                                        <span><img src={BattleRoyal} alt={BattleRoyal} /></span>
                                        Battle Royal
                                    </Link>
                                    <Link tp="#0" className="sm-icon-btn">
                                        <span><img src={LivePlayIcon} alt={LivePlayIcon} /></span>
                                        Live Play
                                    </Link>
                                </div>
                                <div className="dark-box relam-box">
                                    <h3>
                                        <span>
                                            <img src={EldersIcon} src={EldersIcon} />
                                        </span>
                                        Elders of The Realm
                                    </h3>
                                    <ul className="relam-box-nm-ln">
                                        <li>
                                            <p>Ms Doge</p>
                                        </li>
                                        <li>
                                            <p>English</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dark-box relam-box-info">
                                    <table className="table no-border">
                                        <tr>
                                            <th>
                                                <p>Ammount to win</p>
                                            </th>
                                            <td>
                                                $500K ETH
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>$500K ETH</p>
                                            </th>
                                            <td>
                                                9,999   
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <p>Game Length</p>
                                            </th>
                                            <td>
                                                2 Days
                                            </td>
                                        </tr>
                                    </table>
                                    <Link to="#0" className="btn btn-lightdark d-block">
                                        More detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            
        </div>
      </>
  );
}

