
const users = ["Manohar Reddy","Yadav","patel","doremon"];
console.log(users);
let x = users.join("")
console.log(x,typeof(x));

//arrow method
users.map((user, i)=>{
    console.log(user,i);

})
// storing and calling the function
let y = users.map((user,i)=>{
    return user;
})
console.log(y);

console.log("From here is the forEach method")
let z = users.forEach((user,i)=>{
    console.log(user);
    return user;  // returns an undefined
})
console.log(z);