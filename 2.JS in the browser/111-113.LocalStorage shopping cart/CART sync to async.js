import fetch from 'node-fetch';

// let CART = {
// 	contents: [
// 		{ id: 123, title: 'Nope', qty: 3, itemPrice: 2.3 },
// 		{ id: 456, title: 'Cool', qty: 2, itemPrice: 1.5 },
// 		{ id: 987, title: 'Ok', qty: 1, itemPrice: 1 },
// 	],
// };
/// sync function
// function find(id) {
// 	let match = CART.contents.filter(item => item.id === id);
// 	return match[0].title;
// }

//* Find title in CART asynchronously

/// fetch
// function find(id) {
// 	let url = `http://127.0.0.1:5501/2.JS%20in%20the%20browser/111-113.LocalStorage%20shopping%20cart/products.json`,
// 		match;
// 	return fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			match = data.filter(user => user.id === id)[0];
// 			return match.title;
// 		});
// }

/// async/await
// async function find(id) {
// 	let origin = await fetch(
// 			'http://127.0.0.1:5501/2.JS%20in%20the%20browser/111-113.LocalStorage%20shopping%20cart/products.json'
// 		),
// 		response = await origin,
// 		data = await response.json(),
// 		match = data.filter(user => user.id === id)[0];
// 	return match.title;
// }

/// Promise
function find(id) {
	let origin = new Promise((resolve, reject) => {
		fetch(
			'http://127.0.0.1:5501/2.JS%20in%20the%20browser/111-113.LocalStorage%20shopping%20cart/products.json'
		)
			.then(response => response.json())
			.then(data => data.filter(user => user.id === id)[0])
			.then(user => resolve(user.title))
			.catch(err => reject(err));
	});
	return origin;
}

find(123); // 5
console.log(find(123));
