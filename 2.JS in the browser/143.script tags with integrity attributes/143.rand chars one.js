let rangeText = 'RANGE TEXT: ';

for (let i = 0; i < 61; i++) {
	rangeText += String.fromCharCode(65 + i);
}

console.log(rangeText);

let randText = 'RAND TEXT ONE: ';

for (let i = 0; i < 1000; i++) {
	// Chars from 65 to 125 (those on rangeText)
	randText += String.fromCharCode(Math.floor(Math.random() * 60) + 65);
}

console.log(randText);
