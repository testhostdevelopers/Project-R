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
                    <Countdown toDate={new Date('2021-12-31')} />
                </div>
            </div>
        </div>
    )
}

