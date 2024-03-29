function loginUser()
{
    let userLogin ={};
    userLogin.username = document.getElementById('username').value
    userLogin.password = document.getElementById('password').value

    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/login" , true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () =>
    {
        if( http.status == 200)
        {
            const response = JSON.parse(http.responseText);
            var idValue = response.id;
            localStorage.setItem("idValue" , idValue)
            let name = response.name;
            localStorage.setItem('userName', name)
            window.location.href = "http://localhost/plan-smart/todo.html";
        }
        else if(http.status == 404)
             alert("Wrong usrname or password")
    }

    http.send(JSON.stringify(userLogin))   
}
var form = document.querySelector('#loginForm');

form.addEventListener('submit',(e)=> {e.preventDefault() , loginUser()} )