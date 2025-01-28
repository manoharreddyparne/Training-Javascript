//dynamic adding h1 tag to the html content
let ele = document.createElement("h1");
//dynamic adding the content to the dynamically created tag
ele.innerText = "Dynamically creation of html element"

// dynamically adding the id to the tag 
// type1
ele.id="demo";
//type2
ele.setAttribute("id","demo");
console.log(ele);

//making the dynamically added data to be appeared on the document
document.body.appendChild(ele);


let image = document.createElement("img");
image.src="IMG20221021090807.jpg";
console.log(image);
document.body.appendChild(image);
