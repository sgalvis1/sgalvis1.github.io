// Event is rising when the entire files are loaded 
// document.addEventListener("DOMContentLoaded", function(event){
//     alert("Document Loaded")
// });

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

// Onmousemove Event
var screenLog = document.querySelector('#square');
screenLog.addEventListener('mousemove', logKey);

// Map values
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  };

  // Change color Function
function logKey(e) {
    // var map = (0,0, 10, -50, 50);
    var xmap = scale(e.screenX,398,728,0,255);
    var ymap = scale(e.screenY,177,373,0,255);

//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}
//     Map X/Y: ${xmap}, ${ymap}`;
    screenLog.style.backgroundColor = `rgb(${xmap},${ymap}, ${xmap})`;
}

document.querySelector("body").addEventListener("mousemove", function(event){
    if(event.shiftKey === true){
        console.log("x: " + event.clientX);
    };
});