//using id method
let element1 = document.getElementById("demo");
console.log(element1);


//using class method
let ele = document.getElementsByClassName("test");
// ele[0].style.backgroundColor="dodgerblue"; //this allow to style the element using index.
// console.log(ele);
// console.log(Array.isArray(ele)); // This method is used to return boolean values based on whether the array is pure array or not.


//! spread operator
let x = [...ele];
console.log(x,Array.isArray(x));
x.map(element=>{
    element.style.backgroundColor="tomato";
    element.style.color="white";
    element.style.textTransform="uppercase"; //used to change the case.
});


//query selector
let ele1=document.querySelector("#demo");
console.log(ele1);
let ele2 = document.querySelector(".test");
console.log(ele2);

//query selectorAll
let ele3 = document.querySelectorAll(".test");
console.log(ele3);



//
let bgColor = document.querySelectorAll(" .bgColor ");
[...bgColor].map(element=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor=element.innerText;
    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor="transparent"
    })
})