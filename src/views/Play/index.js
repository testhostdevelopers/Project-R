import './style.scss'
import React from "react";
import { Link } from "react-router-dom";

import Counter from './Counter';
import REBEL from "../../assets/images/REBEL.png";
import storm1 from "../../assets/images/storm-1.png";
import game1 from "../../assets/images/game-img-1.png";
import game2 from "../../assets/images/game-img-2.png";
import eth from "../../assets/images/eth.png";
import Avatar from "../../assets/images/Avatar.png";

import CharactersCard from '../../Components/CharactersCard';
import GameCard from '../../Components/GameCard';
import Chat from '../../Components/Chat';


export default function Play({}) {

    const rentcharacter=[
        {img: REBEL, name: "REBEL", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,092 ETH"},
        {img: storm1, name: "STORM", dec:"Representing her home country of South.", coinimg:eth, coinname:"0,092 ETH"},
        
    ]

    const PopulerGame=[
        {img: game1, name: "Red Dead Redemption 2", cmp:"Rockstar Games", lang:"English", player:"single"},
        {img: game2, name: "Fortnite", cmp:"Epic Games", lang:"English", player:"multi"},
    ]

    const userchat=[
        {img: Avatar, name: "Dean Chan", message:[{time:"22:06", msg:"Great game team 🔥 "}]},
        {img: Avatar, name: "Ruben Benedict", message:[{time:"22:06", msg:"Amazing performance and solid team"}, {time:"22:06", msg:"Good game"}]},
        {img: Avatar, name: "Terry Hodgest", message:[{time:"22:07", msg:"Best match so far, Great to see"}]},
        {img: Avatar, name: "Mac Hardy", message:[{time:"22:07", msg:"Both teams played really well"}]},
        {img: Avatar, name: "Harry Zain", message:[{time:"22:07", msg:"Good game for both team, Really fun to see the match"}]},
    ]

    const GamesDetails=[
        {title: "Game Playing",value: "3 x 3"},
        {title: "Player Playing",value: "2.200 Players"},
        {title: "Ammount To Win",value: "$500K ETH"},
        {title: "Players Left",value: "56 Players"},
        {title: "Ammount Collected",value: "$90K"},
        {title: "Hidden Items left",value: "$90K"},
        {title: "Money To Be Found",value: "$450K"},
        {title: "Ammount You Have Won",value: "$68K"},   
    ]

    const GamesDetailslist = GamesDetails.map(GDetails => {
		return (
			<li>
                <label>{GDetails.title}</label>
                <span>{GDetails.value}</span>
            </li>
			
		);
	});


    return (
        <div className="main-wrapper">
            <section className="play-page">
                <div className="container">
                    
                    <div className='counter-live'>
                        <div className='counter-wrap'>
                            <Counter/>
                        </div>
                        <div className='chat-wrap'>
                            <div className='chat-header'>
                                <h2>Live Chat</h2>
                                <span className='online'>100 Online</span>
                                <span className='hide-show-chat'>Hide Chat</span>
                            </div>
                            <div className='dark-box'>
                                <Chat chartCardData={userchat}/>
                            </div>
                        </div>
                    </div>

                    <div className='other-option'>
                        <div className='games-details'>
                            <div className='Populer-Games'>
                                <h2 className='title'>
                                    Populer Games
                                    <Link>See All Games</Link>
                                </h2>
                                <GameCard GameCardData={PopulerGame}/>
                            </div>

                            <div className='rent-character'>
                                <h2 className='title'>Rent a Character to Play</h2>
                                <CharactersCard CharactersCardData ={rentcharacter}/>
                            </div>
                        </div>

                        <div className='detail-games'>
                            <h2>Detail Games</h2>
                            <div className='dark-box'>
                                <ul>
                                    {GamesDetailslist}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

