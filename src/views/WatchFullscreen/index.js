import './style.scss'
import React, { useState } from "react";
import { Link } from "react-router-dom";


import watchfullscreen from "../../assets/images/watchfullscreen.png";
import yellowarrow from "../../assets/images/yellow-arrow.png";
import msg from "../../assets/images/msg.png";
import otheroption from "../../assets/images/other-option.png";
import Avatar from "../../assets/images/Avatar.png";
import edit from "../../assets/images/edit.png";
import person from "../../assets/images/person.png";
import graph from "../../assets/images/graph.png";
import coin from "../../assets/images/coin.png";






export default function WatchFullscreen({}) {

    const [MoreOption, setMoreOption] = useState("false");

    const ShowOtherOption = () => {
        setMoreOption(!MoreOption); 
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
            <section className="watch-fscreen">
                <div className='game-box'>
                    <div className='game-img'>
                        <img src={watchfullscreen}/>
                    </div>
                    <div class="price">
                        <span>$ 405 <img src={edit}/></span>
                    </div>
                    <div className='game-action-button'>
                        <span className="game-action-arrow" onClick={ShowOtherOption}>
                            <img src={yellowarrow}/>
                        </span>
                        <div className={MoreOption ? "MoreOption" : "MoreOption ShowOption"}>
                            <span className='game-circle'>
                                <img src={msg}/>
                            </span>
                            <span className='game-circle'>
                                <img src={coin}/>
                            </span>
                            <span className='game-circle'>
                                <img src={graph}/>
                            </span>
                            <span className='game-circle'>
                                <img src={person}/>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

