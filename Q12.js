const prompt = require ("prompt-sync")();

const itemNumber = parseInt (prompt("Please enter the Item Number: "));
const price = parseInt (prompt (`Please enter the price of Item Number ${itemNumber}: `));
const itemTitle = prompt (`Please enter the Name of ${itemNumber}: `);
const discountFigure = parseInt (prompt ("Please enter the % discount to be applied: "));

const discountPercent = (discountFigure/100);
const discountAmount = discountPercent*price;
const reducedPrice = price-discountAmount;

console.log("\n");
console.log("**************CUSTOMER BILL *********************");
console.log(`Product Code: ${itemNumber}`);
console.log(`Product Title: ${itemTitle}`);
console.log(`Original Price: $${price.toFixed(2)}`);
console.log(`Discounted Amount: $${discountAmount.toFixed(2)}`);
console.log(`Customer Pay Amount: $${reducedPrice.toFixed(2)}`);