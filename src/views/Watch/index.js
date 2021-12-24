import './style.scss'
import React from "react";

import videimg from "../../assets/images/Play-countdown-bg.png";
import Playimg from "../../assets/images/Play-icon.png";
import gameicon from "../../assets/images/game-icon.png";
import updateicon from "../../assets/images/updatetable.png";
import winning from "../../assets/images/winningcup.png";
import Avatar1 from "../../assets/images/Avatar-1.png";
import Avatar2 from "../../assets/images/Avatar-2.png";

import GamesDetails from '../../Components/GamesDetails';
import TeamHealth from '../../Components/TeamHealth';




export default function Watch({}) {
    
    const rows = [
        { event: 'Who will die next?' , budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who will will the game?', budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who finds the most NFTS', budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who gets the most kills', budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who will be in the top 10', budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who gets the most kills', budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who will will the game?', budget: '$ 1.600.50', game: gameicon, coff: '3'},
        { event: 'Who gets the most kills', budget: '$ 1.600.50', game: gameicon, coff: '3'},
      ];

      const gamepre = [
        { title: 'Game Activity', ongame:"2,880", death:"146", playervalue:"90%", deathvalue:"75%" },
        { title: 'Victory Predictions', ongame:"2,880", death:"146", playervalue:"90%", deathvalue:"75%" },
      ]

      const teamenergy=[
        { title: 'Players In Game', link:"#0", pdata:[
            {img1:Avatar1,img2:"",img3:"", team:"Bruce Russell", Health:"89%", weapen:"Rivels Snipper",location:"United states"},
            {img1:Avatar2,img2:"",img3:"", team:"Jimmy Tooner", Health:"54%", weapen:"Magnum Rivelsr",location:"United states"}
            ]
        },  
        { title: 'Team Players', link:"#0", pdata:[
            {img1:Avatar1,img2:Avatar2,img3:Avatar1, team:"Tribe Gaming", Health:"245%", weapen:"Rivels Snipper",location:"United states"},
            {img1:Avatar1,img2:Avatar2,img3:Avatar1, team:"Team Liquid", Health:"225%", weapen:"Rivels Snipper",location:"United states"}
            ]
        },  

    
      ]
      

    return (
        <div className="main-wrapper">
            <section className="Watch-page">
                <div className="container">
                    <div className='watch-left'>
                        <div className='WatchGame'>
                            <div className='game-video'>
                                <img src={videimg}/>
                                <span className='watch-button'>
                                    <img src={Playimg}/>
                                    Watch Game
                                </span>
                            </div>
                        </div>

                        <div className='betting-table'>
                            <div className="table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="event">EVENT</th>
                                        <th className="budget">PRIZE BUDGET</th>
                                        <th className="game">GAME</th>
                                        <th className="coff">COEFF.%</th>
                                        <th className="refreshtabel">
                                           <img src={updateicon}/>&nbsp; &nbsp;UPDATE TABLE
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rows.map((row, i) => (
                                    <tr>
                                        <td datatitle="EVENT">{row.event}</td>
                                        <td datatitle="PRIZE BUDGET">{row.budget}</td>
                                        <td datatitle="GAME"><span className='gameimg'><img src={row.game}/></span></td>
                                        <td datatitle="coff"><span className='roundcoff'>{row.coff}</span></td>
                                        <td>
                                            <span className="button">
                                                <div className='button-check'>
                                                    <input type="checkbox" id={`betting${i}`}/>
                                                    <label for={`betting${i}`}>Betting</label>
                                                </div>
                                            </span>
                                            <span className="hide-button">
                                                <span className='eye-btn'>
                                                    <input type="checkbox" id={`eye${i}`}/>
                                                    <label className='eye' for={`eye${i}`}> </label>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='watch-right'>
                        <div className='game-presentation'>
                            <span className='cupimg'>
                                <img src={winning}/>
                            </span>

                            <div class="winning-progress-bar">
                                <label>Tribe Gaming Win Presentation</label>
                                <div class="score-progress">
                                    <span style={{"width" : "76%"}}></span>
                                </div>
                                <span>76%</span>
                            </div>
                        </div>

                        <div className='Games-Details'>
                            <GamesDetails GamesData={gamepre}/>
                        </div>

                        <div className='team-health'>
                            <TeamHealth TeamHealthData={teamenergy}/>
                        </div>

                                        
                    </div>

                </div>
            </section>
        </div>
    )
}

