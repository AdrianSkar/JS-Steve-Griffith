/*jshint esversion: 6*/

// food prices
const beerCost = 6.25;
const burguerCost = 6.75;
const popCost = 6.75;

//user's money
let accountBalance = 15.75;

//Check account balance
function checkBalance(amnt) {
	if (accountBalance - amnt >= 0) {
		return true;
	}
	else {
		console.log("Insufficient funds");
		return false;
	}
	//You could also do "return ((accountBalance - amnt) >= 0)"
}
//drink beer
function drinkBeer() {
	if (checkBalance(beerCost)) {
		accountBalance -= beerCost;
		console.log("Enjoy your beer.");
	}
	console.log("\tBalance: ", accountBalance.toFixed(2));
}

//eat burguer
function eatBurguer() {
	if (checkBalance(burguerCost)) {
		accountBalance -= burguerCost;
		console.log("Enjoy your burguer.");

	}
	console.log("\tBalance: ", accountBalance.toFixed(2));

}

//drink pop
function drinkPop() {
	if (checkBalance(drinkPop)) {
		accountBalance -= popCost;
		console.log('Enjoy your drink');

	}
	console.log('\tBalance: ', accountBalance.toFixed(2));

}

//Visit the carnival, eat and drink

const mealList = [drinkBeer, drinkPop, eatBurguer, drinkBeer];
function visitCarnival(mList) {
	for (let i = 0; i < mealList.length; i++) {
		console.log(mealList[i]);
		// mList[i].call();
		mList[i]();

	}
}
visitCarnival(mealList);




