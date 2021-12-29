import React, { useState } from "react";
import './style.scss';


export default function TheMostCard({ MostCardData }) {


	const MostCard = MostCardData.map(Most => {
		return (

			<li className="Most_item">
				<h4>{Most.Title}</h4>
				<div className="Most-box">
					<div className="user-img">
						<img src={Most.Img} />
					</div>
					<div className="user-name">
						<h6>{Most.Name}</h6>
						<span>{Most.Caterory}</span>
					</div>
					<div className="user-data">
						<p>
							{Most.Cimg &&
								<img className="coinimg" src={Most.Cimg} />
							}
							{Most.value}</p>
						<label>{Most.Label}</label>
					</div>
				</div>
			</li>

		);
	});
	return (
		<ul className="MostCard-list">
			{MostCard}
		</ul>
	);
}


