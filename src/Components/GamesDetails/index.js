import React, { useState } from "react";
import './style.scss';

import FormRadio from '../FormRadio';
import FormSelect from '../FormSelect';

export default function GamesDetails({ GamesData }) {

	const [allWeapon, setWeapon] = useState();
	const WeaponsList = [
		{ value: "Net Worth", label: "Net Worth" },
		{ value: "Analytic", label: "Analytic" },
	]
	const Gamesvotes = GamesData.map(Games => {
		return (

			<li className="game-votes-item">
				<div className="game-votes-box">
					<div className="game-votes-header">
						<h4>{Games.title}</h4>
						<div className="team-time">
							<span className="radio-btn">
								<FormRadio inputType="radio" name="team" title="All Team" id="team" />
								<FormRadio inputType="radio" name="team" title="Show Time" id="time" />
							</span>
							<span className="select-option">
								<FormSelect options={WeaponsList} onClick={setWeapon} value={allWeapon} defaultValue="All Weapons" />
							</span>
						</div>
					</div>

					<div className="dark-box">
						<ul className="progress-info">
							<li>
								<span className="dot blue"></span> Player
							</li>
							<li>
								<span className="dot red"></span> Player Death
							</li>
						</ul>
						<div className="player-graph">
							<span style={{ "width": `${Games.playervalue}` }} className="player-blue-progress">
								<label>Player on the game</label>
								<span>{Games.ongame}</span>
							</span>
							<span style={{ "width": `${Games.deathvalue}`}} className="player-red-progress">
								<label>Player death</label>
								<span>{Games.death} Player</span>
							</span>
						</div>
					</div>
				</div>
			</li>

		);
	});
	return (
		<ul className="game-votes-list">
			{Gamesvotes}
		</ul>
	);
}

