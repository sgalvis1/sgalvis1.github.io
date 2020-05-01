


function sayIt() {
    var input = document.getElementById("name").value;
    var output = document.getElementById("output");
    var msg = "Hello " + input + " !";
    var msg2 = "<h2> Hello " + input + " ! <h2>";

    output.className = "message";
    output.style.backgroundColor="#000000";
    output.style.color="#ffffff";
    output.style.textAlign = "right";
    
    output.textContent = msg;
    output.innerHTML = msg2;
    
    if(input==="student"){
        var title = document.querySelector("#title");
        title.textContent = title.textContent + " !!!";
        
    }
}
