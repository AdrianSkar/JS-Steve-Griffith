// Boolean-ish
// null, undefined, 0, false, '', "", NaM -> False
// "Anything" else evaluates to true

const es = "";
const z = 0;
const n = null;
const u = undefined;
const f = false;
const i = NaN;

[es, z, n, u, f].forEach(element => console.log(!!element));

if (z || n || u || i) {
	let bob; //undefined
	console.log("True");
}
else {
	console.log('False');
}