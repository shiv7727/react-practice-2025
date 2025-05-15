import React from 'react';
import { useTheme } from './ThemeContext';
import './App.css';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	console.log('theme', theme);

	const appStyle = {
		background: theme === 'light' ? '$fff' : '#333',
		color: theme === 'light' ? '#000' : '#fff',
		height: '100vh',
	};
	return (
		<div style={appStyle}>
			<h3>context toggle theme</h3>
			<button onClick={toggleTheme}>ToggleTheme</button>
		</div>
	);
};

export default App;
