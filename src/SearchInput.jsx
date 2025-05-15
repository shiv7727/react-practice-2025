import React, { useState } from 'react';
import { debounce } from './util';

const SearchInput = () => {
	const [query, setQuery] = useState('');

	const debounceSearchText = debounce((value) => {
		console.log('custom called', value);
	}, 1000);

	const handleChange = (e) => {
		setQuery(e.target.value);
		debounceSearchText(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				name="name"
				id="name"
				value={query}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchInput;
