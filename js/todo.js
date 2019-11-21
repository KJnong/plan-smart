function retrieveItems() {
    let user = {};
    user.id = localStorage.getItem("idValue");

    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/Items", true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () => {
        if (http.status == 200) {

            let toDo = JSON.parse(http.responseText)
            populateTable(toDo)
            
        }

        else if (http.status == 404)
            alert("Wrong usrname or password")

    }

    http.send(JSON.stringify(user))
}


function populateTable(toDo) {
    const table = document.querySelector("#table");

     toDo.forEach((row) => 
     {
        var tableRow = table.insertRow(-1)
        var cell1 = tableRow.insertCell(0)
        var cell2 = tableRow.insertCell(1)
        var cell3 = tableRow.insertCell(2)
        cell1.innerHTML = moment(row.date).fromNow()
        cell2.innerHTML = row.commitment,
        cell3.innerHTML = "<button id = 'delete' type='click'>Done<button/>"

     });


     /*console.log('this is the first element: ', toDo[0]);
     const one = toDo.find(t => t.item_id === 1);
     console.log(one);*/
 


}
document.addEventListener("DOMContentLoaded", retrieveItems());


function InsertTodo(){

    let insert ={};
    insert.date = document.getElementById('date').value
    insert.commitment = document.getElementById('commitment').value
    insert.item_id = localStorage.getItem("idValue")



    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/Insert" , true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () =>{
        if( http.status == 200)
            console.log("Sent");

        else if(http.status == 404)
             console.log(http.responseText);
    }

    http.send(JSON.stringify(insert))
}
var form = document.querySelector('#insertForm');

form.addEventListener('submit',(e)=> {e.preventDefault() , InsertTodo()} )
