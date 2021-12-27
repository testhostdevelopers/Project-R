
import React from "react";
import SearchBox from '../../Components/SearchBox';
import Filter from '../../Components/Filter';
import graphicon from '../../assets/images/graph-icon.png';
import time from '../../assets/images/time.png';
import view from '../../assets/images/view.png';
import Refresh from '../../assets/images/Refresh.png';
import graphimg from '../../assets/images/graph-img.png';
import BlackBox from '../../Components/BlackBox';
import watch from '../../assets/images/watch.png';
import Subscribers from '../../assets/images/Subscribers.png';
import Earnings from '../../assets/images/Earnings.png';
import user1 from '../../assets/images/user-1.png';
import user2 from '../../assets/images/user-2.png';
import user3 from '../../assets/images/user-3.png';
import etn from '../../assets/images/etn.png';


import Button from '../../Components/Button';
import OpenGames from '../../Components/OpenGames';
import TheMostCard from '../../Components/TheMostCard';
import PlayerList from '../../Components/PlayerList';
import Pagination from '../../Components/Pagination';




export default function StatsDetails({}) {

    const filterdata=[
        {name: "Level"},
        {name: "Rating"},
        {name: "For sale"},
        {name: "Score"},
    ]

    const TopData=[
        {Img:user1, Title: "The Most Wins", Name:"Handerson Silva",Caterory:"Tremorex",value:"158",Label:"Wons / Games" },
        {Img:user2, Title: "The Most Death", Name:"Karina Chan",Caterory:"Bluewings",value:"342",Label:"Death / Games" },
        {Img:user3, Title: "Made The Most Money", Name:"Rubent Benedict",Caterory:"Redwings",value:"$ 274",Label:"USD" },
        {Img:user1, Title: "The Most Kills", Name:"Jonathan Marc",Caterory:"Reptiles",value:"230",Label:"Kills / Games" },
        {Img:user2, Cimg:etn, Title: "Most Expensive NFT", Name:"Karina Chan",Caterory:"Uniqueen",value:"3,4",Label:"ETH" },
        {Img:user2, Title: "Won The Last Tournament", Name:"Marc Tomson",Caterory:"Minimalismind",value:"2020",Label:"" },
    ]

    return (
        <div className="main-wrapper">
            <section className="stats-page">
                <div className="container">
                    <div className='title-with-seach'>
                        <h2 className='page-title'>Game Statistic</h2>
                        <div className='search-filter'>
                            <SearchBox placeholder="Find the Game or Character that interests you"/>
                            <Filter filterlist={filterdata}/>
                        </div>
                    </div>

                    <div className='Realtime'>
                        <div className='user-active'>
                            <h2>Realtime User Active <img src={graphicon}/></h2>
                            <div className='price'>
                                <p>1.846 <span>/ Month</span></p>
                            </div>
                            <div className='period'>
                                <img src={time}/> Views<br/>Per Minutes
                            </div>
                            <div className='line-chart'>
                            <img src={graphimg}/>
                            </div>
                            <p>This month your income increased by about 12%</p>
                        </div>

                        <div className='average-month'>
                            <div className='average-header'>
                                <h5>
                                    Average view this month
                                    <span> <img src={view}/> 1.356</span>
                                    <span className='refresh'>
                                            <img src={Refresh}/> Refresh
                                    </span>
                                </h5>
                            </div>
                            <div className='month-graph'>
                                
                            </div>
                        </div>

                        <div className='info-card'>
                            <BlackBox iconimg={view}  title="Views" price="1.589.303" value="Million" />
                            <BlackBox iconimg={watch} title="Watch Time" price="1.784" value="Minutes" />
                            <BlackBox iconimg={Subscribers} title="Subscribers" price="678.094" value="Subscribers" />
                            <BlackBox iconimg={Earnings} title="Earnings" price="$ 1,394.08" value="USD" />
                        </div>
                    </div>
                    <div className='earn-this-month'>
                        <div className='black-box'>
                            <div className='erning-img'>
                                <img src={Earnings}/>
                                <h6>Earning This <br/> Month </h6>
                            </div>
                            <div className='price-earn'>
                                <p><strong>$238</strong></p>
                                <p>Update your payout bill to transfer earning</p>
                            </div>
                            <Button title="Withdraw All Earning"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='the-most'>
                <div className='container'>
                        <div className="player-list-left-block">
                            <PlayerList />
                            <Pagination />
                        </div>
                    <div className='latest-video'>
                        <OpenGames />
                    </div>
                </div>
            </section>
        </div>
    )
}

