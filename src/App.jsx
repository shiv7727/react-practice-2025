import React from 'react';
import { useTheme } from './ThemeContext';
import './App.css'; // Assuming you have some CSS file to define styles

const App = () => {
	const { theme, toggleTheme } = useTheme();

	// Define styles based on theme
	const appStyles = {
		backgroundColor: theme === 'light' ? '#fff' : '#333',
		color: theme === 'light' ? '#000' : '#fff',
		height: '100vh',
		transition: 'all 0.3s ease',
	};

	return (
		<div style={appStyles}>
			<h1>Theme Context Example</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default App;
