//for loop example
// for(let a = 1; a<=100;a++){
//     if(a%2==0){
//         console.log(a + " is an Even Number");
//     }
//     else{
//         console.log(a+" is an Odd Number");
//     }
// }

var n = parseInt(prompt("Enter a value: ")); 
if (n > 0) {
    var fact_ = 1; 
    for (let i = n; i > 0; i--) { 
        fact_ *= i; 
    }
    console.log("Factorial of " + n + " is: " + fact_);
}  else {
    console.log("Enter a positive number.");
}
//while loop
let i =5;
while(i<=5){
    console.log("JavaScript");
    i++;
}
//do while loop
let x =5;
do{
    console.log("Hello");
    x++;
}
while(x<=5)
