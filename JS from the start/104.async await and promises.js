
doThings();

async function doThings() {
	let p = await delay(1000);

	if (p) {
		console.log('response from promise:', p);
	} else {
		console.log('No result; the promise must have rejected');
	}
}

function delay(ms) {
	//fetch() is just a Promise too
	return new Promise((resolve, reject) => {
		// resolve(ms);
		// reject(new Error('bad things happened'));
		setTimeout(resolve, ms, 42);
		// setTimeout(reject, ms, new Error('bad things happened'));
	}).catch(err => console.log('error:', err.message));
}