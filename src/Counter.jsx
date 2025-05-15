import React from 'react';
import HOC_counter from './HOC_counter';

const Counter = (props) => {
	const { count, setCount } = props;
	return (
		<div>
			<h3>{count}</h3>
			<button onClick={() => setCount(count + 1)}>INC</button>
		</div>
	);
};

export default HOC_counter(Counter);
