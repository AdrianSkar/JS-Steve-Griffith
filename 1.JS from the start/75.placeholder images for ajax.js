let fetch = require('node-fetch');
let url = 'https://picsum.photos/list';

fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data.length);
		console.log(data[0].format);
		console.log(data[0].width);
		console.log(data[0].height);
		console.log(data[0].id);
		console.log(data[0].post_url);

    /**
    //This code won't work through NodeJS
    for(let i=0; i<10; i++){
        let img = document.createElement('img');
        img.src = data[i].post_url;
        document.body.appendChild(img);
    }
    **/
	})
	.catch(err => {
		console.log(JSON.stringify(err, null, 2));
	});
