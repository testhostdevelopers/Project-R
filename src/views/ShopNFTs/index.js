import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import Filter from '../../Components/Filter';
import Frame from "../../assets/images/Frame.png";
import strom from "../../assets/images/strom-img.png";
import fight from "../../assets/images/fight.png";
import storm from "../../assets/images/storm.png";
import REBEL from "../../assets/images/REBEL.png";
import anita from "../../assets/images/anita.png";
import storm1 from "../../assets/images/storm-1.png";
import eth from "../../assets/images/eth.png";
import ShopnftIcon from "../../assets/images/nft-black.png";
import stoemicon from "../../assets/images/stoem-icon.png";
import SERCSKIN from "../../assets/images/SERCSKIN.png";
import BullBog from "../../assets/images/BullBog.png";
import GALTECH from "../../assets/images/GALTECH.png";
import ODIN from "../../assets/images/ODIN.png";
import STINGER from "../../assets/images/STINGER.png";
import UNION from "../../assets/images/UNION.png";
import KINGWAVE from "../../assets/images/KINGWAVE.png";
import ALPHASKY from "../../assets/images/ALPHASKY.png";
import TECHSWING from "../../assets/images/TECHSWING.png";
import REDCORD from "../../assets/images/REDCORD.png";
import SWINGBLUE from "../../assets/images/SWINGBLUE.png";
import StarlightLogo from "../../assets/images/StarlightLogo.png";

import copy from "../../assets/images/copy.png";
import explore from "../../assets/images/explore.png";

import Modal from '../../Components/Modal';
import CharactersCard from '../../Components/CharactersCard';
import WeaponsCard from '../../Components/WeaponsCard';
import FormRadio from '../../Components/FormRadio';
import Button from '../../Components/Button';





export default function ShopNFTs({}) {

    const PlayerTeam=[
        {img: SERCSKIN, name: "SERCSKIN", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,067 ETH"},
    ]

    const Weaponslist=[
        {img: BullBog, name: "BULLDOG", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,34 ETH" },
    ]

    const characterlist=[
        {img: SERCSKIN, name: "SERCSKIN", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,067 ETH"},
        {img: REBEL, name: "REBEL", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,092 ETH"},
        {img: anita, name: "ANITA", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,067 ETH"},
        {img: storm1, name: "STORM", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,092 ETH"},
    ]

    const Weaponsdata=[
        {img: BullBog, name: "BULLDOG", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,34 ETH" },
        {img: GALTECH, name: "BULLDOG", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,027 ETH" },
        {img: ODIN, name: "BULLDOG", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,34 ETH" },
        {img: STINGER, name: "BULLDOG", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,027 ETH" },
    ]

    const Clothesdata=[
        {img: UNION, name: "UNION", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,092 ETH"},
        {img: KINGWAVE, name: "KING WAVE", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,067 ETH"},
        {img: UNION, name: "ROCKING", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,067 ETH"},
        {img: KINGWAVE, name: "SLAVES", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,092 ETH"},
    ]


    const vehiclesdata=[
        {img: ALPHASKY, name: "ALPHA SKY", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,34 ETH" },
        {img: TECHSWING, name: "TECHSWING", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,027 ETH" },
        {img: REDCORD, name: "RED CORD", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,34 ETH" },
        {img: SWINGBLUE, name: "SWING BLUE", dec:"A surefire beast when you can pick your shots.", coinimg:eth, coinname:"0,027 ETH" },
    ]

    const [TransactionModal, setTransactionModal] = React.useState(false);
    const modalclick = () => {
		setTransactionModal( !TransactionModal);
	}
    let topboxClass = [];
        if(TransactionModal) {
		topboxClass.push('show-modal');
	}
    
    const filterdata=[
        {name: "All News", data:"1025"},
        {name: "By Popularioty", data:"1025"},
        {name: "By Date" , data:"1025"},
        {name: "By Relevance", data:"1025"},
        {name: "By Price", data:"1025"},
    ]
    
    return (
        <div className="main-wrapper">
            <section className="shope-page">
                <div className="container">
                    <div className="three-col">
                        <div className='filter-col'>
                        <h2 className='title'>Filters</h2>
                            <Filter filterlist={filterdata}/>
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
                                        <h2>STORM SKIN <img src={stoemicon}/> </h2>
                                        <h6>Description</h6>
                                        <p>Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.</p>

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
                                                    <img src={eth}/> 0,094 ETH
                                            </span>
                                            <span className="btn-with-img" onClick={modalclick}>
                                                <span><img src={ShopnftIcon}  /></span>
                                                Buy NFT
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className='popular-items'>
                            <h2 className='title'>Popular Items</h2>
                            <div className='team-mates'>
                                <CharactersCard CharactersCardData ={PlayerTeam}/>
                                <WeaponsCard WeaponsCardData ={Weaponslist}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="shope-page characters-section">
                <div className="container">

                    <div className='four-col'>
                        <h2 className='title'>Characters</h2>
                        <CharactersCard CharactersCardData ={characterlist}/>
                    </div>
                    <div className='four-col'>
                        <h2 className='title'>Weapons</h2>
                        <WeaponsCard WeaponsCardData ={Weaponsdata}/>
                    </div>
                    <div className='four-col'>
                        <h2 className='title'>Clothes</h2>
                        <CharactersCard CharactersCardData ={Clothesdata}/>
                    </div>

                    <div className='four-col'>
                        <h2 className='title'>Vehicles</h2>
                        <WeaponsCard WeaponsCardData ={vehiclesdata}/>
                    </div>
                    

                </div>
            </section>

            <Modal ModalTitle="" onClose={modalclick} Modalclass={` ${topboxClass.join(' ')}`}>
                <div className='Transaction-popup'>
                    <div className='startlight-logo'>
                        <img src={StarlightLogo}/>
                    </div>
                    <h5>Connect with Starlight</h5>
                    <div className='wallet-connect'>
                        <FormRadio inputType="radio" name="wallet" id="wallet-no" title="0xcfks44...gk55oc21"/>
                        <div className='wallet-action'>
                            <span className='copy'>
                                <img src={copy}/>   Copied
                            </span>
                            <span className='explorer'>
                                <img src={explore}/>   View on explorer
                            </span>
                        </div>
                    </div>
                    <p>Your transaction will appear here</p>
                    <div className='action-btn'>
                        <Button title="Confirm Transaction"/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

