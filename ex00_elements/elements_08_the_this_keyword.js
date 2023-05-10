/*
This is mostly going to be commented explanation because the example is in a web.

"This" will pick the specific object that has been selected.
In a case where we create an instance for clicking, and console.log(this), whenever we click something it will print that something.
More in the future.
*/

/*
How to use it in pure vanilla JS.

It is commonly used inside of objects
*/

// Example: guide with authorization engine. If they are user it will render the content, if they are a free user it won't.
var guide = {
	title: 'Guide to programming',
	content: 'Awesome content',
	visibleTouser: function (viewingUserRole) { // This is the function inside the object that will check the status of the user.
		if (viewingUserRole === 'paid') {
			return true;
		} else {
			return false;
		}
	}, // comma because it is technically just another element.
	renderContent: function(userRole) { // Here comes the sauce. We want to use the previous function to check the status.
		if (this.visibleTouser(userRole)) { // We need to use 'this' when calling the method kind of like we call 'self.' in python classes.
			console.log(this.title + ' - ' + this.content);
		} else {
			this.content = "No content for you"
			console.log(this.title + ' - ' + this.content);
		}
	}
}

// Let's create our users:
paid_user = { role: 'paid' };
free_user = { role: 'free' };

guide.renderContent(paid_user.role);
guide.renderContent(free_user.role);

