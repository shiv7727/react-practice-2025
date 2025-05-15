import React, { useState, useEffect, useRef } from 'react';
import './App.css';
const App = () => {
	const id = useRef(null);
	const [time, setTime] = useState({
		h: 0,
		m: 0,
		s: 0,
	});

	const handleTime = () => {
		id.current = setInterval(() => {
			setTime((time) => {
				if (time.s === 60) {
					return { ...time, s: 0, m: time.m + 1 };
				}
				if (time.m === 60) {
					return { ...time, s: 0, m: 0, h: time.h + 1 };
				}
				return { ...time, s: time.s + 1 };
			});
		}, 1000);
	};

	useEffect(() => {
		return () => clearInterval(id.current);
	}, []);

	return (
		<div>
			<h2>stopWatch</h2>
			<h3>
				{time.s}:{time.m}:{time.h}
			</h3>
			<hr />
			<button onClick={handleTime}>Start</button>
			<button
				onClick={() => {
					clearInterval(id.current);
				}}
			>
				Pause
			</button>
			<button
				onClick={() => {
					clearInterval(0);
					setTime({
						h: 0,
						m: 0,
						s: 0,
					});
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default App;
