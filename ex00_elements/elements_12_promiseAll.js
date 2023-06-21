/* Promise all, bunches promises together */

const greeting = new Promise((resolve, reject) => {
	resolve('Hi there');
	reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
	resolve("Updating login...");
	reject("Error updating account with login");
});

// Now, we can bunch those promises into one "checker"
const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
	res.forEach(activity => {
		console.log(activity); // we console log it to show how it iterates through the promises.
	})
})
