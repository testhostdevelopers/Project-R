import './style.scss'
import React from "react";
import { Link } from "react-router-dom";
import pimg from "../../assets/images/profile-img.png";
import qdimg from "../../assets/images/qdimages.png";



export default function PlayerLeftBar({}) {

    return (
        <div className="player-left-sidebar">
            <div className="box">
                <div className="profile-name-img">
                    <span className="pimg">
                        <img src={pimg}/>
                    </span>
                    <div className="pname">
                        <h5>Jason Serif</h5>
                        <p>Score=0</p>
                    </div>
                </div>
                <div className="dark-box profile-static">
                    <ul>
                        <li>
                            <span>Articles</span>
                            <p>23</p>
                        </li>
                        <li>
                            <span>Followers</span>
                            <p>234</p>
                        </li>
                        <li>
                            <span>Rating</span>
                            <p>2.9</p>
                        </li>
                    </ul>
                </div>
                <div className="dark-box tm">
                    <p>Time management</p>
                </div>

                <div className="quick-data">
                    <div className="qd-img">
                        <img src={qdimg}/>
                    </div>
                    <div className="qd-details">
                        <h3>Quick data</h3>
                        <p>You can see The game will be released on November 10, 2021, available on pc, PS4,xbox</p>
                    </div>
                </div>


                <div className="dark-box profile-name-img">
                    <span className="pimg">
                        <img src={pimg}/>
                    </span>
                    <div className="pname">
                        <h5>Jason Serif</h5>
                        <p>Score=0</p>
                    </div>
                    <div className="profile-detail">
                        <div className="email">
                            <label>Email</label>
                            <p>jasonserif@domain.com</p>
                        </div>
                        <div className="phone">
                            <label>Phone</label>
                            <p>+45 207 384 811</p>
                        </div>
                        <div className="two-row">
                            <div className="top-game">
                                <label>Top games</label>
                                <p>Dota 2</p>
                            </div>
                            <div className="top-game">
                                <label>Game discipline</label>
                                <p>All Rules +2</p>
                            </div>
                        </div>
                        <div className="two-button">
                            <div class="button">
                                <button class="btn btn-primary">Profile</button>
                            </div>
                            <div class="button">
                                <button class="btn btn-outline-primary">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="score">
                <h3>Social Score</h3>
                <p className="s-no">102</p>
                <div className="two-bar">
                    <div class="score-progress-bar">
                        <label>Empathy</label>
                        <div class="score-progress">
                            <span style={{"width" : "20%"}}></span>
                        </div>
                        <span>20 / 50</span>
                    </div>
                    <div class="score-progress-bar">
                        <label>Comunication</label>
                        <div class="score-progress">
                        <span style={{"width" : "100%"}}></span>
                        </div>
                        <span>50 / 50</span>
                    </div>
                </div>
            </div>


            <div className="score">
                <h3>Efficiency Score</h3>
                <p className="s-no">126</p>
                <div className="two-bar">
                    <div class="score-progress-bar">
                        <label>Time Management</label>
                        <div class="score-progress">
                            <span style={{"width" : "20%"}}></span>
                        </div>
                        <span>20 / 50</span>
                    </div>
                    <div class="score-progress-bar">
                        <label>Motivation</label>
                        <div class="score-progress">
                        <span style={{"width" : "21%"}}></span>
                        </div>
                        <span>21 / 50</span>
                    </div>
                </div>

                <div className="two-bar">
                    <div class="score-progress-bar">
                        <label>Adaptibility</label>
                        <div class="score-progress">
                            <span style={{"width" : "12%"}}></span>
                        </div>
                        <span>12 / 50</span>
                    </div>
                    <div class="score-progress-bar">
                        <label>Responsibilty</label>
                        <div class="score-progress">
                        <span style={{"width":"100%"}}></span>
                        </div>
                        <span>50 / 50</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

