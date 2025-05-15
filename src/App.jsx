import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div>
			<h1>React Modal Example</h1>
			<button onClick={openModal}>Open Modal</button>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<h2>Modal open</h2>
			</Modal>
		</div>
	);
};
export default App;
