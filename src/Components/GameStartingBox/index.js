import React, {useState} from "react";
import { Link } from "react-router-dom";
import './style.scss';
import WatchTeaserImg from '../../assets/images/watch-teaser-img.png';
import CountdownBg from '../../assets/images/Countdown-bg.png';
import SmPlayIcon from '../../assets/images/sm-play.png';

export default function GameStartingBox () {
 
  return (
    
    <div className="game-starting-box">
      <div className="game-starting-box-inner">
        <div className="game-starting-box-img">
          <img src={CountdownBg} alt={CountdownBg} />
        </div>
        <div className="game-starting-box-info">
          <h2>GAME STARTING</h2>
          <div className="countdown-block">
            <ul className="countdown-list">
              <li>
                <span className="count">3</span>
                Days
              </li>
              <li>
                <span className="count">12</span>
                Hours
              </li>
              <li>
                <span className="count">37</span>
                Minutes
              </li>
              <li>
                <span className="count">54</span>
                Second
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

