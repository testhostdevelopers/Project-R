import React, {useState} from "react";
import './style.scss';
import faceicon from "../../assets/images/face-icon.png";
import FormInput from '../../Components/FormInput';
import Button from '../../Components/Button';



export default function chart ({chartCardData}) {
    
    
    const chatList = chartCardData.map(chat => {
		return (
			<li className="chat-box">
				<span className='user-avatar'>
					<img src={chat.img} /> {chat.name}
				</span>
				<span className='user-message'>
					{
					chat.message.map(msg => {
						return ( 
						<div>
							<time>{msg.time}</time>
							<p>{msg.msg}</p>
						</div> );
						})
					}
				</span>
			</li>
		);
		});
	return (
		<>
		<ul className="chat-list">
			{chatList}
		</ul>
		<div className="type-msg">
			<span className="icon">
				<img src={faceicon}/>
			</span>
			<FormInput placeholder="Send message..."/>
			<Button title="Send"></Button>
		</div>
		</>
	);
}

