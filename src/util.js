export function debounce(func, delay) {
	let timeoutId;

	return function (...args) {
		clearTimeout(timeoutId);

		// set new timeout
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
}
