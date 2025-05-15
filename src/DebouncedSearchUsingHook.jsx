import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const DebouncedSearchUsingHook = () => {
	const [query, setQuery] = useState('');
	const debouncedSearch = useDebounce(query, 1000);

	const fetchSearchResults = (query) => {
		console.log('Searching for:', query);
		// Your API call logic here
	};

	useEffect(() => {
		if (debouncedSearch) {
			fetchSearchResults(debouncedSearch);
		}
	}, [debouncedSearch]);

	return (
		<div>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search..."
			/>
		</div>
	);
};

export default DebouncedSearchUsingHook;
