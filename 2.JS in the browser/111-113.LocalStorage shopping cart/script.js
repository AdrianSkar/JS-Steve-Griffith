const CART = {
	KEY: 'dafslgkjdsfg2345lkj325345m',
	contents: [],

	// Initialize cart contents by getting localStorage or setting new data:
	init() {
		// ES6 short notation for `function: init()`
		let _contents = localStorage.getItem(CART.KEY);
		if (_contents) {
			CART.contents = JSON.parse(_contents);
		} else {
			// Dummy data; on production you'd use an empty array
			CART.contents = [
				{ id: 123, title: 'Nope', qty: 3, itemPrice: 2.3 },
				{ id: 456, title: 'Cool', qty: 2, itemPrice: 1.5 },
				{ id: 987, title: 'Ok', qty: 1, itemPrice: 1 },
			];
			CART.sync();
		}
	},

	// Sync data with localStorage:
	async sync() {
		let _cart = JSON.stringify(CART.contents);
		await localStorage.setItem(CART.KEY, _cart);
	},

	// Find item by id:
	find(id) {
		let match = CART.contents.filter(item => item.id === id);
		if (match[0]) {
			return match[0];
		}
	},

	// Add item to cart (+ check if done already):
	add(id) {
		if (CART.find(id)) {
			CART.increase(id, 1);
		} else {
			// Add new item
			let arr = PRODUCTS.filter(product => product.id === id);
			if (arr[0]) {
				console.log(arr[0]);
				// Needed only if you don't want other data being passed (such as desc.):
				let obj = {
					id: arr[0].id,
					title: arr[0].title,
					qty: 1,
					itemPrice: arr[0].price,
				};
				CART.contents.push(obj);
				// Update localStorage:
				CART.sync();
			} else {
				// Product id does not exist in products data
				console.error('Invalid product');
			}
		}
	},

	// Increase or decrease cart item (id) by qty:
	async increase(id, qty = 1) {
		CART.content = CART.contents.map(item => {
			if (item.id === id) item.qty += qty;
			return item;
		});
		await CART.sync();
	},
	decrease(id, qty = 1) {
		CART.content = CART.contents.map(item => {
			if (item.id === id) item.qty -= qty;
			return item;
		});
		// Check if there are no `id` items left and remove them from cart if so:
		CART.contents.forEach(async item => {
			if (item.id === id && item.qty < 1) {
				await CART.remove(id);
			}
		});
		CART.sync();
	},

	// Remove item from cart:
	async remove(id) {
		CART.contents = CART.contents.filter(item => item.id !== id);
		await CART.sync();
	},

	// Empty cart:
	empty() {
		CART.contents = [];
		CART.sync();
	},

	// Sort cart items by field (default = 'title'):
	sort(field = 'title') {
		// Return sorted shallow copy of the CART.contents array:
		let sorted = CART.contents.sort((a, b) => {
			return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
		});
		// No impact on localStorage.
		return sorted;
	},

	// Logging:
	logContents(prefix) {
		console.log(prefix, CART.contents);
	},
};
//____________________________________________________________________________

let PRODUCTS = [];

document.addEventListener('DOMContentLoaded', () => {
	getProducts(showProducts, errorMessage);
	// Get the cart items from localStorage:
	CART.init();
	// Load cart items:
	showCart();
});

