// Search and replace with indexOf() and replace() without regexes

let paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam inventore officiis, laudantium tempora, porro veritatis labore facilis voluptatibus consequatur, eaque praesentium blanditiis nisi voluptate aliquam doloremque ducimus ratione! Distinctio!";

let find = ' ';
let replace = '';

let newPara = paragraph; //''.concat(paragraph); to create a new copy if you're working with objects (passed by reference instead of value)

while (newPara.indexOf(find) > -1) {
	newPara = newPara.replace(find, replace);
}
console.log(newPara);
console.log(paragraph);