import React from "react";
import './style.scss';

export default function FormInput ({id, title, value, defaultValue, inputType, isDisabled, isReadonly, onChange, onKeyUp, onKeyDown,name, isChecked}) {
	return (
	<div className="formField checkbox">
		<input className="formControl"
			value={(value ? value : defaultValue)}
			type={inputType}
			disabled={isDisabled}
			readOnly={isReadonly}
			onChange={onChange}
			onKeyUp={onKeyUp}
			onKeyDown={onKeyDown}
			name={name}
			id={id}
			checked={isChecked}
			required
		/>
		<label htmlFor={id}>
			{title}
		</label>
	</div>
	);
}