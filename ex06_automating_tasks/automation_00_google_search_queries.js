/* Introduction to automation with a few easy examples in google */

// First we need to find what class/id the search bar has with inspect.
// Once found (in the example it's gsfi), we type a command to return it

// $('.gsfi') -> this will showcase if we are right in the browser terminal

// Let's get the query:
// const searchBar = document.querySelector('.gsfi');
// That will check the htim (document) using the query selector function with gsfi as input.

// Then we need to find the search button (in our case jsb):
// First we get the whole object $('.jsb') -> and we get the whole object.
// In this case, the button will be hidden as a child of the wrapping object, so we need to "fish it":
// $('.jsb').childNodes[0].childNodes[0] (it's enbedded 2 levels down).
// lastly we command the click:
// $('.jsb').childNodes[0].childNodes[0].click

