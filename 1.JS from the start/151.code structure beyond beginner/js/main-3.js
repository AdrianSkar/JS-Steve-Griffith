import { PIE, f } from './modules/a.mjs';
import someFunc, { CAKE } from './modules/b.js';
// g will be someFunc

/// Using imports

const APP = (function () {
	document.addEventListener('DOMContentLoaded', () => {
		console.log(PIE);
		f();
		someFunc();
		console.log(CAKE);
	});
})();