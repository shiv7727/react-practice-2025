import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [activeTab, setActiveTab] = useState('tab1');

	const tabs = [
		{ id: 'tab1', label: 'Tab 1', content: 'This is Tab 1 content.' },
		{ id: 'tab2', label: 'Tab 2', content: 'This is Tab 2 content.' },
		{ id: 'tab3', label: 'Tab 3', content: 'This is Tab 3 content.' },
	];

	return (
		<div>
			{/* tabs */}
			{tabs.map((tab) => (
				<button key={tab.id} onClick={() => setActiveTab(tab.id)}>
					{tab.label}
				</button>
			))}

			{/* active tabs content */}

			{tabs.map(
				(tab) =>
					activeTab === tab.id && (
						<div key={tab.id}>
							<p>{tab.content}</p>
						</div>
					),
			)}
		</div>
	);
};

export default App;
