
/*function retrieveItems(){
    
    let user ={};
    user.id = 1;

    let http = new XMLHttpRequest();  //creating http object
    http.open("POST", "https://localhost:44301/api/Items" , true)   //opening connection
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  // content type (meta data)

    http.onload = () =>{
        if( http.status == 200){
            let results = JSON.parse(http.responseText)
            populateTable(results)
        }

        else if(http.status == 404)
        alert("Wrong usrname or password")

    }
    
    http.send(JSON.stringify(user)) 
}

function populateTable(results){
    results.forEach((element) => {
        console.log(element);
        
        
    });
}


document.addEventListener("DOMContentLoaded", () => populateTable());*/