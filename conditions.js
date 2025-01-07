// if statement
// the if will work only for the true statments
if(10>=10){
    console.log("This is if block!");
}
// if else ladder
let isAdult = 10;
if(isAdult>=18){
    console.log("Major");
}
else{
    console.log("Minor")
}
 // ternary
 console.log(isAdult>=18 ? "Major1" : "Minor1");

 // if else if ladder
 let  day = prompt("Enter the day value: ");
 if(day==1){
    console.log("Sun");
 }
 else if(day ==2){
    console.log("Mon");
 }
 else if(day ==3){
    console.log("Tue");
 }
 else if(day==4){
    console.log("Wed");
 }
 else if(day==5){
    console.log("Thurs");
 }
 else if(day ==6){
    console.log("Fri");
 }
 else if(day==7){
    console.log("Sat");
 }
 else{
    console.log("Invalid value");
 }