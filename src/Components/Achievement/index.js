import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";

export default function Achievement ({Achievementdata}) {
    
    
    const AchievementList = Achievementdata.map(achive => {
		return (
			<li className="achive_item">
				<div className="achive-box players-page">
					<div className="achive-img">
						<img src={achive.img}/>
					</div>
					<div className="achive-detail score ">
						<h2>{achive.title}</h2>
						<div className="score-progress-bar achive-progress">
							<label>Achievement Progress</label>
							<div class="score-progress">
								<span style={{"width" : "100%"}}></span>
							</div>
							<span>{achive.progressno} / {achive.totalprogress}</span>
						</div>
					</div>
				</div>
			</li>
			);
		});
	return (
		<>

		<div className='achievement-name'>
			<div className='round-title'>
				<h2>Achievement</h2>
				<span>5 / 23 Received</span>
			</div>
			<div className='achievement-display'>
			<ul className="achievement-list">
					{AchievementList}
				</ul>
			</div>
		</div>
		</>
	);
}

