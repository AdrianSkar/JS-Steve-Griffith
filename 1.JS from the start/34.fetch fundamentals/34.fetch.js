//basic fetch using jsonplaceholder for the data
// Remember that fetch returns a promise'
// http status codes: https://www.restapitutorial.com/httpstatuscodes.html
// Promises playlist https://www.youtube.com/watch?v=SmPouEFKOBg&list=PLyuRouwmQCjngZXVn48vYmPK_1yAF-fLw



// get the details for a random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random() * 20) + 1; //id 1 to 20
let uri = root + '/users/' + id;

console.log('Fetch: ', uri);
//any user id id higher than 10 will generate a 404 error

fetch(uri)
	.then(function (response) {
		if (response.status == 200) {
			return response.json();
		}
		else {
			throw new Error('Invalid user ID');
		}
	})
	.then((data) => {
		console.log(data);
		let jsonData = JSON.stringify(data);

		let output = document.getElementById('output');
		output.textContent = jsonData;
		console.log(jsonData);
	})
	.catch((err) => {
		console.log('Error: ', err.message);
	});


