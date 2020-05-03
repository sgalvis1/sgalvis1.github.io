// Event is rising when the entire files are loaded 
// document.addEventListener("DOMContentLoaded", function(event){
//     alert("Document Loaded")
// });

var bton = document.getElementById("btn");
bton.addEventListener("click", sayIt);

bton.addEventListener("blur", function () {
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
    output.style.backgroundColor = "#000000";
    output.style.color = "#ffffff";
    output.style.textAlign = "center";

    output.textContent = msg;
    output.innerHTML = msg2;

    if (input === "student") {
        var title = document.querySelector("#title");
        title.textContent = title.textContent + " !!!";

    }
}

// Onmousemove Event
var screenLog = document.querySelector('#square');
screenLog.addEventListener('mousemove', logKey);
screenLog.addEventListener('touchmove', squarecolor);

var pos = {};

// Map values
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var test = (msg) => console.log(msg);


function squarecolor(e) {
    let rect = e.target.getBoundingClientRect();
    screenLog.innerText = `
            Screen X/Y: ${e.touches[0].clientX}, ${e.touches[0].clientY}`;

    let xA = e.clientX - rect.x;
    let yA = e.clientY - rect.y;
    var xmap = scale(e.touches[0].clientX, rect.left, rect.right, 0, 255);
    var ymap = scale(e.touches[0].clientY, rect.top, rect.bottom, 0, 255);

    screenLog.style.backgroundColor = `rgb(${xmap},${ymap}, 100)`;
    screenLog.style.borderColor = `rgb(${xmap},${ymap}, 100)`;
}
// Change color Function
function logKey(e) {
    // var map = (0,0, 10, -50, 50);
    var outElement = {};
    let rect = e.target.getBoundingClientRect();

    let xA = e.clientX - rect.x;
    let yA = e.clientY - rect.y;
    var xmap = scale(e.clientX, rect.left, rect.right, 0, 255);
    var ymap = scale(e.clientY, rect.top, rect.bottom, 0, 255);



    screenLog.style.backgroundColor = `rgb(${xmap},${ymap}, 100)`;
    screenLog.style.borderColor = `rgb(${xmap},${ymap}, 100)`;

    if (e.shiftKey === true) {
        screenLog.innerText = `
            Screen X/Y: ${e.screenX}, ${e.screenY}
            Client X/Y: ${e.clientX}, ${e.clientY}
            Absolute X|Y : ${xA}, ${yA} 
            Map X/Y: ${xmap}, ${ymap}`;
        // console.log(e.target);
    }

    outElement.Position = [xA, yA];
    window.pos = outElement; // Post a local variable to the global env
    // return outElement;
}

document.querySelector("body").addEventListener("mousemove", function (event) {
    if (event.shiftKey === true) {
        console.log("x: " + event.clientX + " y: " + event.clientY);
    };
});