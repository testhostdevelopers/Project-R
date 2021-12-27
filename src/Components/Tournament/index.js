import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";


export default function Tournament ({TournamentData, Title}) {
    
    
    const TournamentList = TournamentData.map(Tour => {
		return (
			
			<li className="tournament_item">
				<div className="tournament-box">
					<div className="tour-name-img">
						<span className="tournament-img">
							<img src={Tour.img}/>
						</span>
						<span className="tournament-name">
							<h4> {Tour.name}</h4>
						</span>
					</div>
                    <div className="tournament-info">
                        <div className="winning">
							<label>Winning Team</label>
							<span className="team-img">
								<img src={Tour.timg1}/>
								<img src={Tour.timg2}/>
								<img src={Tour.timg3}/>
								<p>{Tour.gamename}</p>
							</span>
						</div>
						<div className="budget players-page">
							<span className="price">
								<label>Price Budget</label>
								{Tour.price}
							</span>
							<div className="score">
								<div class="score-progress-bar">
									<div class="score-progress">
									<span style={{"width" : "80%"}}></span>
									</div>
									<span>{Tour.step} / {Tour.totalstep}</span>
								</div>
							</div>
						</div>
                    </div>
				</div>
			</li>
			
		);
		});
	return (
		<div className="Tournament-section">
			<h2>Tournament History</h2>
			<ul className="tournament_list">
				{TournamentList}
			</ul>
		</div>
	);
}

