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
import WatchFullscreen from "./views/WatchFullscreen";
import Stats from "./views/Stats";
import StatsDetails from "./views/Stats/StatsDetails";
import Profile from "./views/Profile";




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
	{
		path: `/WatchFullscreen`,
		exact: true,
		component: WatchFullscreen
	},
	{
		path: `/Stats`,
		exact: true,
		layout: DefaultLayout,
		component: Stats
	},
	{
		path: `/StatsDetails`,
		exact: true,
		layout: DefaultLayout,
		component: StatsDetails
	},
	{
		path: `/Profile`,
		exact: true,
		layout: DefaultLayout,
		component: Profile
	},

	

	
];
