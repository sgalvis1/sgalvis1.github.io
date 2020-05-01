// Event is rising when the entire files are loaded 
document.addEventListener("DOMContentLoaded", function(event){
    alert("Document Loaded")
});

var bton = document.getElementById("btn");
bton.addEventListener("click",sayIt);

bton.addEventListener("blur", function(){
    this.textContent = "Say it";
});

var input = document.getElementById("name");
// input.onmouseleave = sayIt;


function sayIt() {
    this.textContent = "Said it";
    var input = document.getElementById("name").value;
    var output = document.getElementById("output");
    var msg = "Hello " + input + " !";
    var msg2 = "<h2> Hello " + input + " ! <h2>";

    

    output.className = "message";
    output.style.backgroundColor="#000000";
    output.style.color="#ffffff";
    output.style.textAlign = "center";
    
    output.textContent = msg;
    output.innerHTML = msg2;
    
    if(input==="student"){
        var title = document.querySelector("#title");
        title.textContent = title.textContent + " !!!";
        
    }
}
 