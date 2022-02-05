// Methods [other common/possible names]:
// 	- subscribe [on | add | listen]
//	- unsubscribe [off | remove | unlisten]
//	- publish [emit | announce]

export const pubsub = {
	events: {}, // {"eventName": [func1, func2, ...]}
	subscribe: function (evName, fn){
		console.log(`PUBSUB: someone subscribed to know about ${evName}`);
		// Add evt to existing list or create it:
		this.events[evName] = this.events[evName] || [];
		// Include fn in it (the callback that will execute when `evName` is published):
		this.events[evName].push(fn);
	},
	unsubscribe: function(evName, fn){
		console.log(`PUBSUB: someone unsubscribed from ${evName}`);
		// Remove ev function by name:
		if (this.events[evName]) {
			this.events[evName] = this.events[evName].filter(f => f !== fn);
		}
	},
	publish: function(evName, data){
		console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
		// Emit|announce|publish the event to anyone subscribed 
		// I.E.: run the callback function that was registered when subscribing for
		// that evt:
		if (this.events[evName]) {
			this.events[evName].forEach(fn => {
				fn(data);
			});
		}
		console.log(this.events);
	}
};
