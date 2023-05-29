/* How to follow a bunch of hashtags in LI */

/* 
Same, we inspect to find the class name of the follow button.

Once we find it, we put them in a var:
	let hashtagBtns = document.querySelectorAll('.mn-discovery-hashtag-card__action-btn') // in our case that is the class.

Then we create a script to click them:
	hashtagBtns.forEach(btn => btn.click())
*/


/* Summary:

These processes follow 2 main steps:

	1- Find the query: inspect and find the name of the relevant class, query it and store it in a var we can use.
	2- Perform the action: create a function or loop that performs the action you want to do.

*/
