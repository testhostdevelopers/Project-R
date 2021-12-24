import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '../../assets/images/home-icon.png';
import PlayersIcon from '../../assets/images/players-icon.png';
import ShopnftIcon from '../../assets/images/shopnft-icon.png';
import PlaygameIcon from '../../assets/images/playgame-icon.png';
import WatchIcon from '../../assets/images/watch-icon.png';
import StatsIcon from '../../assets/images/stats-icon.png';
import './style.scss';

export default function Menu() {
	const [mainmenu, setMainMenu] = useState([
		{ id: 1, name: "Home", to: '/Home', img: HomeIcon, active: false },
		{ id: 2, name: "Players", to: '/Players', img: PlayersIcon, active: false },
		{ id: 3, name: "Shop NFT", to: '/ShopNFTs', img: ShopnftIcon, active: false },
		{ id: 4, name: "Play", to: '/Watch', img: PlaygameIcon, active: false },
		{ id: 5, name: "Watch", to: '#0', img: WatchIcon, active: false },
		{ id: 5, name: "Stats", to: '#0', img: StatsIcon, active: false },
	]);
	const location = useLocation();

	const isMenuActive = (item) => item.to === location.pathname;
	const handleClick = (item) => {
		console.log(item.active);
		if (!item.active) {
			mainmenu.forEach((a) => {
				console.log(a.name)
				if (a.name === item.name) {
					a.active = true;
				} else {
					a.active = false;
				}
			});
		}
		setMainMenu(mainmenu);
	};
	const navLinks = mainmenu.map(link => {
		return (
			<li key={link.id} onClick={() => handleClick(link)} className={`nav_item ${isMenuActive(link) ? "active" : ""}`}>
				<Link to={link.to} className={link.className}>
					<span className="menu-icon">
						<img src={link.img} />
					</span>
					<p>{link.name}</p>
				</Link>
			</li>

		);
	});
	return (
		<ul className="menu-list">
			{navLinks}
		</ul>
	);

}
