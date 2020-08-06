// Inheritance vs composition

/* Inheritance

Character > Human > Sam
Character > Robot > x73
Character > Cyborg > Dolph?
*/

const Character = {
	talk: function (...msg) {
		console.log(msg.join(' '));
	}
};

const Human = Object.create(Character, {
	speed: { value: 3 },
	name: { value: 'Hector' }
});
Human.walk = function () {
	this.talk(this.name, "walking");
};
Human.eat = function () {
	this.talk(this.name, 'eating');
};


const Robot = Object.create(Character, {
	speed: { value: 8 },
	id: { value: 'xr7' }
});
Robot.drive = function () {
	this.talk(this.id, '\u26A1', 'driving');
};
Robot.wifi = function () {
	this.talk(this.id, '\u26A1', 'connecting');
};

const sam = Object.create(Human, {
	name: { value: 'Samuel' }
});
sam.walk();
sam.talk("Hello from Samuel.");

const x73 = Object.create(Robot, {
	id: { value: 'x73' }
});
x73.drive();
x73.wifi();

///////////////////////////////////////////

// Composition

const talker = (state) => ({
	talk: (...msg) => console.log(msg.join(' '))
});


const walker = (state) => ({
	walk: () => {
		let nm = state.name || state.id;
		console.log(nm, 'walking');
	}
});


const eater = (state) => ({
	eat: () => {
		let nm = state.name || state.id;
		console.log(nm, 'eating');
	}
});

const driver = (state) => ({
	drive: () => {
		let nm = state.name || state.id;
		console.log(nm, 'driving');
	}
});

const wifier = (state) => ({
	wifi: () => {
		let nm = state.name || state.id;
		console.log(nm, 'connecting');
	}
});

const Person = (name, speed = 3) => {
	let state = {
		name,
		speed
	};
	return Object.assign({},
		talker(state),
		walker(state),
		eater(state)
	);
};

let Bob = Person('Bob');
Bob.talk('Hello from Bob');
Bob.eat();
Bob.walk();

const Android = (id, speed = 6) => {
	let state = {
		id,
		speed
	};
	return Object.assign({},
		talker(state),
		driver(state),
		wifier(state));
};

let k45 = Android('k45');
k45.drive();
k45.wifi();

const Cyborg = (name, speed = 9) => {
	let state = {
		name,
		speed
	};
	return Object.assign({},
		talker(state),
		walker(state),
		wifier(state)
	);
};

let Dolph = Cyborg("Dolph");
Dolph.walk();
Dolph.wifi();