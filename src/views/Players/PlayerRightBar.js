import './style.scss'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import wind from "../../assets/images/wind.png";
import YOSHI from "../../assets/images/yoshi.png";
import gameimg from "../../assets/images/game-img.png";
import PlayersCard from '../../Components/PlayersCard';
import LastMatch from '../../Components/LastMatch';


export default function PlayerRightBar({}) {

    const PlayerTeam=[
        {img: wind, name: "wind", win:"72.11%",},
        {img: YOSHI, name: "YOSHI", win:"72.11%",},
    ]

    const TodayMatchlist=[
        {img: gameimg, name: "STORM", win:"8", loss:"2",date:"32/11/16"},
        {img: gameimg, name: "REBEL", win:"2", loss:"8",date:"32/11/16"},
        {img: gameimg, name: "SWORD", win:"8", loss:"2",date:"32/11/16"},
    ]

    const YesterdayMatchlist=[
        {img: gameimg, name: "STORM", win:"8", loss:"2",date:"32/11/16"},
        {img: gameimg, name: "REBEL", win:"8", loss:"2",date:"32/11/16"},
        {img: gameimg, name: "SWORD", win:"8", loss:"2",date:"32/11/16"},
    ]


    return (
        <div className="player-right-bar">

            <h2 className='title'>
                Team    
            </h2>

            <div className='team-mates'>
                <PlayersCard Playerdata={PlayerTeam}/>
            </div>
            <div className='last-match'>
                <h2>Last Match</h2>
                <span className='allmatch'>View All Match</span>

                <h2 className='title-with-dot'>Today</h2>
                <LastMatch LastMatchdata={TodayMatchlist}/>

                <h2 className='title-with-dot'>Yesterday</h2>
                <LastMatch LastMatchdata={YesterdayMatchlist}/>

            </div>
        </div>
    )
}

