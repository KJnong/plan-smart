function registerUser(){
    
    let user ={};
    user.name = document.getElementById('firstname').value
    user.lastName = document.getElementById('lastname').value
    user.email = document.getElementById('email').value
    user.username = document.getElementById('username').value
    user.password = document.getElementById('password').value

    console.log(user)

    let http = new XMLHttpRequest();

    console.log('Ready state (A)='+ http.readyState);
    console.log('status (A)' + http.status);

    http.open("POST", "https://localhost:44301/api/values" , true)
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    console.log(http);
    
    console.log('Ready state (B)='+ http.readyState);
    console.log('status (B)' + http.status);
    
    http.onload = () =>{
        if(status == 200)
            console.log(http.responseText);

        else if(status == 404)
             console.log(http.responseText);
    }
    http.send(JSON.stringify(user))
    console.log('Ready state (C)='+ http.readyState);
    console.log('status (C)' + http.status);

    
}
var form = document.querySelector('#regForm');

form.addEventListener('submit',(e)=> {e.preventDefault() , registerUser()} )

