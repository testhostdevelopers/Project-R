import React, {useState} from "react";
import './style.scss';

export default function FormInput ({id, title, value,required, defaultValue, inputType ,placeholder, isDisabled, isReadonly, onChange, onKeyUp, onKeyDown,name, errorMessage, min,max}) {

	const [hasFocus, setFocus] = useState(false);
	return (
	<div className={`formField ${hasFocus? 'active': ''}`} >
		<label htmlFor={id}>
			<div className="feildRequired">{title}{required === "required"&&<span className="actionField errorBox">*</span>}</div>
		</label>

		<input className="formControl"
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
			value={(defaultValue ? defaultValue: value)}
			placeholder={placeholder}
			type={inputType}
			disabled={isDisabled}
			readOnly={isReadonly}
			onChange={onChange}
			onKeyUp={onKeyUp}
			onKeyDown={onKeyDown}
			name={name}
			id={id}
			min={min}
			max={max}
			autoComplete="off"
			required
		/>
		
		{errorMessage && <div className="actionField errorBox"> {errorMessage}</div>}
	</div>
	);
}