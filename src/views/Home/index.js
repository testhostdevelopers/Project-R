import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import WatchTeaserBox from '../../Components/WatchTeaserBox';
import GameStartingBox from '../../Components/GameStartingBox';
import SearchBox from '../../Components/SearchBox';
import Filter from '../../Components/Filter';
import PlayerList from '../../Components/PlayerList';
import OpenGames from '../../Components/OpenGames';
import Pagination from '../../Components/Pagination';
import HomeSlider from '../../Components/HomeSlider';



export default function Home({}) {

    return (
        <div className="main-wrapper">
            <section className="home-start-teaser-sec">
                <div className="container">
                    <div className="row">
                        <WatchTeaserBox />
                        <GameStartingBox />
                    </div>
                </div>
            </section>
            <section className="player-list-sec">
                <div className="container">
                    <div className="row">
                        <div className="player-list-left-block">
                            <div className="player-list-top-action-bar">
                                <div className="player-list-show-count">
                                    <h3>Player List</h3>
                                    <span>9,999 Players</span>
                                </div>
                                <SearchBox placeholder="Find the Game or Character that interests you"/>
                                <Filter />
                            </div>
                            <PlayerList />
                            <Pagination />

                        </div>
                        <div className="open-games-left-block">
                            <OpenGames />
                        </div>
                    </div>
                </div>
            </section>
            <HomeSlider />
        </div>
    )
}

