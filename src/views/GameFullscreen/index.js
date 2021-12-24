import './style.scss'
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Chat from '../../Components/Chat';

import gamefullscreen from "../../assets/images/game-fullscreen.png";
import yellowarrow from "../../assets/images/yellow-arrow.png";
import msg from "../../assets/images/msg.png";
import otheroption from "../../assets/images/other-option.png";
import Avatar from "../../assets/images/Avatar.png";



export default function GameFullscreen({}) {

    
    
    const [MoreOption, setMoreOption] = useState("false");

    const ShowOtherOption = () => {
        setMoreOption(!MoreOption); 
    };

    const [livechat, setlivechat] = useState("false");

    const livechatclick = () => {
        setlivechat(!livechat); 
    };

    const userchat=[
        {img: Avatar, name: "Dean Chan", message:[{time:"22:06", msg:"Great game team 🔥 "}]},
        {img: Avatar, name: "Ruben Benedict", message:[{time:"22:06", msg:"Amazing performance and solid team"}, {time:"22:06", msg:"Good game"}]},
        {img: Avatar, name: "Terry Hodgest", message:[{time:"22:07", msg:"Best match so far, Great to see"}]},
        {img: Avatar, name: "Mac Hardy", message:[{time:"22:07", msg:"Both teams played really well"}]},
        {img: Avatar, name: "Harry Zain", message:[{time:"22:07", msg:"Good game for both team, Really fun to see the match"}]},
    ]

    return (
        <div className="main-wrapper">
            <section className="game-screen">
                <div className='game-box'>
                    <div className='game-img'>
                        <img src={gamefullscreen}/>
                    </div>
                    <div className='game-action-button'>
                        <span className="game-action-arrow" onClick={ShowOtherOption}>
                            <img src={yellowarrow}/>
                        </span>
                        <div className={MoreOption ? "MoreOption" : "MoreOption ShowOption"}>
                            <span className='game-circle' onClick={livechatclick}>
                                <img src={msg}/>
                            </span>
                            <span className='game-circle'>
                                <img src={otheroption}/>
                            </span>
                        </div>
                    </div>

                    <div className={livechat ? "livechat" : "livechat showchat"}>
                        <div className='showChat'>
                            <Chat chartCardData={userchat}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

