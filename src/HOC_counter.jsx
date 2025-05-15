import React, { useState } from 'react';

const HOC_counter = () => {
	const Counter = () => {
		const [count, setCount] = useState(0);
		return <WrappedComponent count={count} setCount={setCount} />;
	};
	return Counter;
};

export default HOC_counter;
