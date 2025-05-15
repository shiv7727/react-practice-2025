import React, { useRef } from 'react';

const UncontrolledInput = () => {
	const inputRef = useRef(null);
	const displayRef = useRef(null);

	const handleInput = () => {
		// Directly set the text content of a DOM element
		displayRef.current.textContent = inputRef.current.value;
	};

	return (
		<div>
			<h3>UncontrolledInput </h3>
			<h4>name:{}</h4>
			<input
				type="text"
				name="text"
				id="name-text"
				ref={inputRef}
				onChange={handleInput}
				placeholder="enter your name"
			/>
			<p>
				name is <strong ref={displayRef}></strong>
			</p>
		</div>
	);
};

export default UncontrolledInput;
