import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};
		if (isOpen) {
			document.addEventListener('keydown', handleEsc);

			return () => {
				document.removeEventListener('keydown', handleEsc); // Cleanup listener
			};
		}
	}, [isOpen, onClose]);

	const handleOutsideClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className={`modal ${isOpen ? 'open' : ''}`}
			onClick={handleOutsideClick}
		>
			<div className="modal-content">
				<button className="close-btn" onClick={onClose}>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
