/* const and let have the same scoping but const avoids overwriting
	1. Protection against accidentally overwriting(reassigning) your variables/functions.
2. Defining meaningful constants which would be used throughout the code.
*/

const test = console.log;
// test = console.warn; //TypeError: assignment to constant variable

console.log(test);

const obj = {
	a: 123
};
// obj = []// same as 4
obj.b = 'hello'; //const props can be manipulated 
obj.a = 423;
delete obj.a;

const f = function () {// cannot be overwritten

};


const mediaTypes = { audio: 0, video: 1, png: 2, jpeg: 3, webp: 4 };
const errorTypes = { notpaid: 0, notavailable: 1, paintball: 2 };

let myObj = {
	doSomething: function () {
		//do something but an error happens
		let num = Math.floor(Math.random() * 3);
		switch (num) {
			case 0: console.log('Error code is: ', errorTypes.notpaid);
				break;
			case 1: console.log('Error code is: ', errorTypes.notavailable);
				break;
			case 2:
			case 3:
			case 4: console.log('Error code is: ', errorTypes.paintball);
				break;
		}
	},
	saveMedia: function (type, data) {
		switch (type) {
			case 0:
				console.log(`saving an audio file`);
				break;
			case 1:
				console.log('saving a video file');
				break;
			case 2:
			case 3:
			case 4:
				console.log('saving an image');
				break;
		}

	}
};

myObj.doSomething();
myObj.saveMedia(mediaTypes.audio, 'audio.mp3');
myObj.saveMedia(mediaTypes.video, 'video.mp4');
myObj.saveMedia(mediaTypes.jpeg, 'image.jpeg');