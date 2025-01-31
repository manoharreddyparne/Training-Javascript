//default imports
// import x from "./module1.js";
// console.log(x);
 import userDetails from "./module1.js";
 console.log(userDetails);
 
// named imports:
import  { x1, user,users } from "./module1.js";
console.log("This is x1: "+x1);
console.log("This is user: "+user);
console.log("These are users: "+users);

users.map(user => { 
    console.log(user);
});

console.log("The addresses: ");
users.map(address=>{
    console.log(address.address);
})