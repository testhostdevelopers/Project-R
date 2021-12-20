import React from "react";
import './style.scss';



export default function Button ({btn, isDisabled, buttonType, onClick, value, defaultValue,title}) {

	return (
		<div className="button">
			<button
				className={btn}
				disabled={isDisabled}
				type={buttonType}
				onClick={onClick}
				value={(value ? value : defaultValue)}
			>
					{title}
			</button>
		</div>
	);
}
