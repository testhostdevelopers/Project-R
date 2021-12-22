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

export default [
	{
		path: `/Home`,
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
];
