const prompt = require ("prompt-sync")();

const name = prompt("Hi, what's your name? ");
console.log(`Welcome to our show, ${name}`);
console.log("\n");

const age = parseInt (prompt("How old are you? "));
const mamaguy = age-5;
console.log(`Hmmmm, you don't look a day over ${mamaguy}`);
console.log("\n");

const location = prompt (`Tell me ${name}, where do you live? `);
console.log(`Oh, I've heard ${location} is a lovely place.`);

console.log("\n");