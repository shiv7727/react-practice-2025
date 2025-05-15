import React, { useState } from 'react';

const ControlledInput = () => {
	const [name, setName] = useState('');
	return (
		<div>
			<h3>ControlledInput</h3>
			<h4>name:{name}</h4>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="enter your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default ControlledInput;
