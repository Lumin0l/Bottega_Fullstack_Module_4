/* 
In an ideal world we know all the content of an object, but most of the time we will only have portions of that.

So how can we get default arguments with those unknown keys.
*/

// Let's say we want to take posts from a blog that has a title as mandatory but the summary is optional:
const blog = {
	title: "My post",
	summary: "Summary of the post"
}

const noSummary = {
	title: "My post",
}

const openGraphMetadata = ({ title, summary = "A DailySmarty Post" }) => { // we set something for summary in case no summary is included.
	console.log(`
		original-title= ${title}
		original-summary= ${summary}
	`)
}

openGraphMetadata(blog); // This will print "Summary of the post", because it has a summary.
openGraphMetadata(noSummary); // This will print "A DailySmarty Post", because it doesn't have one.
