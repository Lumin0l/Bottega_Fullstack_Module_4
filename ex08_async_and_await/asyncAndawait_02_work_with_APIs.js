/* How to work with APIs using Async and await */

async function queryApis() {
	const postsPromise = fetch(/* "the daily smarty API url" */);
	const posts = await postsPromise.then(rest => rest.json());
	console.log(posts);

	const reposPromise = fetch(/* "The github API url" */);
	const repos = await reposPromise.then(res => res.json());
	console.log(repos);
}

queryApis();

// In this program, with await, the process will start, it will get the data from daily smarty,
// And only when that is done will the process with github start.