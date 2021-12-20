import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";

export default function PlayersCard ({Playerdata}) {
    
    
    const PlayerList = Playerdata.map(player => {
		return (
			
			<li className="player_item">
				<Link to={player.to} className="Players-box">
                    <span className="player-img">
                        <img src={player.img}/>
                    </span>
                    <div className="Player-info">
                        <h4> {player.name}</h4>
                        <span className="win-ration">
                            <label>Win Ratio</label>
                            <p> {player.win}</p>
                        </span>
                    </div>
				</Link>
			</li>
			
		);
		});
	return (
		<ul className="player-list">
			{PlayerList}
		</ul>
	);
}

