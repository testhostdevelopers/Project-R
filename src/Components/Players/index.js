import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import Formcheckbox from '../Formcheckbox';
import Button from '../Button';
import UserProfileIcon from '../../assets/images/user-profile-icon.png';
import ShopnftIcon from '../../assets/images/shopnft-icon.png';
import YellowStar from '../../assets/images/yellow-star.png';

export default function Players ({PlayersBox}) {
    const [isAddFav, setAddFav] = useState(false);
    const toggleClass = () => {
        setAddFav(!isAddFav);
    };
    const SinglePlayer = PlayersBox.map(SinglePlayerList => {

        return (    
            <ul key={SinglePlayerList.id} className="player-data-list">
                <li className="player-lavel-box">
                    <div className="player-lavel-box-img">
                        <img src={SinglePlayerList.playerimg} src={SinglePlayerList.playerimg} /> 
                        <span className="level-label-text">{SinglePlayerList.playerlavel}</span>
                    </div>
                </li>
                <li className="player-name-box">
                    <p>{SinglePlayerList.name}</p>
                </li>
                <li className="player-nikname-box">
                    <p>{SinglePlayerList.playernikname}</p>
                </li>
                <li className="player-game-disc-box">
                    <p>{SinglePlayerList.playergamedisc}</p>
                </li>
                <li className="player-overal-rating-box">
                    <div className="player-rating-progress-block">
                        <div className="rating-progress">
                            <span style={{width: SinglePlayerList.rating}}></span>
                        </div>
                        <span>{SinglePlayerList.rating}</span>
                    </div>
                </li>
                <li className="player-list-action">
                    <Link to="#0" className="btn-with-img">
                        <span><img src={UserProfileIcon} alt={UserProfileIcon} /></span>
                        Profile
                    </Link>
                    <Link to="#0" className="btn-with-img">
                        <span><img src={ShopnftIcon} alt={ShopnftIcon} /></span>
                        Buy NFT
                    </Link>
                    <Link to="#0" className="add-fav-btn" className={isAddFav ? 'add-fav-btn added-fav': 'add-fav-btn'} onClick={toggleClass} >
                        <img src={YellowStar} alt={YellowStar} />
                    </Link>
                </li>
            </ul>
        );
    });

    return(
        <div className="player-list-data-block">
            {SinglePlayer}
        </div>
    );
}

