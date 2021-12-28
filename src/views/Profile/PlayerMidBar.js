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
import Achievement1 from "../../assets/images/Achievement-1.png";
import Achievement2 from "../../assets/images/Achievement-2.png";
import Achievement3 from "../../assets/images/Achievement-3.png";
import Achievement4 from "../../assets/images/Achievement-4.png";
import Achievement5 from "../../assets/images/Achievement-5.png";
import Achievement6 from "../../assets/images/Achievement-6.png";
import tournament from "../../assets/images/tournament.png";
import user1 from "../../assets/images/user-1.png";
import user2 from "../../assets/images/user-2.png";
import user3 from "../../assets/images/user-3.png";
import SearchBox from '../../Components/SearchBox';
import Filter from '../../Components/Filter';
import FormSelect from '../../Components/FormSelect';
import SearchCard from '../../Components/SearchCard';
import WatchTeaserBox from '../../Components/WatchTeaserBox';
import Achievement from '../../Components/Achievement';
import Tournament from '../../Components/Tournament';



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
    const Achievementresult=[
        { img: Achievement1,  title:"Old Boy",progressno:"23",totalprogress:"50", active:false},
        { img: Achievement1,  title:"Old Boy",progressno:"23",totalprogress:"50", active:false},
        { img: Achievement3,  title:"Old Boy",progressno:"23",totalprogress:"50", active:false},
        { img: Achievement4,  title:"Old Boy",progressno:"23",totalprogress:"50", active:true},
        { img: Achievement5,  title:"Old Boy",progressno:"23",totalprogress:"50", active:false},
        { img: Achievement6,  title:"Old Boy",progressno:"23",totalprogress:"50", active:false},
        { img: Achievement1,  title:"Old Boy",progressno:"23",totalprogress:"50", active:false},
    ]

    const TourGame=[
        { img: tournament, gamename:"Tribe Gaming",  name:"Valoran Main Event 2021 ESL Pro League", timg1:user1, timg2:user2, timg3:user3,price:"$ 50.000",step:"4",totalstep:"5"},
        { img: tournament, gamename:"Tribe Gaming",  name:"Valoran Main Event 2021 ESL Pro League", timg1:user1, timg2:user2, timg3:user3,price:"$ 50.000",step:"4",totalstep:"5"},

    ]

    
    
    


    return (
        <div className="player-mid-col">
            <div className='search-bar'>
                <div className='round-title'>
                    <h2>Games List</h2>
                    <span>5 Games</span>
                </div>
                <div className='search-wrap'>
                    <SearchBox setSearchValue={(value) => setSearchValue(value)} placeholder="Find the Game or Character that interests you"/>
                    <Filter filterlist={filterdata}/>
                </div>
            </div>
{ searchValue ?
 
            <div className='search-result'>
                <div className='seach-wrap'>
                    <SearchCard Searchdata={Searchresult} />
                </div>
            </div>
:

            <>
            <WatchTeaserBox />
            
            <Achievement Achievementdata={Achievementresult} />
            <div className='note'>
                <h6>Description of the achievement </h6>
                <p>Thank you, I have installed the plugin, I just need to wait until the file finishes downloading.</p>
            </div>
            <div className='Tournament'>
                <div className='top-player-wrap'>
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

                </div>

                <div className='tour-right'>
                    <Tournament title="Tournament History" TournamentData={TourGame}/>
                </div>
            </div>


           

            </>
}

            

        </div>
    )
}

