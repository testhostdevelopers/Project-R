import React, { useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";


import location from "../../assets/images/location.png";
import health from "../../assets/images/health.png";
import snipper from "../../assets/images/snipper.png";


export default function TeamHealth({ TeamHealthData }) {


	const TeamHealthinfo = TeamHealthData.map(teamdata => {
		return (

			<li className="team-health-item">
				<div className="team-health-box">
					<div className="team-health-header">
						<h4>{teamdata.title} <Link to="{teamdata.link}">See All</Link></h4>
					</div>

					{
					teamdata.pdata.map(pinfo => {
						return ( 
						<div className="dark-box">
							<div className="player-involved">
								<span>
									<img src={pinfo.img1}/>
									<img src={pinfo.img2}/>
									<img src={pinfo.img3}/>
									<p>{pinfo.team}</p>
								</span>
								<ul>
									<li>
										<div className="icon-box">
											<img src={health}/>
										</div>
										<p>Health {pinfo.Health}</p>
									</li>
									<li>
										<div className="icon-box">
											<img src={snipper}/>
										</div>
										<p>{pinfo.weapen}</p>
									</li>
									<li>
										<div className="icon-box">
											<img src={location}/>
										</div>
										<p>{pinfo.location}</p>
									</li>
								</ul>
							</div>
						</div> );
						})
					}

				</div>
			</li>

		);
	});
	return (
		<ul className="team-player-health">
			{TeamHealthinfo}
		</ul>
	);
}

