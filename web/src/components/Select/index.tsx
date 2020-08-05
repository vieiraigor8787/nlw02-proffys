import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface Options {
	value: string;
	label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	name: string;
	options: Options[];
}

const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
	return (
		<div className='select-block'>
			<label htmlFor={name}>{label}</label>
			<select value='' id={name} {...rest}>
				<option value='' disabled hidden>
					selecione
				</option>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
