/* They help dictate the order of actions happening */

// Let's say the example of a login:
const login = () => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve('User logged in...');
	  }, 2000);
	});
  }
  
  const updateAccount = () => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve('Updating last login...');
	  }, 2000);
	});
  }
  
  async function loginActivities() {
	const returnedLogin = await login(); // we tell the program to not move on until login goes through
	console.log(returnedLogin);
  
	const returnedUpdateAccount = await updateAccount();
	console.log(returnedUpdateAccount);
  }


/* 

Combining closures to ensure all processes have run

*/

/* const login = () => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve('User logged in...');
	  }, 4000);
	});
  }
  
  const updateAccount = () => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve('Updating last login...');
	  }, 2000);
	});
  }
  
  async function loginActivities(login, updateAccount) {
	const returnedLogin = await login;
	console.log(returnedLogin);
  
	const returnedUpdateAccount = await updateAccount;
	console.log(returnedUpdateAccount);
  }
  
  loginActivities(login(), updateAccount()); */