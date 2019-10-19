/*jshint esversion: 6*/

// food prices
const beerCost = 6.25;
const burguerCost = 6.75;
const popCost = 6.75;

//user's money
let accountBalance = 15.75;

//drink beer
function drinkBeer() {
	accountBalance -= beerCost;
	console.log(accountBalance);
}

//eat burguer
function eatBurguer() {
	accountBalance -= burguerCost;
	console.log(accountBalance);

}

//drink pop
function drinkPop() {
	accountBalance -= popCost;
	console.log(accountBalance);
}

drinkPop();
drinkBeer();
eatBurguer();
drinkPop();
drinkBeer();
eatBurguer();
drinkPop();




