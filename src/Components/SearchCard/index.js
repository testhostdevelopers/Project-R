import React, { useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import ShopnftIcon from '../../assets/images/nft-black.png';


export default function SearchCard({ Searchdata }) {


	const SearchCardList = Searchdata.map(search => {
		return (

			<li className="search_item">
				<div to={search.to} className="search-box dark-box">
					<span className="search-img">
						<img src={search.img} />
					</span>
					<div className="search-info">
						<h2>{search.name}</h2>
						<span>Description</span>
						<p>{search.des}</p>
						<div className="action">
							<span className="coin-value">
								<img src={search.coinimg}/> {search.coin}
							</span>
							<Link to="#0" className="btn-with-img">
								<span><img src={ShopnftIcon} alt={ShopnftIcon} /></span>
								Buy NFT
							</Link>
						</div>

					</div>
				</div>
			</li>

		);
	});
	return (
		<ul className="match-list">
			{SearchCardList}
		</ul>
	);
}

