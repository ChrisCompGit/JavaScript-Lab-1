const prompt = require ("prompt-sync")();

const radius = parseInt(prompt("Hi, please enter the radius of a circle: "));

const circumference = (2*Math.PI)*radius;
const area =  Math.PI*(radius*radius);

console.log(`Hi there. You entered a radius of ${radius}. \n This means that the area of the circle is: ${area} \n The circumference of the circle is ${circumference}.`);

