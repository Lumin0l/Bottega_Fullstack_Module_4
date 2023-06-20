/* Intro to JS promises */

/*

Very useful for working with outside APIs.

A promise will allow to use APIs in an asynchronous manner. That is, we can call for an interaction with a webpage and, even if the page is down or there is a slow load,
it will "save up" that interaction and keep going. It will save it and load when that data is back usable.

*/

// Example, delayed greeting:

// A promise is a set type of object:

let sleepyGreeting = new Promise((resolve, reject) => { // you create 2 inputs, so we build in 2 options and it will do something different in any case.
	setTimeout(() => { // we set a tymeout to symulate loading times
		resolve('Hello...')
	}, 2000); // 2000 milliseconds

	setTimeout(() => {
		reject(Error("Didn't work"))
	}, 2000);
});


// The common convention to using promises is to do it in several lines:
sleepyGreeting
	.then(data => { // we retrieve data, the => is to create a console.log to visualize it.
		console.log(data);
	})
	.catch(err => {
		console.error(err); // the catch is the "in case" action.
	})
