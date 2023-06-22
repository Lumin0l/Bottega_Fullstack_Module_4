/* How to manage API errors using async and await */

// The easiest would be trying a "try and catch"
async function queryApis() {
	try {
	  const postsPromise = fetch('http://api.dailysmarty.com/posts');
	  const posts = await postsPromise.then(res => res.json());
	  console.log(posts);
	} catch(err) {
	  console.log(err);
	  console.log('There was an error with the DailySmarty API');
	}

	try {
		const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
		const repos = await reposPromise.then(res => res.json());
		console.log(repos);
	  } catch(err) {
		console.log(err);
		console.log('There was an error with the GitHub API');
	  }
	} // It is recommended when they are 2 different processes with 2 separate APIs to do 2 "try catch" systems.
	
	queryApis();