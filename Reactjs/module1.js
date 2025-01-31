//default export
let x = 100;
// export default x;

let userDetails ={
        name:"Manohar",
        age:21
}
export default userDetails;

//named exports
const x1 = 101;
const user = "manohar";
const users=[
    {
        name:"Manohar Reddy",
        age:21,
        company:"abc",
        address:{
            pincode:506244,
            city:"Jangaon"
        }
    },
    {
        name:"emp1",
        age:22,
        company:"abc",
        address:{
            pincode:501244,
            city:"hyd"
    }
},
{
    name:"emp3",
    age:21,
    company:"abc",
    address:{
        pincode:506234,
        city:"Jangaon"
    }
}
]
export{
    x1, user, users
}