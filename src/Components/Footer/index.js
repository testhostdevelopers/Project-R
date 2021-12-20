import React, { useEffect, useState } from 'react'
import './style.scss';
import { Link } from "react-router-dom";
import MsdogIcon from '../../assets/images/msdog-icon.png';
import CryptoIcon from '../../assets/images/crypto-icon.png';
import OrianIcon from '../../assets/images/orian-icon.png';
import TelegramIcon from '../../assets/images/TelegramIcon.png';
import DiscordIcon from '../../assets/images/DiscordIcon.png';
import TwittwrIcon from '../../assets/images/TwittwrIcon.png';
import CoinBox from '../../Components/CoinBox';


const Footer = () => {
    const Coindatalist=[
        {img: MsdogIcon, label: 'MSDOGE', price: "$0.00"},
        {img: CryptoIcon, label: 'CRYPTO', price: "$0.00"},
        {img: OrianIcon, label: 'ORIAN', price: "$0.00"}, 
    ]
    
    return (
       <footer className="footer">
           <div className="container">
                <div className="row">
                    <div className="footer-left-block">
                        <CoinBox Coindata={Coindatalist}/>
                    </div>
                    <div className="footer-right-block">
                        <ul className="footer-menu-icon">
                            <li>
                                <Link to="#0">
                                    <img src={TelegramIcon} alt={TelegramIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                    <img src={DiscordIcon} alt={DiscordIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                    <img src={TwittwrIcon} alt={TwittwrIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                    Eden DAO
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
       </footer>
    )
}

export default Footer