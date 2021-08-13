let uri = 'http://jsonplaceholder.typicode.com/users/7';
/* None of these examples do proper error handling of nasty https status codes
or invalid data types - text, xml, json, etc */

/// Old version of AJAX
var xhr = new XMLHttpRequest();
// xhr.open(method, requestURL, synchronousFlag);
xhr.open('GET', uri, true);

xhr.addEventListener('load', function (response) {
	// Handle the response from the server
	/// This will produce an undefined `data` value
	// var data = response.responseText; // or responseXML
	// var json = JSON.parse(data); // JSON object
	// console.log(response);
	// console.log('XMLHttpRequest', data);

	/// MDN example and use of `xhr` instead of `response` works as expected
	console.log('%cxhr:', 'font-size: 1.5rem; color:white;', xhr);
	if (xhr.readyState === xhr.DONE) {
		if (xhr.status === 200) {
			// console.log(xhr.response);
			// console.log(xhr.responseText);

			var data = xhr.responseText; // or responseXML
			console.log('%cXMLHttpRequest.responseText', 'font-size: 1.5rem; color:white;', data);
			var json = JSON.parse(data); // JSON object
			console.log('%cJSON.parse(data)', 'font-size: 1.5rem; color:white;', json);
			// console.log('XMLHttpRequest', data);
		}
	}
});
xhr.addEventListener('error', function (err) {
	// Error handling network request
});

/* XMLHttpRequest.send()
Initiates the request. The body argument provides the request body, if any, 
and is ignored if the request method is GET or HEAD.
*/
xhr.send(null);


//______________________________________________________________________________

/// New version of AJAX
fetch(uri)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log('%c fetch data:', 'font-size: 1.5rem; color:white;', data);
	})
	.catch(function (err) {
		// Error handling network request
	});