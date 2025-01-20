let userdetails = {
    name:"manohar",
    age: 21,
}
console.log(userdetails);
console.log(userdetails.age);

//neseted objects:
let details = {
    name:"UB1",
    age:23,
    pincode:1312,
    mobile:{
        mb1:709231124,
        mb2:12124124
    }

}
console.log(details);
console.log(details.name);
console.log(details.mobile.mb1);
// objects inside the array

let users = [
    {
        name:"Manohar",
        age:21
    },{
    name:"Reddy",
    age:19
    },
    {
        name:"Yadav",
        age:20
    }
]
console.log(users);
console.log(users.name)