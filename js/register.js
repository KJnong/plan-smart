function registerUser(){
    
    let user ={};
    user.name = document.getElementById('firstname').value
    user.lastName = document.getElementById('lastname').value
    user.email = document.getElementById('email').value
    user.username = document.getElementById('username').value
    user.password = document.getElementById('password').value

    console.log(user)

    let http = new XMLHttpRequest();
    http.open("POST", "https://localhost:44301/api/values")
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(JSON.stringify(user))
}


var form = document.querySelector('#regForm');

form.addEventListener('submit',(e)=> {e.preventDefault() , registerUser()} )

