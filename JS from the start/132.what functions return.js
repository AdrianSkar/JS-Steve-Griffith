// functions by default return undefined

let app = null;

app = (function () {
	//IIFE; runs and then, it's return value is passed to the variable app
	return {
		buybeer: function (money) {
			if (money >= 3) {
				console.log('Your change is', money - 3, "and here is your beer.");
				return true;
			}
			// else	{return false;} // Not needed as "undefined" (default) is a falsy value
		}
	};
})();

let hadEnough = app.buybeer(5);
if (hadEnough) {
	console.log('They had enough money');
} else {
	console.log('Not enough money');
}
console.log(app);