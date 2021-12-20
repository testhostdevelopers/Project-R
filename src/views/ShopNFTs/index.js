import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import Filters from '../../Components/Filter';
import Frame from "../../assets/images/Frame.png";
import strom from "../../assets/images/strom-img.png";
import fight from "../../assets/images/fight.png";
import storm from "../../assets/images/storm.png";
import wind from "../../assets/images/wind.png";
import YOSHI from "../../assets/images/yoshi.png";
import PlayersCard from '../../Components/PlayersCard';
import eth from "../../assets/images/eth.png";
import ShopnftIcon from "../../assets/images/nft-black.png";



export default function ShopNFTs({}) {

    const PlayerTeam=[
        {img: wind, name: "wind", win:"72.11%",},
        {img: YOSHI, name: "YOSHI", win:"72.11%",},
    ]

    return (
        <div className="main-wrapper">
            <section className="shope-page">
                <div className="container">
                    <div className="three-col">
                        <div className='filter-col'>
                        <h2 className='title'>Filters</h2>
                            <Filters/>
                        </div>

                        <div className='featured-item player-mid-col'>
                            <h2 className='title'>Featured Items</h2>
                            <div className="top-player">
                            <div className='mid-box'>
                                <div className='player-type-box'>
                                    <div className='player-img'>
                                        <img src={strom}/>
                                    </div>

                                    <div className='player-type'>
                                        <h2>STORM SKIN</h2>
                                        <h6>Description</h6>
                                        <p>Representing h er home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.</p>

                                        <div className='dark-box'>
                                            <h6>Ability Skin</h6>
                                            <div className='match'>
                                                <div>
                                                    <span>
                                                        <img src={Frame} /> 2.38
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <img src={fight} /> 1.38
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <img src={storm}/> 8.38
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="action">
                                            <span className="coin-value">
                                                    <img src={eth}/>
                                            </span>
                                            <Link to="#0" className="btn-with-img">
                                                <span><img src={ShopnftIcon}  /></span>
                                                Buy NFT
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className='popular-items'>
                            <h2 className='title'>Popular Items</h2>
                            <div className='team-mates'>
                                <PlayersCard Playerdata={PlayerTeam}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

