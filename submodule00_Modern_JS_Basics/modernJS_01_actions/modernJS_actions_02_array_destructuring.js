/* An efficient way to grab elements from an array and assign them to variables */

// Let's say we have an array with endpoints to an API and we want top store them in different vars:
const apiList = [
	'https://api.dailysmarty.com/posts',
	'https://api.github.com/users/jordanhudgens/repos',
	'https://api.github.com/users/jordanhudgens'
  ]

/*  We could do it one by one like: 
  const post = apiList[0];
  const post = apiList[1];
*/

// We can do it in a single line creating an array of vars and making it equal to the original array:
const [posts, repos, profile] = apiList;

console.log(posts);
console.log(repos);
console.log(profile);
