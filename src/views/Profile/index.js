import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import PlayerLeftBar from './PlayerLeftBar';
import PlayerMidBar from './PlayerMidBar';

export default function Profile({}) {

    return (
        <div className="main-wrapper">
            <section className="players-page profile-page">

                <div className="container">
                    <div className="row">
                        <PlayerLeftBar/>
                        <PlayerMidBar/>
                    </div>
                </div>
            </section>
        </div>
    )
}

