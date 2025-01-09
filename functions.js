//my_function
console.log(`From here it's function.js file`)
function demo(){
    let name = "Manohar Reddy";
    let age =21;
    const address= 'hyderabad';
    console.log("My name is: "+name + " My age is " + age + ", I am from "+ address);

} 
demo();
// function without parameters
function demo1(){
    console.log("This is a function without parameter passed!");
}
demo1();

//function with parameters:
function parameterPass(a, b){
    console.log(a+b);
    console.log(a*b);
}
parameterPass(1,5);
parameterPass(5,2);

//Types function

//1. Named function
function named_function(){
    console.log("This is a named function");
}
named_function();

// 2. anonymous function
// function (){

// }();

// 3. function expression
// funtion load to the variable.
let x = function(){
    console.log("Function is not Executing with the anonymous Function but executing\nwith the variable called as function expression.");
}  
 x();

 //4. IIFE--> it is an immediate invoke function expression
 (
    function(){
        console.log("anonymous");
    }
 )();

 //5. arrow function
 x = ()=>
    console.log("This is a arrow function");
 x();

// function does not having the arguments can remove the ()
 let y = a => console.log(a);
 y(10);

 //explicit and implicit return. These are used to return the expressions.
 //explicit return is possible in both the normal as well as the arrow functions.
 function test1(a,b){
    return a+b;
 }
 console.log(test1(6,3));

 //arrow function for explicit.
let z = (a,b) => {
    return a*b;
}
console.log(z(5,3));

//Implicit return--> it does not required the return keyword
z = (a,b) => a+b;
console.log(z(400,200));
