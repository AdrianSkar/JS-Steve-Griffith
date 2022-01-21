let str = 'RAND TEXT TWO: ';
for (let i  = 0; i < 1000; i++){
	str += String.fromCharCode(Math.floor(Math.random()*60) +65);
}

console.log(str);