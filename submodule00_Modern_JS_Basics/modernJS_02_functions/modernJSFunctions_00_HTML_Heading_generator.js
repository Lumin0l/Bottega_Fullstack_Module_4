/* Function that makes headings with the input we give it in the amount we give it */

// My try
myHeadingGenerator = (content, number) => {
	return (`<h${number}>${content}</h${number}>`);
}

console.log(myHeadingGenerator("henloo", 2));

// Their try
// Literally the same, hooray!