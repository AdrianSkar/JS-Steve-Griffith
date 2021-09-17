'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) {
		resolve(value);
	} else {
		Promise.resolve(value).then(_next, _throw);
	}
}

function _asyncToGenerator(fn) {
	return function () {
		var self = this,
			args = arguments;
		return new Promise(function (resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
			}
			_next(undefined);
		});
	};
}

var CART = {
	KEY: 'dafslgkjdsfg2345lkj325345m',
	contents: [],
	// Initialize cart contents by getting localStorage or setting new data:
	init: function init() {
		// ES6 short notation for `function: init()`
		var _contents = localStorage.getItem(CART.KEY);

		if (_contents) {
			CART.contents = JSON.parse(_contents);
		} else {
			// Dummy data; on production you'd use an empty array
			CART.contents = [
				{
					id: 123,
					title: 'Nope',
					qty: 3,
					itemPrice: 2.3,
				},
				{
					id: 456,
					title: 'Cool',
					qty: 2,
					itemPrice: 1.5,
				},
				{
					id: 987,
					title: 'Ok',
					qty: 1,
					itemPrice: 1,
				},
			];
			CART.sync();
		}
	},
	// Sync data with localStorage:
	sync: function sync() {
		return _asyncToGenerator(
			/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
				var _cart;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch ((_context.prev = _context.next)) {
							case 0:
								_cart = JSON.stringify(CART.contents);
								_context.next = 3;
								return localStorage.setItem(CART.KEY, _cart);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee);
			})
		)();
	},
	// Find item by id:
	find: function find(id) {
		var match = CART.contents.filter(function (item) {
			return item.id === id;
		});

		if (match[0]) {
			return match[0];
		}
	},
	// Add item to cart (+ check if done already):
	add: function add(id) {
		if (CART.find(id)) {
			CART.increase(id, 1);
		} else {
			// Add new item
			var arr = PRODUCTS.filter(function (product) {
				return product.id === id;
			});

			if (arr[0]) {
				var obj = {
					id: arr[0].id,
					title: arr[0].title,
					qty: 1,
					itemPrice: arr[0].price,
				};
				CART.contents.push(obj); // Update localStorage:

				CART.sync();
			} else {
				// Product id does not exist in products data
				console.error('Invalid product');
			}
		}
	},
	// Increase or decrease cart item (id) by qty:
	increase: function increase(id) {
		var qty =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
		CART.content = CART.contents.map(function (item) {
			if (item.id === id) item.qty += qty;
			return item;
		});
		CART.sync();
	},
	decrease: function decrease(id) {
		var qty =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
		CART.content = CART.contents.map(function (item) {
			if (item.id === id) item.qty -= qty;
			return item;
		}); // Check if there are no `id` items left and remove them from cart if so:

		CART.contents.forEach(
			/*#__PURE__*/ (function () {
				var _ref = _asyncToGenerator(
					/*#__PURE__*/ regeneratorRuntime.mark(function _callee2(item) {
						return regeneratorRuntime.wrap(function _callee2$(_context2) {
							while (1) {
								switch ((_context2.prev = _context2.next)) {
									case 0:
										if (!(item.id === id && item.qty < 1)) {
											_context2.next = 3;
											break;
										}

										_context2.next = 3;
										return CART.remove(id);

									case 3:
									case 'end':
										return _context2.stop();
								}
							}
						}, _callee2);
					})
				);

				return function (_x) {
					return _ref.apply(this, arguments);
				};
			})()
		);
		CART.sync();
	},
	// Remove item from cart
	remove: function remove(id) {
		CART.contents = CART.contents.filter(function (item) {
			return item.id !== id;
		});
		CART.sync();
	},
	// Empty cart:
	empty: function empty() {
		CART.contents = [];
		CART.sync();
	},
	// Sort cart items by field:
	sort: function sort() {
		var field =
			arguments.length > 0 && arguments[0] !== undefined
				? arguments[0]
				: 'title';
		// Return sorted shallow copy of the CART.contents array:
		var sorted = CART.contents.sort(function (a, b) {
			return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
		}); // No impact on localStorage.

		return sorted;
	},
	// Logging:
	logContents: function logContents(prefix) {
		console.log(prefix, CART.contents);
	},
}; //____________________________________________________________________________

