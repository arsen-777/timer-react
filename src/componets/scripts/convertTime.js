function covertTime(time) {
	const days = Math.floor(time / 3600 / 24);
	const hours = Math.floor((time % (3600 * 24)) / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = Math.floor(time % 60);

	return {
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		days: days,
	};
}

export default covertTime;
