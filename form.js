// loading into a variable
let form = document.querySelector("form");
let username = document.querySelector("uname");
let email = document.querySelector("#umail");
let password = document.querySelector("#upass");
let check = document.getElementById("check");
let show = document.getElementById("show");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name = username.value;
    let mail=email.value;

})






// hiding and showing the password
check.addEventListener("click",(event)=>{
    if(event.target.checked ==true){
        password.setAttribute("type","text");
        show.innerText="hide password";

    }
    else{
        password.setAttribute("type","password");
        show.innerText="show password";
    }
})