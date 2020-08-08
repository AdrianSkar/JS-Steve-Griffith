// Alternative to if statements; use when you have a long list of values to compare

let fetch = () => {
	let codes = [
		{ 'code': 200, 'text': 'Ok' },
		{ 'code': 201, 'text': 'Created' },
		{ 'code': 304, 'text': 'Not modified' },
		{ 'code': 400, 'text': 'Bad request' },
		{ 'code': 401, 'text': 'Unauthorized' },
		{ 'code': 403, 'text': 'Forbidden' },
		{ 'code': 404, 'text': 'File not found' },
		{ 'code': 405, 'text': 'Method not allowed' },
		{ 'code': 500, 'text': 'Internal server error' },
		{ 'code': 503, 'text': 'Service unavailable' },
		{ 'code': 600, 'text': 'Not a real code' }
	];
	let len = codes.length;
	let randNum = Math.floor(Math.random() * len);
	return codes[randNum];
};

let response = fetch();
console.log(response);

switch (response.code) {
	case 200:
	case 201:
		console.log('All is good', response.text);
		break;
	case 304:
		console.log('Redirect', response.text);
		break;
	case 400:
	case 401:
	case 403:
	case 404:
	case 405:
		console.log('Problem', response.text);
		break;
	case 500:
	case 503:
		console.log('Server error', response.text);
		break;
	default:
		console.log(response.code, response.text);
}
