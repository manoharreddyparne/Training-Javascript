// API fetching

function fetchUsers(){
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    response.then(res=>{
        //console.log(res)
        //console.log(res.json()); converting and printing without handling any errors.
        return res.json().then(data=>console.log(data)) // handling the exceptions if any
    }).catch(err=>console.log(err))
}
fetchUsers();