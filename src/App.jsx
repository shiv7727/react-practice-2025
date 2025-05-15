import React from 'react';
import './App.css';
import DebounceQueryComponent from './DebounceQueryComponent';
import DebouncedSearchUsingHook from './DebouncedSearchUsingHook';
const App = () => {
	return (
		<div>
			<h3>Debounce search query within a component </h3>
			{/* debounce within a component  */}
			<DebounceQueryComponent />
			<h3>useDebounce hook </h3>
			{/* using debounce custom Hook */}
			<DebouncedSearchUsingHook />
		</div>
	);
};

export default App;
