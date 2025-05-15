import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'INC':
			return { count: state.count + action.payload };
		case 'DEC':
			return { count: state.count - action.payload };
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<div>
			<h3>UseReducer example</h3>
			<h4>Count:{state.count}</h4>
			<button onClick={() => dispatch({ type: 'INC', payload: 5 })}>INC</button>
			<button onClick={() => dispatch({ type: 'DEC', payload: 5 })}>DEC</button>
		</div>
	);
};

export default App;
