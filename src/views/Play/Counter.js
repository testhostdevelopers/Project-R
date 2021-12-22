import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import {Countdown} from '../../Components/Countdown';
import countdownBG from '../../assets/images/Play-countdown-bg.png';
import Battle from '../../assets/images/white-fight.png';
import live from '../../assets/images/live.png';
import teamMatch from '../../assets/images/teamMatch.png';

import like from '../../assets/images/like.png';
import share from '../../assets/images/share.png';
import fav from '../../assets/images/fav.png';



export default function Counter() {
    return (
        <div className='count-down-time'>
            <div className="Counter">
                <div className='counter-bg'>
                    <img src={countdownBG}/>
                </div>
                <div className='counter-time'>
                    <Countdown toDate={new Date(2022, 5, 14)} />
                </div>
            </div>
            <div className='game-action-button'>
                <ul>
                    <li>
                        <Link>
                            <img src={Battle}/> Battle Royale
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={live}/> Live Play
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={teamMatch}/> Team Match
                        </Link>
                    </li>
                </ul>
                <div className='game-detail'>
                    <div className='game-info'>
                        <div className='dark-box'>
                            <h4>Valorant</h4>
                            <p>
                                <span className='game-cmp'>Riot Games. Inc</span>
                                <span className='lang'>English</span>
                            </p>
                        </div>
                    </div>
                    <div className='desciption'>
                        <h3>Game Description</h3>
                        <p>Valorant is a tactical shooting game involving two teams with 5 players in each team. Every player can sign in and play remotely from anywhere in the world. Every game has 25 rounds and the team that wins 13 of them first wins the game.</p>
                    </div>
                </div>
            </div>
            <div className='like-share-game'>
                <ul>
                    <li>
                        <Link>
                            <img src={like}/> Like
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={share}/> Share
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={fav}/> Add To Playlist
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

