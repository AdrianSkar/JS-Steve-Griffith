const app = {
	baseURL: 'https://jsonplaceholder.typicode.com/',
	init: () => {
		document.addEventListener('DOMContentLoaded', app.load);
		console.log('HTML loaded.');
	},
	load: () => {
		app.showLoading();
		app.getData();
	},
	showLoading: () => {
		let ul = document.querySelector('.list'),
			li = document.createElement('li');
		li.textContent = 'Loading...';
		li.className = 'loading-list';
		ul.appendChild(li);
	},
	getData: () => {
		// Based on the current page:
		let page = document.body.id;
		switch (page) {
			case 'posts':
				app.getPosts();
				break;
			case 'users':
				app.getUsers();
				break;
			case 'account':
				// app.authorize();
				// app.getAcct();
				// other custom functions
				break;
			default:
				app.somethingElse();
		}
	},
	getPosts: () => {
		let url = app.baseURL + 'posts',
			req = new Request(url, {
				method: 'GET',
				mode: 'cors',
			});
		fetch(req)
			.then(resp => resp.json())
			// .then(app.showPosts)
			.then(app.showContent)
			.catch(app.err);
	},
	getUsers: () => {
		let url = app.baseURL + 'users',
			req = new Request(url, {
				method: 'GET',
				mode: 'cors',
			});
		fetch(req)
			.then(resp => resp.json())
			// .then(app.showUsers)
			.then(app.err)
			// .then(app.showContent)
			.catch(app.err);
	},
	somethingElse: () => {
		// Another function for a different page.
	},
	showContent: contents =>{
		// Remove the 'Loading...' li
		let ul = document.querySelector('.list');
		ul.innerHTML = '';
		// Create a list with content data:
		let df = new DocumentFragment();
		console.log(contents);
		contents.forEach(content =>{
			let li = document.createElement('li');
			// Patch to make it work with one function instead of two (showPosts, showUsers);
			// could be improved by identifying user/post on function call, however one of the 
			// purposes of this lesson was to encapsulate functionality.
			li.textContent = content.title ? content.title : content.name;
			li.setAttribute('data-id', content.id);
			df.appendChild(li);
		})
		ul.appendChild(df);
	},
	// showPosts: posts => {
	// 	// Remove the 'Loading...' li
	// 	let ul = document.querySelector('.list');
	// 	ul.innerHTML = '';
	// 	// Create a list with the post data:
	// 	let df = new DocumentFragment();
	// 	// let df = document.createDocumentFragment();
	// 	console.log(posts);
	// 	posts.forEach(post => {
	// 		let li = document.createElement('li');
	// 		li.textContent = post.title;
	// 		li.setAttribute('data-id', post.id);
	// 		df.appendChild(li);
	// 	});
	// 	ul.appendChild(df);
	// },
	// showUsers: users => {
	// 	// Remove the 'Loading...' li
	// 	let ul = document.querySelector('.list');
	// 	ul.innerHTML = '';
	// 	// Create a list with the post data:
	// 	let df = document.createDocumentFragment();
	// 	console.log(users);
	// 	users.forEach(user => {
	// 		let li = document.createElement('li');
	// 		li.textContent = user.name;
	// 		li.setAttribute('data-id', user.id);
	// 		df.appendChild(li);
	// 	});
	// 	ul.appendChild(df);
	// },
	err: err => {
		// Remove the 'Loading...' li
		let ul = document.querySelector('.list');
		ul.innerHTML = '';
		// Display the error to th user:
		let div = document.createElement('div');
		div.className = 'error msg';
		div.textContent = err.message+'test';
		document.body.appendChild(div);
		setTimeout(() => {
			let div = document.querySelector('.error.msg');
			// div.parentElement.removeChild(div);
			div.remove();
		}, 3000);
	},
};
app.init();
