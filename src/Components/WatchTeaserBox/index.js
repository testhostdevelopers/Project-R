import React, {useState} from "react";
import { Link } from "react-router-dom";
import './style.scss';
import WatchTeaserImg from '../../assets/images/watch-teaser-img.png';
import Logo from '../../assets/images/logo.png';
import SmPlayIcon from '../../assets/images/sm-play.png';

export default function WatchTeaserBox () {
 
  return (
    
    <div className="watch-teaser-box">
        <div className="watch-teaser-box-inner">
          <div className="watch-teaser-box-img">
            <img src={WatchTeaserImg} alt={WatchTeaserImg} />
          </div>
          <div className="watch-teaser-box-info">
              <div className="watch-teaser-box-logo">
                <img src={Logo} alt={Logo} />
              </div>
              <div className="watch-teaser-box-logo-info">
                <p>People fear that it was King Doge and nations have gone to destory his planet</p>
              </div>
              <div className="watch-teaser-box-btn">
                <Link to="#0" className="play-teaser-btn">
                    <span>
                      <img src={SmPlayIcon} alt={SmPlayIcon} />
                    </span>
                    Watch Teaser
                </Link>
              </div>
          </div>
        </div>
    </div>

  );
}

