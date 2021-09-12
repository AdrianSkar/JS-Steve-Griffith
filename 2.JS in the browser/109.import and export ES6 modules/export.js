
function defaultSum(num) {
	return num + num;
}

let exportSubs = num => num - 1;

export { defaultSum as default, exportSubs };