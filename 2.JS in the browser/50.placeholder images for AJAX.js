const fetch = require('node-fetch');
const url = 'https://picsum.photos/v2/list';

fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data.length);
		console.log(data[0]);
		// console.log(data[0].id);
		// console.log(data[0].author);
		// console.log(data[0].url);

		/* E.g.: Implementing some images (won't work on Node)
		for(let i = 0; i < 10; i++){
			let img = document.createElement('img');
			img.src = data[i].url;
			document.body.appendChild(img);
		}
		*/
	})
	.catch(err => console.log(err));

