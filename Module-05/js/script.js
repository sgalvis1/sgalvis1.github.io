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


//Change Color Touch function 
function squarecolor(e) {
    let rect = e.target.getBoundingClientRect();
    // screenLog.innerText = `
    //         Screen X/Y: ${e.touches[0].clientX}, ${e.touches[0].clientY}`;

    let xA = e.clientX - rect.x;
    let yA = e.clientY - rect.y;
    var xmap = scale(e.touches[0].clientX, rect.left, rect.right, 0, 255);
    var ymap = scale(e.touches[0].clientY, rect.top, rect.bottom, 0, 255);

    screenLog.style.backgroundColor = `rgb(${xmap},${ymap}, 100)`;
    screenLog.style.borderColor = `rgb(${xmap},${ymap}, 100)`;
}
// On hover Change color Function
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

//AJAX request for a txt file
// document.addEventListener("DOMContentLoaded", function (event) {
//     //     alert("Document Loaded")
//     document.querySelector("#ajaxBtn").addEventListener("click", function () {
//         var self = this;
//         var name = "";

//         console.log("button")

//         $ajaxUtils.sendGetRequest("/Data/names.txt",
//             function (request) {
//                 self.name = request.responseText;
//                 console.log(self.name);
//                 document.querySelector("#nameContent").innerText = self.name;
//             });


//     });
// });

//AJAX request for a JSON File
document.addEventListener("DOMContentLoaded", function (event) {
    //     alert("Document Loaded")
    document.querySelector("#ajaxBtn").addEventListener("click", function () {
        var self = this;
        var name = "";

        console.log("button")

        $ajaxUtils.sendGetRequest("/Data/names2.json",
            function (res) {
                document.querySelector("#nameContent").innerText =
                    `First Name: ${res.User2.firstName}
                Second Name: ${res.secondName}
                Age: ${res.age}
                E-mail ${res.mail}`;
            });


    });
});

// Canvas handle 
var canvas = document.querySelector("#myCanva");
var ctx = canvas.getContext("2d");

if (canvas.getContext) {
    console.log("Canvas is ready");
    // draw(canvas);
    drawHappyFace(canvas);
}

function draw(canvas) {
    // Rectangular Methods
    // Colored rect
    ctx.fillStyle = ('rgb(200,0,0)');
    ctx.fillRect(10, 10, 50, 50);

    // Colored Rect + Clear Rect
    ctx.fillStyle = ('rgb(0,0,200,0.5)');
    ctx.fillRect(30, 30, 50, 50);
    ctx.clearRect(45, 45, 20, 20);

    // Stroke rect (without fill color)
    // ctx.fillRect(100,30,50,50);
    ctx.strokeRect(50, 50, 50, 50);

    // Line path automatic closed and filled (start-to-end point)
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(200, 75);
    ctx.lineTo(200, 25);
    ctx.fill();

    // Line path open by default, closed if needed but without fill
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(270, 50);
    ctx.lineTo(270, 30);
    // ctx.closePath(); // Automatic Closed function
    ctx.stroke(); // Open path 

}

// Arcs 
function drawHappyFace(canvas) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(110,75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.stroke();

    // ctx.moveTo(100, 50);
    // ctx.arcTo(150, 50, 100, 100, 20);
    // ctx.stroke();
}

// Draw a circle on mose and touche move

// canvas.addEventListener("touchmove",drawCircle());
// canvas.addEventListener("touchmove",drawCircle());
canvas.addEventListener("mousemove", drawCircle);
canvas.addEventListener("touchmove", drawCircle);

function drawCircle(e) {
    // console.log(e);
    let rect = e.target.getBoundingClientRect();
    var xA = -10;
    var yA = -10;

    if (e.type == "mousemove") {
        if (e.shiftKey === true) {
            xA = e.clientX - rect.x;
            yA = e.clientY - rect.y;
        }
    }

    if (e.type == "touchmove") {
        xA = e.touches[0].clientX - rect.x;
        yA = e.touches[0].clientY - rect.y;
    }

    // var xmap = scale(e.touches[0].clientX, rect.left, rect.right, 0, 255);
    // var ymap = scale(e.touches[0].clientY, rect.top, rect.bottom, 0, 255);

    ctx.beginPath();
    ctx.moveTo(xA, yA);
    ctx.arc(xA, yA, 10, 0, Math.PI * 2, true);
    ctx.fill();
}