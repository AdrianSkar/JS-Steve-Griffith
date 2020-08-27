const people = [
	{ id: 12, name: 'Billy', dob: '1998-10-05' },
	{ id: 123, name: 'Bart', dob: '1993-02-15' },
	{ id: 45, name: 'Belinda', dob: '1996-01-31' },
	{ id: 67, name: 'Bonnie', dob: '1998-04-09' },
	{ id: 89, name: 'Brenda', dob: '1994-09-12' },
	{ id: 234, name: 'Blake', dob: '2000-01-01' }
];

function byName(a, b) {//alphabetically by name
	// console.log(a.name, b.name);
	if (a.name > b.name) {
		return 1;
	} else if (a.name < b.name) {
		return -1;
	}
	return 0;
}
console.log(people.sort(byName));

function byId(a, b) {//numerically by id
	return parseInt(a.id) - parseInt(b.id);
}

console.log(people.sort(byId));

function byDate(a, b) {//chronologically by year, month, then day
	return new Date(a.dob).valueOf() - new Date(b.dob).valueOf();
}

console.log(people.sort(byDate));

function byBday(a, b) {//by month, then by day
	let d1 = new Date(a.dob); // 1993-02-15T00:00:00Z => 1993-03-14T20:00:00EST
	let d2 = new Date(b.dob);
	console.log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth());
	if (d1.getUTCMonth() > d2.getUTCMonth()) {
		return 1;
	} else if (d1.getUTCMonth() < d2.getUTCMonth()) {
		return -1;
	} else {//same month; compare by day
		return d1.getUTCDay() - d2.getUTCDay();
	}
}

console.log(people.sort(byBday));