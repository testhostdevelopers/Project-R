import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import Players from '../../Components/Players';
import LavelImg from '../../assets/images/lavel-img.png';

export default function PlayerList ({}) {
	
	const PlayerListdata=[
        { id: 1, playerimg: LavelImg, playerlavel: "Level  40", name: "Jane Cooper", playernikname: "ZeusNorth40", playergamedisc: "Valorant", rating: "89.4%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  1", name: "Dianne Russell", playernikname: "Tromodeus33", playergamedisc: "CS.GO", rating: "25.4%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  11", name: "Kathtryn murphy", playernikname: "villain48", playergamedisc: "Valorant", rating: "89.4%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  11", name: "Esther Howard", playernikname: "north98", playergamedisc: "DOTA 2", rating: "25.4%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  24", name: "Bradley Monroe", playernikname: "Monthfire02", playergamedisc: "Valorant", rating: "25.4%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  11", name: "Hary Stones", playernikname: "stonbreaker22", playergamedisc: "Genshin Impact", rating: "89.4%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  24", name: "Danvers", playernikname: "Optimus00x", playergamedisc: "PUBG", rating: "3.24%" },
        { id: 1, playerimg: LavelImg, playerlavel: "Level  1", name: "Barllo ", playernikname: "Breaker670", playergamedisc: "Fortnite", rating: "24.4%" },
    ]

  return (
    <div className="all-player-list-block">
        <ul className="player-list-head">
            <li className="player-lavel-box">
                <p>PLAYER LEVEL</p>
            </li>
            <li className="player-name-box">
                <p>PLAYER NAME</p>
            </li>
            <li className="player-nikname-box">
                <p>NICKNAME</p>
            </li>
            <li className="player-game-disc-box">
                <p>GAME DISCIPLINE</p>
            </li>
            <li className="player-overal-rating-box">
                <p>OVERAL GAME RATING</p>
            </li>
        </ul>
        <div className="player-list-data-block">
            <Players PlayersBox={PlayerListdata}/>
        </div>
    </div>
  );
}

