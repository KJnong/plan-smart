function retrieveItems(){
    
    let user ={};
    user.id = 1;

    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/Items" , true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () =>{
        if( http.status == 200){
            
            let Todo = JSON.parse(http.responseText)
            populateTable(Todo)

           

        }

        else if(http.status == 404)
        alert("Wrong usrname or password")

    }

    http.send(JSON.stringify(user)) 
}


function populateTable(Todo)
{
    const table = document.querySelector("#table")
    Todo.forEach((row) => {
       var tableRow = table.insertRow(-1)
       var cell1 = tableRow.insertCell(0)
       var cell2 = tableRow.insertCell(1)
       cell2.innerHTML = row.commitment,
       cell1.innerHTML = row.date;
    });
    
 
}
document.addEventListener("DOMContentLoaded" , retrieveItems());






















/*

function InsertTodo(){
    
    let insert ={};
    user.name = document.getElementById('firstname').value
    user.lastName = document.getElementById('lastname').value
   


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

form.addEventListener('submit',(e)=> {e.preventDefault() , registerUser()} )*/