function showCart() {
	let cartSection = document.getElementById('cart');
	cartSection.innerHTML = '';
	let s = CART.sort('title'),
		totalAmt = 0;
	// Build cart:
	s.forEach(item => {
		// Container:
		let cartItem = document.createElement('div');
		cartItem.className = 'cart-item';

		// Desc container:
		let cartDesc = document.createElement('div');
		cartDesc.className = 'cart-desc';
		// Desc content:
		let sTitle = document.createElement('span');
		sTitle.textContent = item.title;
		let sPrice = document.createElement('span');
		sPrice.className = 'price';
		sPrice.textContent = new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(item.qty * item.itemPrice);
		cartDesc.append(sTitle, sPrice);

		// Controls container:
		let controls = document.createElement('div');
		controls.className = 'controls';
		// Controls content:
		let buttonMinus = document.createElement('button');
		buttonMinus.textContent = '-';
		buttonMinus.setAttribute('data-id', item.id);
		buttonMinus.addEventListener('click', decrementCart);
		let buttonPlus = document.createElement('button');
		buttonPlus.textContent = '+';
		buttonPlus.setAttribute('data-id', item.id);
		buttonPlus.addEventListener('click', incrementCart);
		let itemQty = document.createElement('span');
		itemQty.className = 'qty';
		itemQty.textContent = item.qty;
		let buttonRemove = document.createElement('button');
		// buttonRemove.textContent = '🗑';
		// buttonRemove.innerHTML = '&#128465;';
		// buttonRemove.innerHTML = '&#x1F5D1';
		buttonRemove.textContent = '\u{1F5D1}';
		// buttonRemove.setAttribute('data-id', item.id); //! Not needed
		buttonRemove.addEventListener('click', () => {
			CART.decrease(item.id, item.qty);
			showCart();
		});

		// Total amount:
		totalAmt += item.qty * item.itemPrice;

		// Add elements to containers, then to section:
		cartItem.append(cartDesc, controls);
		controls.append(buttonMinus, itemQty, buttonPlus, buttonRemove);
		cartSection.append(cartItem);
	});
	// Total:
	let total = document.createElement('p');
	total.className = 'total';
	totalAmt = new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR',
	}).format(totalAmt);
	total.textContent = `Total: ${totalAmt}`;
	cartSection.appendChild(total);
}

function incrementCart(ev) {
	ev.preventDefault();
	let id = parseInt(ev.target.getAttribute('data-id'));
	CART.increase(id, 1);
	let controls = ev.target.parentElement,
		qty = controls.querySelector('.qty'),
		item = CART.find(id);
	if (item) {
		showCart();
	} else {
		// This should not happen;
		console.log('error; no item found in incrementCart(ev)');
		document.getElementById('cart').removeChild(controls.parentElement);
	}
}

function decrementCart(ev) {
	ev.preventDefault();
	let id = parseInt(ev.target.getAttribute('data-id'));
	CART.decrease(id, 1);
	let controls = ev.target.parentElement,
		qty = controls.querySelector('.qty'),
		item = CART.find(id);
	if (item) {
		showCart();
	} else {
		// It was the last item, remove from cart:
		document.getElementById('cart').removeChild(controls.parentElement);
	}
}

function getProducts(success, failure) {
	// Get product list from "server"
	const URL = './products.json';
	fetch(URL, {
		method: 'GET',
		mode: 'cors',
	})
		.then(response => response.json())
		// .then(data => showProducts(data))
		.then(showProducts)
		.catch(err => errorMessage(err));
}

function showProducts(products) {
	PRODUCTS = products;

	let imgPath = './images/svg/',
		productSection = document.getElementById('products');
	productSection.innerHTML = '';
	products.forEach(product => {
		// Container:
		let card = document.createElement('card');
		card.className = 'card';
		// Img:
		let img = document.createElement('img');
		img.alt = product.title;
		img.src = imgPath + product.img;
		// Title:
		let title = document.createElement('h2');
		title.textContent = product.title;
		// Desc:
		let desc = document.createElement('p');
		desc.textContent = product.desc;

		// Product actions container:
		let prodAction = document.createElement('div');
		prodAction.className = 'prod_action';
		// Product price:
		let price = document.createElement('span');
		price.className = 'price';
		price.textContent = new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(product.price);
		// Add item button:
		let addButton = document.createElement('button');
		addButton.className = 'btn';
		addButton.textContent = 'Add item';
		addButton.setAttribute('data-id', product.id);
		addButton.addEventListener('click', addItem);

		prodAction.append(price, addButton);
		card.append(img, title, desc, prodAction);
		productSection.appendChild(card);
	});
}

function addItem(ev) {
	ev.preventDefault();
	let id = parseInt(ev.target.getAttribute('data-id'));
	console.log(`Add item ${id} to cart.`);
	CART.add(id, 1);
	showCart();
}

function errorMessage(err) {
	console.error('Error:', err);
}
