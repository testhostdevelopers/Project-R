import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import NotificationIcon from '../../assets/images/notification-icon.png';
import ProfileIcon from '../../assets/images/profile-icon.png';
import ConnectWallet from '../ConnectWallet';
import './style.scss';
import Menu from './menu';


export default function Header ({handleClick}) {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
       <>
            <header className="header">
                <div className="container">
                    <div className="header-row">
                        <div className="main-logo">
                            <Link to="#0" className="logo">
                                <img src={Logo} alt={Logo}/>
                            </Link>
                        </div>
                        <div className={isActive ? 'menus show-menu': 'menus'}>
                            <Menu/>
                        </div>
                        <div className="header-right-block">
                            <ul>
                                <li>
                                    <div className="notification-icon-block">
                                        <Link to="#0" className="noti-icon">
                                            <span className="notification-icon-img"><img src={NotificationIcon} alt={NotificationIcon} /></span>
                                            <span className="notification-count">2</span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="profile-block">
                                        <Link to="Profile">
                                            <img src={ProfileIcon} alt={ProfileIcon} />
                                        </Link>
                                    </div>
                                </li>
                                <li className="connectwallet-list">
                                    <ConnectWallet />
                                </li>
                            </ul>
                            <div className={isActive ? 'togglebtn togglebtn-active': 'togglebtn'} onClick={toggleClass}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
       </>
    )

}