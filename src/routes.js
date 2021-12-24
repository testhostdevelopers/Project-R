import React from "react";
import {
	Redirect
} from "react-router-dom";

// Layout Types
import {
	DefaultLayout
} from "./layouts";

// Route Views
import Home from "./views/Home";
import Players from "./views/Players";
import ShopNFTs from "./views/ShopNFTs";
import Play from "./views/Play";
import PlayCountdown from "./views/PlayCountdown";
import GameFullscreen from "./views/GameFullscreen";
import Watch from "./views/Watch";


export default [
	{
		path: `/`,
		exact: true,
		layout: DefaultLayout,
		component: Home
	},
	{
		path: `/Players`,
		exact: true,
		layout: DefaultLayout,
		component: Players
	},
	{
		path: `/ShopNFTs`,
		exact: true,
		layout: DefaultLayout,
		component: ShopNFTs
	},
	{
		path: `/Play`,
		exact: true,
		layout: DefaultLayout,
		component: Play
	},
	{
		path: `/PlayCountdown`,
		exact: true,
		component: PlayCountdown
	},
	{
		path: `/GameFullscreen`,
		exact: true,
		component: GameFullscreen
	},
	{
		path: `/Watch`,
		exact: true,
		layout: DefaultLayout,
		component: Watch
	},
	
];
