import React, {useState} from "react";
import './style.scss';
import { Link } from "react-router-dom";
import ShopnftIcon from "../../assets/images/nft-black.png";


export default function WeaponsCard ({WeaponsCardData}) {
    
    
    const WeaponsCardList = WeaponsCardData.map(Weapon => {
		return (
			
			<li className="weapon_item">
				<Link to={Weapon.to} className="weapons-box">
                    <span className="weapon-img">
                        <img src={Weapon.img}/>
                    </span>
                    <div className="weapon-info">
                        <span className="weapon-des">
							<h4> {Weapon.name}</h4>
                            <p>{Weapon.dec}</p>
                        </span>
						<span className="weapon-price">
							<span><img src={Weapon.coinimg}/> {Weapon.coinname} </span>
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
		<ul className="Weapons-list">
			{WeaponsCardList}
		</ul>
	);
}

