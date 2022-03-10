import "./App.css";
import { useState, useEffect } from "react";
import convertTime from "./componets/scripts/convertTime";

function App() {
	// const [hours,setHours] = useState(0)
	// const [minutes,setMinutes] = useState(0)
	// const [seconds,setSeconds] = useState(0)

	const [time, setTime] = useState(0);
	const timeStamp = convertTime(time);
	const [isStarted, setIsStarted] = useState(false);
	const [timeoutId, setTimeoutId] = useState(0);
	const [inpValue, setInpValue] = useState("");
	const [animClass, setAnimClass] = useState("");

	useEffect(() => {
		if (time === 0) clearInterval(timeoutId);
	}, [time, timeoutId]);

	const setTimer = () => {
		if (inpValue === undefined) {
			clearInterval(timeoutId);
		}
		setInpValue("");
		setAnimClass("span-blink");
		if (!isStarted) {
			setIsStarted(true);
			const id = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);

			setTimeoutId(id);
		}
	};

	const inputChangeHandler = (evt) => {
		if (isNaN(evt.target.value)) {
			console.log(evt.target.value);
			alert("Please enter a number");
		} else {
			setTime(+evt.target.value);
			setInpValue(evt.target.value);
		}
	};

	const stopTimer = () => {
		setIsStarted(false);
		clearInterval(timeoutId);
		setAnimClass("");
	};
	const resetTimer = () => {
		setTime(0);
		setAnimClass("");
	};

	return (
		<div className="bg-block">
			<div className="times-block">
				<div className="times">
					<p>{timeStamp.days >= 10 ? timeStamp.days : "0" + timeStamp.days}</p>
					<p>
						<small>days</small>
					</p>
				</div>

				<span className={animClass}>:</span>

				<div className="times">
					<p>
						{timeStamp.hours >= 10 ? timeStamp.hours : "0" + timeStamp.hours}
					</p>
					<p>
						<small>hours</small>
					</p>
				</div>

				<span className={animClass}>:</span>
				<div className="times">
					<p>
						{timeStamp.minutes >= 10
							? timeStamp.minutes
							: "0" + timeStamp.minutes}
					</p>
					<p>
						<small>minutes</small>
					</p>
				</div>
				<span className={animClass}>:</span>

				<div className="times">
					<p>
						{timeStamp.seconds >= 10
							? timeStamp.seconds
							: "0" + timeStamp.seconds}
					</p>
					<p>
						<small>seconds</small>
					</p>
				</div>
			</div>
			<div className="inp-block">
				<form className="form-block" onChange={inputChangeHandler}>
					<input className="inp" value={inpValue} placeholder="write time" />
				</form>
			</div>

			<div className="btn-block">
				<button className="btn" onClick={setTimer}>
					start
				</button>
				<button className="btn " onClick={stopTimer}>
					stop
				</button>
				<button className="btn" onClick={resetTimer}>
					reset
				</button>
			</div>
		</div>
	);
}

export default App;
