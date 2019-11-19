function registerUser(){
    
    let user ={};
    user.name = document.getElementById('firstname').value
    user.lastName = document.getElementById('lastname').value
    user.email = document.getElementById('email').value
    user.username = document.getElementById('username').value
    user.password = document.getElementById('password').value


    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/values" , true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () =>{
        if( http.status == 200)
            console.log(http.responseText);

        else if(http.status == 404)
             console.log(http.responseText);
    }

    http.send(JSON.stringify(user))   
}
var form = document.querySelector('#regForm');

form.addEventListener('submit',(e)=> {e.preventDefault() , registerUser()} )

