import React from "react";
import './style.scss';

export default function FormRadio ({id,isChecked, title, value, defaultValue, inputType, isDisabled, isReadonly, onChange, onKeyUp, onKeyDown,name}) {
	return (
	<div className="formField radio">
		<input className="formControl"
			value={(value ? value : defaultValue)}
			type={inputType}
			disabled={isDisabled}
			readOnly={isReadonly}
			onChange={onChange}
			onKeyUp={onKeyUp}
			onKeyDown={onKeyDown}
			name={name}
			checked={isChecked}
			id={id}
			required
		/>
		<label htmlFor={id}>
			{title}
		</label>
	</div>
	);
}