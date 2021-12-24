import React from "react";
import './style.scss';
import gameplay from '../../assets/images/Play-icon.png';


export class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { now: new Date() };
	}

	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState({ now: new Date() });
		}, this.props.intervalDelay);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		const { now } = this.state;
		const { toDate } = this.props;
		const delta = toDate - now;
		//console.log(toDate)
		let countDownTime = {
			years: Math.floor(delta / 1000 / 60 / 60 / 24 / 30 / 12),
			months: Math.floor((delta / 1000 / 60 / 60 / 24 / 30) % 12),
			days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30),
			hours: Math.floor((delta / 1000 / 60 / 60) % 24),
			minutes: Math.floor((delta / 1000 / 60) % 60),
			seconds: Math.floor((delta / 1000) % 60),
			milliseconds: delta,
			asDays: Math.floor(delta / 1000 / 60 / 60 / 24)
		};
		console.log(`${countDownTime.hours}${countDownTime.minutes}${countDownTime.seconds}`);

		return (
			<>
			{countDownTime.hours  <= 0 && countDownTime.minutes  <= 0 && countDownTime.seconds  <= 0 ?
					<div className="play_game">
						<span>
							<img src={gameplay}/>
							Play Game
						</span>
					</div>
				:
				<time
					className="CountdownDisplay"
					datetime={`P${countDownTime.asDays}DT${countDownTime.hours}H${countDownTime.minutes}M${countDownTime.seconds}S`}
				>
					{/* <span className="CountdownDisplay__years">
						{String(countDownTime.years).padStart(2, 0)} years
					</span>
					<span className="CountdownDisplay__months">
						{String(countDownTime.months).padStart(2, 0)} months
					</span> */}
					<div className="CountdownDisplay__days">
						<span className="black-circle">{String(countDownTime.days).padStart(2, 0)}</span>
						<span className="label">days</span>
					</div>
					<div className="CountdownDisplay__hours">
						<span className="black-circle">{String(countDownTime.hours).padStart(2, 0)}</span>
						<span className="label">hours</span>
					</div>
					<div className="CountdownDisplay__minutes">
						<span className="black-circle">{String(countDownTime.minutes).padStart(2, 0)}</span>
						<span className="label">minutes</span>
					</div>
					<div className="CountdownDisplay__seconds">
						<span className="black-circle">{String(countDownTime.seconds).padStart(2, 0)}</span>
						<span className="label">seconds</span>
					</div>
				</time>
				}
			</>

		)

	}
}

