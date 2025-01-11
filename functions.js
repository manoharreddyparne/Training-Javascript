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



// Higher order function and callback function

function hof(a){
    return a();
}

let fun_ = hof(function(){return "Callback function"});
console.log(fun_);

//Using arrow function:
let arr_ = (b)=>{
    return b();
}
let fun1_=arr_(()=>{
    return "Callback funtion with arrow function";
});
console.log(fun1_);

// map method
console.log("The below is the example for the map method(keyword)")
let users = ["manohar Reddy","Rohith","Nithin","Rahim","Thanoj"];
users.map(function(values){
    console.log(values);
})

//Closure Example1 (fun within fun)

let fun3_ = ()=>{
    var pres = "This is from main function";
    let pal = "Invoked with fun3_";
    console.log(pres, pal);
    function fun_in(){
        let a = "This is from fun2";
        var b ="Invoked with fun_in";
        console.log(a);
        console.log(b);
        function fun_in2(){
            let x = "This is from fun3";
            let y = "Invoked with fun_in2";
            console.log(x);
            console.log(y);
            console.log(pres);
            console.log(a);
        }
        fun_in2();
    }
    fun_in();
    
}
fun3_();


// //example2 for the closure
// function x(){
//     let a = 10;
//     let b = 30;
//     console.log(a, b);
//     function y(){
//         let p = "Js";
//         var q = "ReactJs";
//         console.log(p,q);
//         console.log(a);
//         function z(){
//             const username = "Manohar";
//             console.log(username);
//             console.log(a);
//             console.log(q);
//         }
//         z();
//     }
//     y();
// }
// x();

