import { PageBreadcrumb } from '@/components'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
} from 'react-bootstrap'
import JustGage from 'justgage'
import { useEffect, useState } from 'react'
const AnimationEventGage = () => {
	const [randomNo, setRandomNo] = useState(45)
	const randomNumber = () => {
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min
		}
		const number = getRandomInt(0, 100)
		setRandomNo(number)
	}
	useEffect(() => {
		const animationEvent = new JustGage({
			id: 'Animation_Events',
			value: randomNo,
			min: 0,
			max: 100,
			symbol: '%',
			pointer: true,
			gaugeColor: ['rgba(42, 118, 244, .1)'],
			levelColors: ['#4c7cf5'],
			pointerOptions: {
				toplength: -15,
				bottomlength: 10,
				bottomwidth: 12,
				color: '#ff5da0',
				stroke: '#ffffff',
				stroke_width: 3,
				stroke_linecap: 'round',
			},
			gaugeWidthScale: 0.6,
			counter: true,
		})
		return () => {
			animationEvent.destroy()
		}
	}, [randomNo])
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Animation Events</CardTitle>
					</Col>
					<Col xs="auto">
						<button
							type="button"
							className="btn btn-outline-light btn-sm"
							onClick={randomNumber}
						>
							Random Refresh
						</button>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<div id="Animation_Events" className="gauge mt-3" />
				<p className="text-muted">
					After every animation end, function will log it below.
				</p>
				<p id="log" />
			</CardBody>
		</Card>
	)
}
const CounterGage = () => {
	const [randomNo, setRandomNo] = useState(72)
	const randomNumber = () => {
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min
		}
		const number = getRandomInt(0, 100)
		setRandomNo(number)
	}
	useEffect(() => {
		const gage = new JustGage({
			id: 'Counter_2',
			value: randomNo,
			min: 0,
			max: 100,
			donut: true,
			gaugeWidthScale: 0.6,
			counter: true,
			hideInnerShadow: true,
			gaugeColor: ['rgba(42, 118, 244, .1)'],
			levelColors: ['#4c7cf5'],
		})
		return () => {
			gage.destroy()
		}
	}, [randomNo])
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Counter</CardTitle>
					</Col>
					<Col xs="auto">
						<Button
							variant="outline-light"
							type="button"
							className="btn btn-outline-light btn-sm"
							onClick={() => randomNumber()}
						>
							Random Refresh
						</Button>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<div id="Counter_2" className="gauge mt-2" />
			</CardBody>
		</Card>
	)
}
const CustomCounter = () => {
	const [randomNo, setRandomNo] = useState(40960)
	const randomNumber = () => {
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min
		}
		const number = getRandomInt(1024, 1000000)
		setRandomNo(number)
	}
	useEffect(() => {
		const gage = new JustGage({
			id: 'Counter',
			value: randomNo,
			min: 1024,
			max: 1000000,
			gaugeWidthScale: 0.6,
			counter: true,
			formatNumber: true,
			gaugeColor: ['rgba(42, 118, 244, .1)'],
			levelColors: ['#4c7cf5'],
		})
		return () => {
			gage.destroy()
		}
	}, [randomNo])
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Custom Counter</CardTitle>
					</Col>
					<Col xs="auto">
						<button
							type="button"
							className="btn btn-outline-light btn-sm"
							onClick={randomNumber}
						>
							Random Refresh
						</button>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<div id="Counter" className="gauge mt-3" />
			</CardBody>
		</Card>
	)
}
const AnimationEvent = () => {
	const [randomNo, setRandomNo] = useState(50)
	const randomNumber = () => {
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min
		}
		const number = getRandomInt(0, 100)
		setRandomNo(number)
	}
	useEffect(() => {
		const gage = new JustGage({
			id: 'Custom_wether',
			value: randomNo,
			min: 0,
			max: 100,
			title: 'Target',
			label: 'temperature',
			pointer: true,
			gaugeColor: ['rgba(42, 118, 244, .1)'],
			levelColors: ['#4c7cf5'],
			textRenderer: function (val) {
				if (val < 50) {
					return 'Cold'
				} else if (val > 50) {
					return 'Hot'
				} else if (val === 50) {
					return 'OK'
				}
			},
		})
		return () => {
			gage.destroy()
		}
	}, [randomNo])
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Animation Events</CardTitle>
					</Col>
					<Col xs="auto">
						<Button
							variant="outline-light"
							size="sm"
							type="button"
							onClick={randomNumber}
						>
							Random Refresh
						</Button>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<div id="Custom_wether" className="gauge mt-3" />
			</CardBody>
		</Card>
	)
}
const FontOptions = () => {
	const [randomNo, setRandomNo] = useState(72)
	const randomNumber = () => {
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min
		}
		const number = getRandomInt(0, 100)
		setRandomNo(number)
	}
	useEffect(() => {
		const gage = new JustGage({
			id: 'font_option',
			title: 'Font Options',
			value: randomNo,
			min: 0,
			minTxt: 'min',
			max: 100,
			maxTxt: 'max',
			gaugeWidthScale: 0.6,
			counter: true,
			gaugeColor: ['rgba(42, 118, 244, .1)'],
			levelColors: ['#4c7cf5'],
			titleFontColor: 'red',
			titleFontFamily: 'Georgia',
			titlePosition: 'below',
			valueFontColor: 'blue',
			valueFontFamily: 'Georgia',
		})
		return () => {
			gage.destroy()
		}
	}, [randomNo])
	return (
		<Card>
			<CardHeader>
				<Row className="align-items-center">
					<Col>
						<CardTitle as="h4">Font Option</CardTitle>
					</Col>
					<Col xs="auto">
						<Button
							variant="outline-light"
							size="sm"
							type="button"
							id="font_option_refresh"
							onClick={randomNumber}
						>
							Random Refresh
						</Button>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<div id="font_option" className="gauge mt-3" />
			</CardBody>
		</Card>
	)
}
const JustGage2 = () => {
	const dflt = {
		min: 0,
		max: 200,
		donut: true,
		gaugeWidthScale: 0.6,
		counter: true,
		hideInnerShadow: true,
		gaugeColor: ['rgba(42, 118, 244, .1)'],
		levelColors: ['#4c7cf5'],
	}
	const defs1 = {
		label: 'label',
		value: 65,
		min: 0,
		max: 100,
		decimals: 0,
		gaugeWidthScale: 0.6,
		pointer: true,
		gaugeColor: ['rgba(42, 118, 244, .1)'],
		levelColors: ['#4c7cf5'],
		pointerOptions: {
			toplength: 10,
			bottomlength: 10,
			bottomwidth: 2,
		},
		counter: true,
	}
	const defs2 = {
		label: 'label',
		value: 35,
		min: 0,
		max: 100,
		decimals: 0,
		gaugeWidthScale: 0.6,
		pointer: true,
		gaugeColor: ['rgba(42, 118, 244, .1)'],
		levelColors: ['#4c7cf5'],
		pointerOptions: {
			toplength: 5,
			bottomlength: 15,
			bottomwidth: 2,
		},
		counter: true,
		donut: true,
	}
	useEffect(() => {
		const jg1 = new JustGage({
			id: 'gg1',
			value: 125,
			title: 'javascript call',
			defaults: dflt,
		})
		const jg2 = new JustGage({
			id: 'gg2',
			title: 'data-attributes',
			defaults: dflt,
		})
		const jg3 = new JustGage({
			id: 'jg1',
			defaults: defs1,
		})
		const jg4 = new JustGage({
			id: 'jg2',
			defaults: defs1,
		})
		const jg5 = new JustGage({
			id: 'jg3',
			defaults: defs1,
		})
		const jg6 = new JustGage({
			id: 'jg4',
			defaults: defs2,
		})
		const jg7 = new JustGage({
			id: 'jg5',
			defaults: defs2,
		})
		const jg8 = new JustGage({
			id: 'jg6',
			defaults: defs2,
		})
		return () => {
			jg1.destroy()
			jg2.destroy()
			jg3.destroy()
			jg4.destroy()
			jg5.destroy()
			jg6.destroy()
			jg7.destroy()
			jg8.destroy()
		}
	}, [])
	return (
		<>
			<PageBreadcrumb title="JustGage" subName="Charts" />
			<Row>
				<Col lg={6}>
					<Card>
						<CardHeader>
							<Row className="align-items-center">
								<Col>
									<CardTitle as="h4">Defaults</CardTitle>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<p className="text-muted mb-3" />
							<Row>
								<Col md={6}>
									<div id="gg1" className="gauge" />
								</Col>
								<Col md={6}>
									<div id="gg2" className="gauge" data-value={25} />
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<CounterGage />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<AnimationEventGage />
				</Col>
				<Col lg={6}>
					<CustomCounter />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<AnimationEvent />
				</Col>
				<Col lg={6}>
					<FontOptions />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<Card>
						<CardHeader>
							<Row className="align-items-center">
								<Col>
									<CardTitle as="h4">Justgage Half Size</CardTitle>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<Row className="mt-3">
								<Col md="4">
									<div className="size-3">
										<div id="jg1" className="gauge" />
									</div>
								</Col>
								<Col md="4">
									<div className="size-2">
										<div id="jg2" className="gauge" />
									</div>
								</Col>
								<Col md="4">
									<div className="size-1">
										<div id="jg3" className="gauge" />
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<CardHeader>
							<Row className="align-items-center">
								<Col>
									<CardTitle as="h4">Justgage Full Size</CardTitle>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<Row className="mt-3">
								<Col md="4">
									<div className="size-1">
										<div id="jg4" className="gauge" />
									</div>
								</Col>
								<Col md="4">
									<div className="size-2">
										<div id="jg5" className="gauge" />
									</div>
								</Col>
								<Col md="4">
									<div className="size-3">
										<div id="jg6" className="gauge" />
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}
export default JustGage2
