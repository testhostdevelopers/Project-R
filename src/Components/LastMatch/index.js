import React, { useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import trophy from "../../assets/images/trophy.png";


export default function LastMatch({ LastMatchdata }) {


	const LastMatchList = LastMatchdata.map(match => {
		return (

			<li className="match_item">
				<Link to={match.to} className="match-box dark-box">
					<span className="match-img">
						<img src={match.img} />
					</span>
					<div className="match-info">
						<div className="match-w-l">
							<h4> {match.name}</h4>
							<div className="w">W : <span className="green">{match.win}</span></div>
							<div className="l">L : <span className="red">{match.loss}</span></div>
						</div>
						<div className="match-kda">
							<label> K / D / A</label>
							<span className="date">{match.date}</span>
						</div>
						<div className="win-trophy" >
							{
								match.win >= match.loss ?
									<div className="win">
										<img src={trophy} />
										<span>Win Match</span>
									</div>
									:
									<div className="loss">
										<img src={trophy} />
										<span>Lose Match</span>
									</div>
							}
						</div>
					</div>
				</Link>
			</li>

		);
	});
	return (
		<ul className="match-list">
			{LastMatchList}
		</ul>
	);
}

