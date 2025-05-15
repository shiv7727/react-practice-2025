import React from 'react';
import './App.css';
import ControlledInput from './ControlledInput';
import UncontrolledInput from './UncontrolledInput';
const App = () => {
	return (
		<div>
			<ControlledInput />
			<UncontrolledInput />
		</div>
	);
};

export default App;
