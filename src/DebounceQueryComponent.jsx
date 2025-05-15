import React, { useState, useEffect } from 'react';

const DebounceQueryComponent = () => {
	const [query, setQuery] = useState('');
	const [debounceQuery, setDebounceQuery] = useState('');

	// now setDebounce qyery state with 500 ms delayed

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceQuery(query);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [query]);

	const fetchSearchResult = (query) => {
		console.log('Searching for:', query);
	};
	useEffect(() => {
		if (debounceQuery) {
			fetchSearchResult(debounceQuery);
		}
	}, [debounceQuery]);

	return (
		<div>
			<div>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search..."
				/>
			</div>
		</div>
	);
};

export default DebounceQueryComponent;
