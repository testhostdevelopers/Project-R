import React, { useState } from "react";
import './style.scss';


export default function BlackBox ({iconimg,price,title, value}) {

	return (
		<div className="black-box">
			<div className="box-img">
				<img src={iconimg}/> 
				<span>{title}</span>
			</div>
			<div className="price-number">
				<p>{price}</p>
				<span>{value}</span>
			</div>
		</div>
	);
}

