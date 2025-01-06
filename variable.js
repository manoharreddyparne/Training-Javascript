console.log("This is variable.js file");
//global declaration
var a = 10;
console.log(a);

//script scope Declartion
let b = 20;
console.log(b);
const c = 30;
console.log(c);

//block scope Declaration
{
var a = 100;
console.log(a);
let n = 200;
console.log(n);
const o = 300;
console.log(o);
}
