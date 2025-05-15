import React, { createContext, useContext, useState } from 'react';

// create theme context
const ThemeContext = createContext();

// create a custom hook to use the theme context
export const useTheme = () => {
	return useContext(ThemeContext);
};

// create a theme provider component

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	// Toggle theme between light and dark
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
