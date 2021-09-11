self.addEventListener('message', ev => {
	console.log('Web worker started with data: ', ev.data);

	// let data = ev.data;
	let data = ev.data.do;
	switch (data) {
		// case 'Get started':
		// 	self.postMessage('Web worker started.');
		// 	break;
		// case 'Other':
		// 	self.postMessage('Other task.');
		// 	break;
		case 'fetch':
			let url = 'http://jsonplaceholder.typicode.com/posts';
			console.log('About to do the fetch for the data.');

			fetch(url)
				.then(response => response.json())
				.then(data => {
					self.postMessage(JSON.stringify(data));
				})
				.catch(err => console.log(err));
			break;

		default:
			console.log('Invalid access');
			self.postMessage('Closing web worker');
			self.close();
			break;
	}
});