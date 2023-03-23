import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const env = process.env.NODE_ENV || 'development';

const getRandomStrap = (month) => {
	const straps = [];

	straps.push('I play guitar, you know');
	straps.push('Now in colours!');
	straps.push('display: bloke;');
	straps.push('It’s good for you');
	straps.push('HACKA LÖKEN!');
	straps.push('Always running');
	straps.push('Web stuff since 1997');
	straps.push('Disinformation superlayby');
	straps.push('At the forefront of the retreat');
	straps.push('More harmonies');
	straps.push('Do you have any grey poupon?');
	straps.push('He’s beginning to believe');
	straps.push('It’s not the years, it’s the mileage');
	straps.push('Be excellent to each other');
	straps.push('Alsø wik');
	straps.push('Alsø alsø wik');
	straps.push('I know where Bruce Lee lives');
	straps.push('It’s all relative');
	straps.push('JEM777LNG #407');
	straps.push('Never put a sock in a toaster');
	straps.push('Never put jam on a magnet');
	straps.push('Thou shalt not question Stephen Fry');
	straps.push('Cough drop and roll');

	if (month === 2) { // it's march
		straps.push('R Tape loading error, 0:1');
	}

	if (month === 5) { // it's june
		straps.push('HAPPY PRIDE');
		straps.push('He/Him for now at least');
	}

	const rStrap = straps[Math.floor(Math.random() * straps.length)];
	return rStrap;
};

app.get('/', (req, res) => {
	const now = new Date();
	const response = {
		'strapline': getRandomStrap(now.getMonth()),
	};
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	res.send(JSON.stringify(response));
});

app.listen(port, () => console.log(`SLaaS listening on port ${port}!`));
