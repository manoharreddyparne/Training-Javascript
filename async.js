// set interval and set time out.
console.log(19);
console.log(33);
// setInterval(() => {
//     console.log(100);
// }, 500);

// set time out.

// setTimeout(()=>{
//     console.log(100);
// },1000 // after some time it will exectue
// );
console.log(31);
console.log(52);


// Promise
//pending state
let p1 = new  Promise((resolve,reject)=>{
    // resolve("Success!");
});
console.log(p1);

//fullfilled state
let p2 = new Promise((resolve,reject)=>{
    resolve("Success!");
});
console.log(p2);

// failure and finally
p2.then((res)=>
{
    console.log(res);
}).catch(err=>console.log(err)).finally(()=>console.log("final1"))



//another example for failure and finally
let p3 = new Promise((resolve,reject)=>{
    reject("failure");
});
p3
.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>console.log("final2"))