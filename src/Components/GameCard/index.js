import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import Battle from '../../assets/images/white-fight.png';
import live from '../../assets/images/live.png';
import gameplay from '../../assets/images/game-play.png';
import Team from '../../assets/images/teamMatch.png';

export default function GameCard ({GameCardData}) {
    
    
    const GameCardList = GameCardData.map(game => {
		return (
			<li className="game_item">
				<Link to={game.to} className="game-box">
                    <span className="game-img">
                        <img src={game.img}/>
						<span className="playicon">
							<img src={gameplay}/>
						</span>
                    </span>
                    <div className="game-info">
                        <div className='game-action-button'>
							<ul>
								{game.player == "single" &&
									<>
									<li>
										<span> <img src={live}/> Live Play</span>
									</li>
									<li>
										<span> <img src={Battle}/> Battle Royale</span>
									</li>
									</>
									}
								{game.player == "multi" &&
								<>
									<li>
										<span> <img src={Battle}/> Battle Royale</span>
									</li>
									<li>
										<span> <img src={Team}/> Team Match</span>
									</li>
								</>
								}
							</ul>
						</div>
						<h4> {game.name}</h4>
						<div className="game-cmp">
							<span>{game.cmp}</span>
							<span>{game.lang}</span>
						</div>
                    </div>
				</Link>
			</li>
		);
		});
	return (
		<ul className="game-list">
			{GameCardList}
		</ul>
	);
}

