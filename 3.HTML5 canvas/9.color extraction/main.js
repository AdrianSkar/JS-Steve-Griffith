const APP = {
	canvas: null,
	ctx: null,
	data: [],
	img: null,
	init() {
		APP.canvas = document.querySelector('main canvas');
		APP.ctx = APP.canvas.getContext('2d');
		APP.canvas.width = 900;
		APP.canvas.height = 600;
		// APP.canvas.style.width = 900;
		// APP.canvas.style.height = 600;
		APP.img = document.createElement('img');
		APP.img.src = APP.canvas.getAttribute('data-src');

		// Add the image to the canvas once it loads:
		APP.img.onload = ev => {
			// Remember to specify ([...], dWidth,dHeight) or the image won't scale
			APP.ctx.drawImage(APP.img, 0, 0, APP.canvas.width, APP.canvas.height);

			// Get arr of [r,g,b,a] values from the image:
			let imgDataObj = APP.ctx.getImageData(
				0,
				0,
				APP.canvas.width,
				APP.canvas.height
			);
			APP.data = imgDataObj.data;
			// console.log(APP.data.length, 900 * 600 * 4);
			APP.canvas.addEventListener('mousemove', APP.getPixel);
			APP.canvas.addEventListener('click', APP.addBox);
		};
	},
	getPixel(ev) {
		// As the mouse moves around the image
		let cols = APP.canvas.width,
			{ offsetX, offsetY } = ev,
			// Method to get the [r,g,b,a] values for the current pixel:
			c = APP.getPixelColor(cols, offsetY, offsetX),
			// Build a color string for css:
			clr = `rgb(${c.red}, ${c.green}, ${c.blue})`; // ${c.alpha / 255}
		document.getElementById('pixelColor').style.backgroundColor = clr;
		// Save color to use in boxes:
		APP.pixel = clr;
		// Get the average of the surrounding pixel colors and draw square
		APP.getAverage(ev);
	},
	getAverage(ev) {
		// Create 41x41px avg color square
		let cols = APP.canvas.width,
			rows = APP.canvas.height;
		// Remove the current canvas content to draw the image and box again:
		APP.ctx.clearRect(0, 0, cols, rows);
		// Add img from memory:
		APP.ctx.drawImage(APP.img, 0, 0, cols, rows);
		let { offsetX, offsetY } = ev;
		// Square width:
		const inset = 20;
		// Inset by 20px as our workable range (between 20 and 880)
		offsetX = Math.min(offsetX, cols - inset); // (pointer, 880)
		offsetX = Math.max(inset, offsetX); // (20, pointer)
		offsetY = Math.min(offsetY, rows - inset); // (pointer, 580)
		offsetY = Math.max(inset, offsetY); // (20, pointer)

		// Total color values for the square:
		let reds = 0,
			greens = 0,
			blues = 0;
		// for anything in the range (x-20, y -20) to (x+20, y+20)
		for (let x = -1 * inset; x <= inset; x++) {
			for (let y = -1 * inset; y <= inset; y++) {
				let c = APP.getPixelColor(cols, offsetY + y, offsetX + x);
				reds += c.red;
				greens += c.green;
				blues += c.blue;
			}
		}
		let boxWidth = inset * 2 + 1,
			dims = boxWidth * boxWidth, // Box's total num of pixels
			red = Math.round(reds / dims), // avg color
			green = Math.round(greens / dims),
			blue = Math.round(blues / dims),
			clr = `rgb(${red}, ${green}, ${blue})`;
		// Save avg color for later?:
		APP.average = clr;
		// Square props and drawing:
		APP.ctx.fillStyle = clr;
		APP.ctx.strokeStyle = '#fff'; // border
		APP.ctx.strokeWidth = 2;
		APP.ctx.strokeRect(offsetX - inset, offsetY - inset, boxWidth, boxWidth);
		APP.ctx.fillRect(offsetX - inset, offsetY - inset, boxWidth, boxWidth);
	},
	getPixelColor(cols, y, x) {
		// See grid.html as reference for this algorithm:
		let pixel = cols * y + x,
			arrayPos = pixel * 4;
			// console.log(pixel, arrayPos);
		return {
			red: APP.data[arrayPos],
			green: APP.data[arrayPos + 1],
			blue: APP.data[arrayPos + 2],
			// alpha: APP.data[arrayPos + 3],
		};
	},
	addBox(ev) {
		// User clicked, add boxes below with color pixel and avg:
		let colors = document.querySelector('.colors'),
			pixel = document.createElement('span');
		pixel.className = 'box';
		pixel.setAttribute('data-label', 'Exact pixel');
		pixel.setAttribute('data-color', APP.pixel);

		let average = document.createElement('span');
		average.className = 'box';
		average.setAttribute('data-label', 'Average color');
		average.setAttribute('data-color', APP.average);

		pixel.style.backgroundColor = APP.pixel;
		average.style.backgroundColor = APP.average;
		colors.append(pixel, average);
	},
};

document.addEventListener('DOMContentLoaded', APP.init);
