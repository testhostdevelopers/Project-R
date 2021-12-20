import React, { useState, useEffect } from "react";
import './style.scss';

const FormSelect = ({ defaultValue, required, errorMessage, openValue, title, options, ...attrs }) => {
	const [hasFocus, setFocus] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const [items, setItems] = useState(options);
	const [selectedItem, setSelectedItem] = useState(null);
	const [defaultItem, setDefaultItem] = useState(defaultValue);

	const toggleDropdown = () => setOpen(!isOpen);

	const handleItemClick = (e) => {
		const value = e.target.id;
		/**
		 * Added to handle custom event
		 */
		attrs.onClick(e);
		selectedItem === value ? setSelectedItem(null) : setSelectedItem(value);
		toggleDropdown();
	}

	useEffect(() => {
		setItems(options);
		setDefaultItem(defaultValue);
	}, [options, defaultItem])

	return (
		<div  className={`formField ${hasFocus? 'active': ''}`}  onClick={toggleDropdown}
		onFocus={() => setFocus(true)}
		onBlur={() => setFocus(false)}
		>
			<label>
				{/* {title} */}
				<div className="feildRequired">{title} {required === "required" && <span className="actionField errorBox">*</span>}</div>
			</label>
			<div className='dropdown'>
				<div className='dropdownHeader' onClick={toggleDropdown}>
					{selectedItem ? items.find(item => item.value === selectedItem).label : defaultItem}
					<i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
				</div>
				<div className={`dropdownBody ${isOpen && 'open'}`}>

					{items.map((item, i) => (
						<div key={i} className={`dropdownItem ${item.value === selectedItem && 'selected'}`} onClick={e => handleItemClick(e)} id={item.value}>

							{item.label}
						</div>
					))}
				</div>
			</div>
			{errorMessage && <div className="actionField errorBox"> {errorMessage}</div>}
		</div>

	);
};

FormSelect.propTypes = {

};

export default FormSelect;