var PRODUCTS = [];
document.addEventListener('DOMContentLoaded', function () {
	getProducts(showProducts, errorMessage); // Get the cart items from localStorage:

	CART.init(); // Load cart items:

	showCart();
});

function showCart() {
	var cartSection = document.getElementById('cart');
	cartSection.innerHTML = '';
	var s = CART.sort('title'); // Build cart:

	s.forEach(function (item) {
		// Container:
		var cartItem = document.createElement('div');
		cartItem.className = 'cart-item'; // Desc container:

		var cartDesc = document.createElement('div');
		cartDesc.className = 'cart-desc'; // Desc content:

		var sTitle = document.createElement('span');
		sTitle.textContent = item.title;
		var sPrice = document.createElement('span');
		sPrice.className = 'price';
		sPrice.textContent = new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(item.qty * item.itemPrice);
		cartDesc.append(sTitle, sPrice); // Controls container:

		var controls = document.createElement('div');
		controls.className = 'controls'; // Controls content:

		var buttonMinus = document.createElement('button');
		buttonMinus.textContent = '-';
		buttonMinus.setAttribute('data-id', item.id);
		buttonMinus.addEventListener('click', decrementCart);
		var buttonPlus = document.createElement('button');
		buttonPlus.textContent = '+';
		buttonPlus.setAttribute('data-id', item.id);
		buttonPlus.addEventListener('click', incrementCart);
		var itemQty = document.createElement('span');
		itemQty.className = 'qty';
		itemQty.textContent = item.qty; // Add elements to containers, then to section:

		cartItem.append(cartDesc, controls);
		controls.append(buttonMinus, itemQty, buttonPlus);
		cartSection.append(cartItem);
	});
}

function incrementCart(ev) {
	ev.preventDefault();
	var id = parseInt(ev.target.getAttribute('data-id'));
	CART.increase(id, 1);
	var controls = ev.target.parentElement,
		qty = controls.querySelector('.qty'),
		item = CART.find(id);

	if (item) {
		qty.textContent = item.qty;
	} else {
		// This should not happen;
		console.log('error; no item found in incrementCart(ev)');
		document.getElementById('cart').removeChild(controls.parentElement);
	}
}

function decrementCart(ev) {
	ev.preventDefault();
	var id = parseInt(ev.target.getAttribute('data-id'));
	CART.decrease(id, 1);
	var controls = ev.target.parentElement,
		qty = controls.querySelector('.qty'),
		item = CART.find(id);

	if (item) {
		qty.textContent = item.qty;
	} else {
		// This should not happen;
		console.log('error; no item found in decrementCart(ev)');
		document.getElementById('cart').removeChild(controls.parentElement);
	}
}

function getProducts(success, failure) {
	// Get product list from "server"
	var URL = './products.json';
	fetch(URL, {
		method: 'GET',
		mode: 'cors',
	})
		.then(function (response) {
			return response.json();
		}) // .then(showProducts)
		.then(function (data) {
			return showProducts(data);
		})
		['catch'](function (err) {
			return errorMessage(err);
		});
}

function showProducts(products) {
	PRODUCTS = products;
	var imgPath = './images/svg/',
		productSection = document.getElementById('products');
	productSection.innerHTML = '';
	products.forEach(function (product) {
		// Container:
		var card = document.createElement('card');
		card.className = 'card'; // Img:

		var img = document.createElement('img');
		img.alt = product.title;
		img.src = imgPath + product.img; // Title:

		var title = document.createElement('h2');
		title.textContent = product.title; // Desc:

		var desc = document.createElement('p');
		desc.textContent = product.desc; // Product actions container:

		var prodAction = document.createElement('div');
		prodAction.className = 'prod_action'; // Product price:

		var price = document.createElement('span');
		price.className = 'price';
		price.textContent = new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
		}).format(product.price); // Add item button:

		var addButton = document.createElement('button');
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
	var id = parseInt(ev.target.getAttribute('data-id'));
	console.log('Add item '.concat(id, ' to cart.'));
	CART.add(id, 1);
	showCart();
}

function errorMessage(err) {
	console.error('Error:', err);
}
