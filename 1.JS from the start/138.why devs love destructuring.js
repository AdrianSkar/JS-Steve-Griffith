let person = {
	id: 123,
	name: "Leslie",
	dob: new Date("1985-01-01").valueOf(),
	age: 44,
	salary: 55000,
	department: "Parks and recreation",
	hometown: "Pawnee"
};

// savePersonES5(person);
function savePersonES5(someObj) {
	let id = Date.now();
	if (someObj.id) {
		id = someObj.id;
	}
	let name = someObj.name;
	if (!name) {
		name = 'Blank';
	}
	let dob = someObj.dob ? someObj.dob : new Date("2000-01-01").valueOf();
	//save it in localStorage for later use
	const KEY = "someRandomUniqueString";
	let jsonStr = JSON.stringify({ id: id, name: name, dob: dob });
	localStorage.setItem(KEY, jsonStr);
}

function savePersonES6({ // brackets to "take" just the params you need from the incoming object
	id = Date.now(),
	name = "Blank",
	dob = new Date('2001-01-01').valueOf() // = to assign a default value
}) {
	const KEY = "someRandomUniqueString";
	let jsonSTR = JSON.stringify({ id, name, dob }); // no need for id:id anymore
	localStorage.setItem(KEY, jsonStr);
}