import https from 'https';

https.get('https://slaas.fly.dev/', res => {
	let data = [];
	const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
	console.log('Status Code:', res.statusCode);
	console.log('Date in Response header:', headerDate);

	res.on('data', chunk => {
		data.push(chunk);
	});

	res.on('end', () => {
		// console.log('Response ended: ');
		const responseToString = JSON.parse(Buffer.concat(data).toString());

		// for(user of users) {
		// 	console.log(`Got user with id: ${user.id}, name: ${user.name}`);
		// }

		console.log('Strapline returned:', responseToString.strapline);
	});
}).on('error', err => {
	console.log('Error: ', err.message);
});
