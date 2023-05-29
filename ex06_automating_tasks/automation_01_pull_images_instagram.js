/* How to pull images from instagram */

/* 

In instagram you can't take pictures and "save as", you need to take a couple more steps.

Need to inspect and find the tag for images and then run a script taht picks them and returns them in  a list.

const images;

const images = document.querySelectorAll('.FFVAD');

	Then loop through them:

images.forEach(img => console.log(img.src));

	That will print them, but you can get them into an array too:

let imageUrlArray = [];

images.forEach(img => imageUrlArray.push(img.src));

*/