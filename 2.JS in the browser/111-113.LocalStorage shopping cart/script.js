const CART = {
	KEY: "dafslgkjdsfg2345lkj325345m",
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
				{ id: 1, title: 'nope', qty: 3, itemPrice: 2.30 },
				{ id: 2, title: 'cool', qty: 2, itemPrice: 1.50 },
				{ id: 3, title: 'ok', qty: 1, itemPrice: 1 }
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
		if (match[0]) { return match[0]; }
	},

	// Add item to cart (+ check if done already):
	add(id) {
		if (CART.find(id)) { CART.increase(id, 1); }
		else {// Add new item
			let arr = PRODUCTS.filter(product => product.id === id);
			if (arr[0]) {
				let obj = {
					id: arr[0].id,
					title: arr[0].title,
					qty: 1,
					itemPrice: arr[0].price
				};
				CART.contents.push(obj);
				// Update localStorage:
				CART.sync();
			}
			else { // Product id does not exist in products data
				console.error('Invalid product');
			}
		}
	},

	// Increase or decrease cart item (id) by qty:
	increase(id, qty = 1) {
		CART.content = CART.contents.map(item => {
			if (item.id === id) item.qty += qty;
			return item;
		});
		CART.sync();
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

	// Remove item from cart
	remove(id) {
		CART.contents = CART.contents.filter(item => item.id !== id);
		CART.sync();
	},

	// Empty cart:
	empty() {
		CART.contents = [];
		CART.sync();
	},

	// Sort cart items by field:
	sort(field = 'title') {
		// Return sorted shallow copy of the CART.contents array:
		let sorted = CART.contents.sort((a, b) => {
			return (a[field] > b[field]) ? 1 :
				(a[field] < b[field]) ? -1 : 0;
		});
		// No impact on localStorage.
		return sorted;
	},

	// Logging:
	logContents(prefix) { console.log(prefix, CART.contents); }


	//____________________________________________________________________________





}