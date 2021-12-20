import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import PlayerLeftBar from './PlayerLeftBar';
import PlayerMidBar from './PlayerMidBar';
import PlayerRightBar from './PlayerRightBar';



export default function Players({}) {

    return (
        <div className="main-wrapper">
            <section className="players-page">

                <div className="container">
                    <div className="player-profile">
                        <h4>Player Profile</h4>
                    </div>

                    <div className="row">
                        <PlayerLeftBar/>
                        <PlayerMidBar/>
                        <PlayerRightBar/>
                    </div>

                </div>
            </section>
        </div>
    )
}

