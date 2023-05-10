/*
JS renders inside the browser, so it can also generate script.
*/

document; // document will call the content of a page in the shape of an object. All of the code.

// In order to filter there is a built in function:
document.getElementsByClassName('b1');

// Now we have filtered all 'b1' elements and let's say we want to select the first. We can index it.
document.getElementsByClassName('b1')[0];

// And we can change stuff inside it because it now is an object:
document.getElementsByClassName('b1')[0].innerHTML = "some changed content";

/*
It is very handy for automating processes. We can script outside webs to do things we want like fill user name or do requests.
*/