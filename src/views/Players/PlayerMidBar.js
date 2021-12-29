import './style.scss'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../../assets/images/Frame.png";
import strom from "../../assets/images/strom-img.png";
import fight from "../../assets/images/fight.png";
import storm from "../../assets/images/storm.png";
import weapon from "../../assets/images/weapons.png";
import fires from "../../assets/images/fire-s.png";
import win from "../../assets/images/wins-cup.png";
import lose from "../../assets/images/loss-cup.png";
import firegun from "../../assets/images/fire-gun.png";
import FASHER from "../../assets/images/FASHER.png";
import eth from "../../assets/images/eth.png";
import REBEL from "../../assets/images/REBEL.png";
import REDSA from "../../assets/images/REDSA.png";
import SearchBox from '../../Components/SearchBox';
import Filter from '../../Components/Filter';
import FormSelect from '../../Components/FormSelect';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import SearchCard from '../../Components/SearchCard';

export default function PlayerMidBar({}) {

    const [allWeapon, setWeapon] =useState();
    const [searchValue, setSearchValue] =useState('');
    const WeaponsList=[
        { value: "AllWeapons", label:"All Weapons"},
        { value: "Weapons1", label:"Weapons 1"},
        { value: "Weapons2", label:"Weapons 2"},

    ]

    const [allACT, setACT] = useState();
    const act=[
        { value: "ACT2:E3", label:"ACT2:E3"},
        { value: "ACT2:E2", label:"ACT2:E2"},
        { value: "ACT2:E1", label:"ACT2:E1"},
    ]
    const percentage = 72.1;

    const Searchresult=[
        { img: firegun,  name:"FIRE GUN", des:"Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",coinimg:eth,  coin:"0,067 ETH"  },
        { img: FASHER,  name:"FASHER", des:"Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",coinimg:eth,  coin:"0,067 ETH"  },
        { img: REDSA,  name:"REDSA", des:"Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",coinimg:eth,  coin:"0,067 ETH"  },
        { img: REBEL,  name:"REBEL", des:"Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",coinimg:eth,  coin:"0,067 ETH"  },
    ]
    const filterdata=[
        {name: "Level"},
        {name: "Rating"},
        {name: "For sale"},
        {name: "Score"},
    ]
    


    return (
        <div className="player-mid-col">
            <div className='search-bar'>
                <SearchBox setSearchValue={(value) => setSearchValue(value)} placeholder="Find the Game or Character that interests you"/>
                <Filter filterlist={filterdata}/>
            </div>
{ searchValue ?
 
            <div className='search-result'>
                <div className='seach-wrap'>
                    <SearchCard Searchdata={Searchresult} />
                </div>
            </div>
:

            <>
            <div className="top-player">
                <div className='mid-box'>
                    <div className='player-type-box'>
                        <div className='player-img'>
                            <img src={strom}/>
                        </div>

                        <div className='player-type'>
                            <h3>TOP PLAYERS</h3>
                            <h2>
                                STORM <span>PLAYED  235H 23M</span>
                            </h2>
                            <div className='dark-box'>
                                <h6>Player Statistic</h6>
                                <div className='statistic'>
                                    <div>
                                        <span>Win Ratio</span>
                                        <p>72.11%</p>
                                    </div>
                                    <div>
                                        <span>K / D Ratio</span>
                                        <p>2.34</p>
                                    </div>
                                    <div>
                                        <span>Dmg / Round</span>
                                        <p>156.4</p>
                                    </div>
                                </div>

                                <h6>Ability / Match</h6>
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
                        </div>
                    </div>
                </div>
            </div>


            <div className='weapons-Power'>
                <div className='weapons'>
                    <div className='weapon-dropdown'>
                        <h2>Weapons</h2>
                        <FormSelect options={WeaponsList} onClick={setWeapon} value={allWeapon} defaultValue="All Weapons"/>
                        <div className='weapons-img'>
                            <img src={weapon}/>
                        </div>
                        <div className='weapon-name'>
                            <span>SPECTRE</span>
                            <p>Asault Rivels Snipper</p>
                        </div>
                    </div>
                </div>
                <div className='Power'>
                    <h2>Power Ability</h2>
                    <div className='weapons-img'>
                        <img src={fires}/>  
                    </div>
                    <div className='weapon-name'>
                        <span>FIRE SPRINKLE</span>
                        <p>Best attack from the players in game</p>
                    </div>
                </div>
            </div>

            <div className='Competitive'>
                <div className='dark-box'>
                    <h3>Overview</h3>
                    <div className='act-drop'>
                        <FormSelect options={act} onClick={setACT} value={allACT} defaultValue="ACT2:E3"/>
                    </div>
                    <div className='win-loss-static'>
                        <div className='winning-rate'>
                            <div class="winning-circle">
                                    <CircularProgressbar
                                        value={percentage}
                                        styles={buildStyles({
                                        strokeLinecap: 'round',
                                        textSize: '24px',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        pathColor: ' #F6CE0E',
                                        textColor: '#fff',
                                        trailColor: '#303030',
                                        })}
                                    />
                                    <div className="circle-title">
                                        <h6>
                                            Winning Rate
                                            <span>{`${percentage}%`}</span>
                                        </h6>
                                    </div>
                            </div>
                        </div>
                        <div className='win-lose'>
                            <div className='win-cup'>
                                <span className='win'>
                                    <img src={win}/>
                                </span>
                                <p>232 Wins</p>
                            </div>
                            <div className='lose-cup'>
                                <span className='lose'>
                                    <img src={lose}/>
                                </span>
                                <p>88 Lose</p>
                            </div>
                            
                            <div className='total-action'>
                            <ul>
                                <li>
                                    <div className='data'>
                                        <p>Total Kills</p>
                                        <span>10.345</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data'>
                                        <p>Headshot</p>
                                        <span>8.188</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data'>
                                        <p>Most Kills</p>
                                        <span>40</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data'>
                                        <p>Aces</p>
                                        <span>45</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data'>
                                        <p>Kills/Round</p>
                                        <span>1.3</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data'>
                                        <p>death</p>
                                        <span>1.468</span>
                                    </div>
                                </li>
                            </ul>                
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
}

            

        </div>
    )
}

