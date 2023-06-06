/* Arrow functions and their interactions with this */

/* As reminders, this works as an object attribute */
// Copy-Paste for reference:
function Invoice(subTotal) {
	this.taxRate = 0.06;
	this.subTotal = subTotal;
  
	this.total = setInterval(() => {
	  console.log((this.taxRate * this.subTotal) + this.subTotal);
	  // console.log(this);
	}, 2000);
  }
  
  const inv = new Invoice(200);
  
  