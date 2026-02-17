//***********Number**************//

const score = 500
console.log(score);

const balance = new Number(200)
console.log(balance);

// In this you have to show the lenght of your numbers
console.log(balance.toString().length);

// This one is used for after decimal how many zero or anything you want to print 
console.log(balance.toFixed(2));


// Precision 

const hundred = 123.456
console.log(hundred.toPrecision(4));

// If you want to numbring in the formate  or Indian formate

const otherHundred = 10000000
console.log(otherHundred.toLocaleString('en-IN'));

//********************Maths*************/

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.67));
console.log(Math.ceil(4.32));
console.log(Math.floor(4.62));


console.log(Math.min(4,9,3,7,1,4,8));
console.log(Math.max(4,9,3,7,1,4,8));


// Random is prnt between the 0 to 1 

console.log(Math.random());


