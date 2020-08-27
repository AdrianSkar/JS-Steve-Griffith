//Document Object Model - DOM

/// 1. Convert the array of movies into a string
let str = movies.join(', ') + '.';

// movies.forEach(element => {
// 	str += element + ', ';
// });

console.log(str);

/// 2. Find the paragraph with the id "para"

let para = document.getElementById('para');

/// 3. Put the new string inside the paragraph

// para.textContent += str;
para.append(str);