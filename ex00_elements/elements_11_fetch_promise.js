/* Extended promises. Fetch function */

/* !!! IPORTANT !!! */

/* How to communicate with an outside API */

// We're going to set some console logs to visualize how the events are happening:
console.log("Starting Fetch call");

// we store our promise in a var using "fetch", a prebuilt function that has a promise inside:
const postPromise = fetch('https://api.dailysmarty.com/posts'); // We can ask fetch to get many different things, authentication logs, post data... in this case we're using the dailysmarty API.

// We're going to set some console logs to visualize how the events are happening:
console.log("After Fetch call");
console.log(postPromise);

console.log("After program has run");


// Okay, that was very linneal. How do we prep for errors and so on? with .then and .err
