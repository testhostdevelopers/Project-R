import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import ShopnftIcon from "../../assets/images/nft-black.png";


export default function CharactersCard ({CharactersCardData}) {
    
    
    const CharactersCardList = CharactersCardData.map(Character => {
		return (
			
			<li className="player_item">
				<Link to={Character.to} className="Players-box">
                    <span className="player-img">
                        <img src={Character.img}/>
                    </span>
                    <div className="Player-info">
                        <h4> {Character.name}</h4>
                        <span className="p-description">
                            <label>Description</label>
                            <p> {Character.dec}</p>
                        </span>
						<span className="pp-price">
							<span><img src={Character.coinimg}/> {Character.coinname} </span>
							<Link to="#0" className="btn-with-img">
								<span><img src={ShopnftIcon}  /></span>
								Buy NFT
							</Link>
						</span>
                    </div>
				</Link>
			</li>
			
		);
		});
	return (
		<ul className="characters-list">
			{CharactersCardList}
		</ul>
	);
}

