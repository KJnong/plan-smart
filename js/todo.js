document.querySelector('#welcomeName').innerHTML = `<h1>Welcome ${localStorage.getItem('userName')}  </h1>`;

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

    toDo.forEach((row) => {
        var tableRow = table.insertRow(-1);
        tableRow.classList.add("grid-view");

        var cell1 = tableRow.insertCell(0)
        var cell2 = tableRow.insertCell(1)
        var cell3 = tableRow.insertCell(2)
        cell1.innerHTML = moment(row.date).fromNow()
        cell2.innerHTML = `<input type="text" id="txt-${row.id}" class="display" readonly value="${row.commitment}" />`;
        cell3.innerHTML = `<button class = 'delete' type='click' onclick='deleteItem(${row.id})'>Done<button/>
                            <button class = 'btn-edit' type='click' onclick='Edit(${row.id}, "txt-${row.id}")'>Edit<button/>
                            <button class = 'btn-update' type='click' onclick='Update(${row.id} , "txt-${row.id}")'>Update<button/>`

    });


    /*console.log('this is the first element: ', toDo[0]);
    const one = toDo.find(t => t.item_id === 1);
    console.log(one);*/
}

function Edit(id, target)
{

    const element = document.getElementById(target);

    element.removeAttribute("readonly");

    element.closest('tr').classList.remove('grid-view');
    element.closest('tr').classList.add('grid-edit');
}

function Update(id, target )
{
    let http = new XMLHttpRequest();  //creating http object
    http.open("PUT", `https://localhost:44301/api/Insert/${id}`, true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    const newCommit = document.getElementById(target).value;
    http.send(JSON.stringify(newCommit));
    
    http.onload = () =>{
        newCommit.closest('tr').classList.add('grid-view') ,deleteTableRows()}; 
}



document.addEventListener("DOMContentLoaded", retrieveItems()); //initial retrieving of items upon login


function InsertTodo() {

    let insert = {};
    insert.date = document.getElementById('date').value
    insert.commitment = document.getElementById('commitment').value
    insert.item_id = localStorage.getItem("idValue")



    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/Insert", true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () => {
        if (http.status == 200) {
            console.log(inserted);

        }


        else if (http.status == 404)
            console.log(http.responseText);
    }

    http.send(JSON.stringify(insert))
}

var form = document.querySelector('#insertForm');
form.addEventListener('submit', (e) => { e.preventDefault(), InsertTodo(), deleteTableRows() })

function deleteItem(id)
{
    let http = new XMLHttpRequest();  //creating http object
    http.open("DELETE", `https://localhost:44301/api/Insert/${id}`, true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)
    http.send()
    http.onload = () =>deleteTableRows()
}

function deleteTableRows() {
    const table = document.querySelector("#table");
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    document.addEventListener("DOMContentLoaded", retrieveItems());
}