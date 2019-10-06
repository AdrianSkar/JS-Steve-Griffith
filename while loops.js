//while and do..while
let total = 0;
while (total < 30) {
  // Executes after cheking condition
  total += Math.floor(Math.random() * 5) + 1;
  console.log(total);

}
let total2 = 0;
do {
  //Executes before checking condition
  total2 += Math.floor(Math.random() * 5) + 1;
  console.log(total2);

} while (total2 < 30);